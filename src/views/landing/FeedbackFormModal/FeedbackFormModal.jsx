import { useState } from 'react';
import { Button } from '@mui/material';
import FeedbackFormModalAll from './FeedbackFormModalAll';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useMediaQuery } from '@mui/material';

const FeedbackFormModal = ({ onPrivacyPolicyOpen }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <Button
        onClick={handleOpen}
        size="large"
        variant="outlined"
        color="text.primary"
        sx={{ borderRadius: '13px', textTransform: 'none', zIndex: 1 }}
      >
        Связаться с нами
      </Button>

      <FeedbackFormModalAll
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        agreed={agreed}
        setAgreed={setAgreed}
        errors={errors}
        onPrivacyPolicyOpen={onPrivacyPolicyOpen}
        isMobile={isMobile}
      />

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