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
    resetForm();
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 500 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleOpenPolicy = () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

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
          <Typography variant="h5" color="text.secondary" mb={2}>
            Оставьте заявку, и мы свяжемся с вами в ближайшее время.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Имя"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              color="secondary"
            />

            <TextField
              fullWidth
              label="Фамилия"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              color="secondary"
            />

            <TextField
              fullWidth
              label="E-mail*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              color="secondary"
              error={!!errors.email}
              helperText={errors.email || ' '}
            />

            <TextField
              fullWidth
              label="Компания*"
              name="company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              color="secondary"
              error={!!errors.company}
              helperText={errors.company || ' '}
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
              margin="normal"
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
              sx={{ mt: 1 }}
            />
            {errors.agreement && (
              <Typography variant="body2" color="error" fontSize="0.875rem" mt={0.5}>
                {errors.agreement}
              </Typography>
            )}

            <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
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

      <>
        <Modal
          open={openPolicy}
          onClose={handleClosePolicy}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 600 },
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            overflowY: 'auto'
          }}>
            <Typography id="modal-title" variant="h2" component="h2" gutterBottom>
              <strong>Политика конфиденциальности</strong>
            </Typography>

            <Box id="modal-description" sx={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              <Typography component="div">
                <strong>1. Общие положения</strong><br />
                1.1. Настоящая политика конфиденциальности (далее — Политика) разработана в целях защиты конфиденциальности персональных данных, предоставляемых Пользователями, и определяет порядок обработки Получателем информации персональных данных и меры по обеспечению их безопасности.<br />
                1.2. Политика направлена на защиту прав и свобод Пользователей, персональные данные которых обрабатывает Получатель информации.<br />
                1.3. Получатель информации обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://planify.by. Заполняя соответствующие формы и/или отправляя свои персональные данные Получателю информации, Пользователь выражает свое согласие с данной Политикой. Пользователь является единственным субъектом, правомочным принимать решение о предоставлении Получателю информации своих персональных данных.<br />
                1.4. Получатель информации обрабатывает персональные данные автоматизированными способом, с использованием средств вычислительной техники или без использования таких средств.<br />
              </Typography>

              <Typography component="div" sx={{ mt: 2 }}>
                <strong>2. Основные понятия, используемые в Политике</strong><br />
                2.1. Сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://planify.by.<br />
                2.2. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.<br />
                2.3. Получатель информации – Общество с ограниченной ответственностью «ЮтикСофт» (ООО «ЮтикСофт»), самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.<br />
                2.4. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю Сайта.<br />
                2.5. Пользователь – любой посетитель Сайта;<br />
                2.6. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.<br />
              </Typography>

              <Typography component="div" sx={{ mt: 2 }}>
                <strong>3. Обработка персональных данных Пользователей</strong><br />
                3.1. Получатель информации обрабатывает следующие персональные данные Пользователя: фамилия, имя, отчество, номер телефона адрес своей электронной почты.<br />
                3.2. Обработка персональных данных Пользователя осуществляется Получателем информации с соблюдением норм законодательства Республика Беларусь с целью:<br />             
                <ol>3.2.1 оказания Получателем оказываемых услуг, а также информирования о ходе оказания услуги и возможных изменениях;<br />
                3.2.2. предоставления Пользователю доступа к сервисам, информации и/или материалам, содержащимся на Сайте;<br />
                3.2.3. информирования о специальных акциях и предложениях и т.п.;<br />
                3.2.4 информационной рассылки;<br />
                3.2.5. ответов на запросы и предложения Пользователей.<br /></ol>
                3.3 Получатель информации обрабатывает персональные данные Пользователей с их согласия, предоставляемого последним путем совершения конкретных действий на Сайте, в том числе, но не ограничиваясь, подпиской на рассылку, а также проставлением отметки о согласии на обработку персональных данных.<br />
                3.4. Также на Сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики.<br />
                3.5. Пользователь может в любой момент отказаться от получения информационных сообщений, направив Получателю письмо на адрес электронной почты info@planify.by с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях»<br />
              </Typography>

              <Typography component="div" sx={{ mt: 2 }}>
                <strong>4. Сведения об обеспечении безопасности персональных данных Пользователей</strong><br />
                4.1. Получатель информации при обработке персональных данных принимает необходимые правовые, организационные и технические меры или обеспечивает их принятие для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.<br />
                4.2. Меры по обеспечению безопасности персональных данных при их обработке, применяемые Получателем информации реализуются в целях обеспечения соответствия требованиям законодательства Республики Беларусь.<br />
                4.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Получателю информации уведомление на адрес электронной почты info@planify.by с пометкой «Актуализация персональных данных».<br />
                4.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Получателю информации уведомление посредством электронной почты на электронный адрес info@planify.by с пометкой «Отзыв согласия на обработку персональных данных».<br />
              </Typography>

              <Typography component="div" sx={{ mt: 2 }}>
                <strong>5. Заключительные положения</strong><br />
                5.1. Отношения между Получателем информации и Пользователем регулируются и толкуются в соответствии с законодательством Республики Беларусь. Вопросы, не урегулированные настоящей Политикой, подлежат разрешению в соответствии с законодательством Республики Беларусь. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Получателю информации на электронный адрес info@planify.by.<br />
                5.2. Политика представляет собой публичную оферту, в соответствии с частью 2 статьи 407 Гражданского Кодекса Республики Беларусь. Факт проставления отметки о согласии с содержанием Политики Пользователем на Сайте является полным и безоговорочным акцептом настоящей Политики.<br />
                5.3. Получатель информации оставляет за собой право по своему личному усмотрению изменять и (или) дополнять Политику в любое время без предварительного и (или) последующего уведомления Пользователя. Новая Политика вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено в новой редакцией Политики.<br />
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleClosePolicy}
              sx={{ mt: 3,
                    borderRadius: '13px'
              }}
            >
              Закрыть
            </Button>
          </Box>
        </Modal>
      </>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
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