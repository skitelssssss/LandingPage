import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { IconCircleCheck } from '@tabler/icons-react';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

export default function CustomizeSection() {
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
    // TODO: убрать лишние теги
    // TODO: разбить на два
    <section aria-labelledby="the-advantages-page">
      <Container sx={{ px: { xs: 4, md: 0 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} sx={{ justifyContent: 'center' }}>
          
          <Grid size={12}>
            <Grid
              container
              spacing={3}
              direction={{ xs: 'column', md: 'row' }}
              alignItems="center"
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack sx={{ mb: 4, mx: 'auto', maxWidth: '100%' }}>
                  <CardMedia
                    component="img"
                    image={LayerLeft}
                    alt="Преимущества"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: { xs: '220px', sm: '280px', md: '360px' },
                      objectFit: 'contain',
                      borderRadius: 2
                    }}
                  />
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
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
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2.5}>
                  <Grid size={12}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: -1.5 }}>
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
              <Grid sx={{ img: { width: '100%' } }} size={{ xs: 12, md: 6 }}>
                <Stack sx={{ width: '70%', mx: 'auto' }}>
                  <CardMedia component="img" image={LayerRight} alt="Layer" />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}