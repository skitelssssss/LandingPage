import { Stack, Grid, Typography } from '@mui/material';
import { IconCircleCheck } from '@tabler/icons-react';
import CardMedia from '@mui/material/CardMedia';
import LayerLeft from 'assets/images/landing/customization-left.png';

export default function AllowSection() {
  const listSX = {
    display: 'flex',
    gap: '0.7rem',
    padding: '10px 0',
    fontSize: '1rem',
    color: 'grey.900',
    svg: { color: 'secondary.main', minWidth: 20 },
    overflowWrap: 'break-word',
    wordBreak: 'break-word'
  };

  return (
    <Grid container spacing={3} direction={{ xs: 'column', md: 'row' }} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack sx={{ mb: 4, mx: 'auto', maxWidth: '100%' }}>
          <CardMedia
            component="img"
            image={LayerLeft}
            alt="Planify позволяет автоматизировать процессы"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: { xs: '220px', sm: '280px', md: '360px' },
              objectFit: 'contain',
            }}
          />
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}
        >
          Planify позволяет
        </Typography>
        <Typography sx={listSX}>
          <IconCircleCheck size={20} />
          Автоматизировать задачи и рутинные операции
        </Typography>
        <Typography sx={listSX}>
          <IconCircleCheck size={20} />
          Эффективно планировать выезды и рабочие графики
        </Typography>
        <Typography sx={listSX}>
          <IconCircleCheck size={20} />
          Минимизировать ошибки за счет цифровых сценариев
        </Typography>
        <Typography sx={listSX}>
          <IconCircleCheck size={20} />
          Обеспечить прозрачность и контроль всех этапов работы
        </Typography>
        <Typography sx={listSX}>
          <IconCircleCheck size={20} />
          Повысить доверие и лояльность клиентов
        </Typography>
      </Grid>
    </Grid>
  );
}