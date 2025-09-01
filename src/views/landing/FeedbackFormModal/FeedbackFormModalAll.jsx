import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';

export default function FeedbackFormModalAll ({ open, onClose, onSubmit, formData, setFormData, agreed, setAgreed, errors, setOpenPolicy }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 7,
    p: 4,
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h2" component="h2" mb={1} fontSize="1.5rem">
          Свяжитесь с нами
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Оставьте заявку, и мы свяжемся с вами в ближайшее время.
        </Typography>

        <form onSubmit={onSubmit}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
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
                    onClick={(e) =>{ e.stopPropagation();
                      setOpenPolicy(true);
                    }}
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
            <Button type="button" onClick={onClose} color="text.primary">
              Отмена
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ borderRadius: '13px' }}
            >
              Отправить
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};