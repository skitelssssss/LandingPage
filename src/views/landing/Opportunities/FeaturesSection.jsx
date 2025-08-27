import { Grid, Typography } from '@mui/material';
import { IconCircleCheck } from '@tabler/icons-react';
import CardMedia from '@mui/material/CardMedia';
import LayerRight from 'assets/images/landing/customization-right.png';

export default function FeaturesSection() {
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
    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container spacing={2.5}>
          <Grid size={12}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: -1.5 }}
            >
              Ключевые возможности
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} />
              Учёт и планирование заявок (ручное и автоматическое)
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} />
              Гибкое распределение выездов с помощью удобного календаря
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} />
              Онлайн-мониторинг работы специалистов
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} />
              Контроль запасов и материалов, GPS-трекинг
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} /> Маршрутизация - построение наиболее оптимального маршрута
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} /> Чек-листы, фотоотчёты и опросники
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} /> Интеграция с CRM и другими системами
            </Typography>
            <Typography sx={listSX}>
              <IconCircleCheck size={20} /> Статистические данные и аналитика
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container justifyContent="center">
          <Grid size="auto">
          <CardMedia
            component="img"
            image={LayerRight}
            alt="Ключевые возможности Planify"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: { xs: '220px', sm: '280px', md: '360px' },
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}