import { useState } from 'react';
import { Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import FeedbackFormModalDesktop from './FeedbackFormModalDesktop';
import FeedbackFormModalMobile from './FeedbackFormModalMobile';
import PrivacyPolicyModal from '../Privacy/PrivacyPolicyModal';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const FeedbackFormModal = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const [open, setOpen] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      handleClose();
      setSnackbar({
        open: true,
        message: 'Спасибо! Мы свяжемся с вами.',
        severity: 'success',
      });

      setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      setAgreed(false);
      setErrors({});
    } catch (error) {
      console.error('Ошибка:', error);
      setSnackbar({
        open: true,
        message: 'Не удалось отправить. Попробуйте позже.',
        severity: 'error',
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const ModalComponent = isMobile ? FeedbackFormModalMobile : FeedbackFormModalDesktop;

  return (
    <>
      <Button
        onClick={handleOpen}
        size="large"
        variant="text"
        color="text.primary"
      >
        Связаться с нами
      </Button>

      <ModalComponent
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        agreed={agreed}
        setAgreed={setAgreed}
        errors={errors}
      />

      <PrivacyPolicyModal open={openPolicy} onClose={() => setOpenPolicy(false)} />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          icon={<CheckIcon fontSize="inherit" />}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FeedbackFormModal;