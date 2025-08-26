import { useState } from 'react';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PrivacyPolicyModal from './PrivacyPolicyModal'; 

const FeedbackFormModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
    if (errors.agreement) {
      setErrors((prev) => ({ ...prev, agreement: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Укажите название компании';
    }

    if (!agreed) {
      newErrors.agreement = 'Требуется согласие на обработку персональных данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 2000))

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка сети');
      }

      handleClose();
      setSnackbar({
        open: true,
        message: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
        severity: 'success',
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
      });
      setAgreed(false);
      setErrors({});

    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSnackbar({
        open: true,
        message: 'Не удалось отправить. Проверьте подключение и попробуйте позже.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleOpenPolicy = () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '89%', sm: 500 },
    maxWidth: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 7,
    p: { xs: 4, sm: 4, md: 4 },
    mt: 2,
    mb: 2,
    maxHeight: '80vh',
    overflowY: 'auto', 
  };

  return (
  <>
    <Button
      component="button"
      onClick={handleOpen}
      size="large"
      variant="text"
      color="text.primary"
    >
      Связаться с нами
    </Button>

    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h2" component="h2" mb={1} fontSize="1.5rem">
          Свяжитесь с нами
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={3}>
          Оставьте заявку, и мы свяжемся с вами в ближайшее время.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: '0.5rem',
              px: { xs: 0, sm: 0, md: 0 },
            }}
          >
            <TextField
              fullWidth
              label="Имя"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />

            <TextField
              fullWidth
              label="Фамилия"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />

            <TextField
              fullWidth
              label="E-mail*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              fullWidth
              label="Компания*"
              name="company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
              color="secondary"
              error={!!errors.company}
              helperText={errors.company}
            />

            <TextField
              fullWidth
              label="Сообщение"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              color="secondary"
            />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={handleAgreementChange}
                    color="secondary"
                    inputProps={{ 'aria-label': 'Согласие на обработку персональных данных' }}
                  />
                }
                label={
                  <Typography variant="body2" fontSize="0.875rem">
                    Я даю согласие на обработку персональных данных{' '}
                    <Link
                      component="button"
                      type="button"
                      onClick={handleOpenPolicy}
                      color="secondary"
                      sx={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      (политика конфиденциальности)
                    </Link>
                  </Typography>
                }
              />
              {errors.agreement && (
                <Typography variant="body2" color="error" fontSize="0.875rem">
                  {errors.agreement}
                </Typography>
              )}
            </Box>

            <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
              <Button type="button" onClick={handleClose} color="text.primary">
                Отмена
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={loading}
                sx={{ borderRadius: '13px' }}
              >
                {loading ? 'Отправка...' : 'Отправить'}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
      
      <PrivacyPolicyModal open={openPolicy} onClose={handleClosePolicy} />
      
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