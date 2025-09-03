import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { SnackbarContext } from 'contexts/SnackbarContext'; 
import { useContext } from 'react';
import FeedbackFormModalAll from './FeedbackFormModalAll';

const DataForm = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

const FeedbackFormModal = ({ onPrivacyPolicyOpen, open, onClose }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [formData, setFormData] = useState(DataForm);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const { showSnackbar } = useContext(SnackbarContext);

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Введите email';
    if (!formData.company.trim()) newErrors.company = 'Укажите компанию';
    if (!agreed) newErrors.agreement = 'Требуется согласие';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Ошибка сети');

      onClose();
      showSnackbar('Спасибо! Мы свяжемся с вами.', 'success');

      setFormData(FormData);
      setAgreed(false);
      setErrors({});
    } catch (error) {
      showSnackbar('Не удалось отправить. Попробуйте позже.', 'error');
    }
  };

  return (
    <>
      <FeedbackFormModalAll
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        agreed={agreed}
        setAgreed={setAgreed}
        errors={errors}
        onPrivacyPolicyOpen={onPrivacyPolicyOpen}
        isMobile={isMobile}
      />
    </>
  );
};

export default FeedbackFormModal;