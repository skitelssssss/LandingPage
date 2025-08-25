import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Grid,Typography, Stack, Button, Box, Collapse, Divider } from '@mui/material';
import { CheckCircleOutline, ExpandMore } from '@mui/icons-material';

import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';

import GridViewIcon from '@mui/icons-material/GridView';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function PricingPlans() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const commonCardBg = theme.palette.mode === 'dark' ? '#282C46' : '#F5F7FF';

  const plans = [
    {
      id: 'start',
      title: 'Start',
      subtitle: 'Для малого бизнеса и небольших команд',
      users: 'До 15 пользователей',
      price: 'Х BYN / месяц',
      shortFeatures: [
        'Управление заявками',
        'Планирование выездов',
        'Фотофиксация и чек-листы',
        'Онлайн-карта сотрудников',
        'Базовая аналитика',
        'Мобильное приложение',
        'Поддержка по email'
      ],
      description:
        'Идеально для небольших сервисных компаний, которые только начинают автоматизировать выездное обслуживание, чтобы уйти от хаоса в заявках и начать работать системно.',
      features: [
        'Управление заявками — вся информация по клиентам и задачам хранится в одном месте, без Excel и бумажек.',
        'Планирование выездов — удобное распределение задач по исполнителям, контроль сроков выполнения.',
        'Фотофиксация и чек-листы — отчётность «до/после», контроль качества работ.',
        'Онлайн-карта сотрудников — простое отображение местоположения и маршрутов.',
        'Базовая аналитика — ключевые метрики по заявкам, затраченным материалам и выполненным работам.',
        'Мобильное приложение — доступ к заданиям и отчетности в дороге.',
        'Поддержка по email — быстрые ответы на вопросы по настройке.'
      ],
      icon: <GridViewIcon sx={{ fontSize: '2.25rem', color: '#4CAF50' }} />, // 🟩 Зелёная
      color: '#4CAF50'
    },
    {
      id: 'team',
      title: 'Team',
      subtitle: 'Для растущих компаний',
      users: 'До 50 пользователей',
      price: 'Y BYN / месяц',
      shortFeatures: [
        'Всё из Start',
        'Расширенная аналитика',
        'Опросы и фидбек-формы',
        'Импорт данных из CRM',
        'Поддержка в чате'
      ],
      description:
        'Идеально для сервисных отделов с несколькими бригадами, где важны контроль и эффективность.',
      features: [
        'Расширенная аналитика — дополнительный модуль с подробной отчетностью на базе Apache Superset.',
        'Опросы и формы обратной связи — для оценки качества работы и удобства использования продукта.',
        'Импорт данных из CRM — импорт данных клиентов из используемых Вами систем.',
        'Поддержка в чате — быстрая консультация прямо в рабочем процессе.'
      ],
      icon: <RocketLaunchIcon sx={{ fontSize: '2.25rem', color: '#1976D2' }} />, // 🔵 Синяя
      color: '#1976D2'
    },
    {
      id: 'business',
      title: 'Business',
      subtitle: 'Корпоративное решение «под ключ»',
      users: 'Без ограничений',
      price: 'Индивидуальный расчёт',
      shortFeatures: [
        'Все функции Team',
        'ERP/CRM/API интеграция',
        'Кастомизация под процессы',
        'Автопланировщик',
        'GPS-трекинг',
        'Обучение персонала',
        'Персональный менеджер',
        'Поддержка 24/7'
      ],
      description:
        'Идеально для корпоративных клиентов с десятками бригад и филиалов, где нужны масштабируемость и интеграция. Planify Business масштабируется вместе с вашим бизнесом и интегрируется в экосистему компании.',
      features: [
        'Интеграция с ERP/CRM/API — единая экосистема для работы с корпоративными данными. Синхронизация информации из разных источников позволяет сопоставлять данные от полевых сотрудников с внутренними системами компании, выявлять закономерности и принимать более точные управленческие решения.',
        'Кастомизация решения — подстройте Planify под процессы именно вашей компании. Гибкая настройка интерфейсов, отчетности и бизнес-логики помогает внедрить систему без ломки привычных рабочих практик.',
        'Модуль «Автопланировщик» — автоматическое распределение заявок по оптимальным маршрутам и сотрудникам, оптимизация выездов с учётом расположения объектов и индивидуальных требований компании. Это экономит время диспетчеров, снижает расходы на логистику и ускоряет выполнение заказов.',
        'Модуль «GPS-трекинг» — точное отслеживание перемещений выездного сотрудника в реальном времени. Полный контроль над выездами, прозрачность для руководителей и доверие со стороны клиентов.',
        'Обучение персонала — пошаговое обучение сотрудников и сопровождение первых проектов. Ваши специалисты быстро осваивают Planify и начинают работать эффективнее с первого дня.',
        'Внедрение и адаптация под бизнес-процессы — помощь в настройке и запуске системы.',
        'Персональный менеджер — закрепленный эксперт, который всегда рядом.',
        'Поддержка 24/7 — круглосуточная помощь.'
      ],
      icon: <BusinessCenterIcon sx={{ fontSize: '2.25rem', color: '#9C27B0' }} />, // 🟪 Фиолетовая
      color: '#9C27B0'
    }
  ];

  return (
    <section aria-labelledby="tariff-plans">
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
          bgcolor: `#eef2f6`,
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center" textAlign="center" sx={{ mb: 6 }}>
            <Grid size={12}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, fontWeight: 700,mb: -1 }}>
                Выберите подходящий тариф Planify
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" sx={{ fontSize: '1rem', mb: -2 }} align="center">
                Автоматизируйте выездное обслуживание и начните работать системно
              </Typography>
            </Grid>
          </Grid>

          <article aria-labelledby="pricing-cards">
            <Grid container spacing={{ xs: 4, sm: 5 }} justifyContent="center">
              {plans.map((plan) => (
                <Grid key={plan.id} size={{ md: 4, sm: 6, xs: 12 }}>
                  <FadeInWhenVisible>
                    <SubCard
                      sx={{
                        bgcolor: commonCardBg,
                        borderRadius: 6,
                        textAlign: 'left',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        border: `1px solid ${theme.palette.divider}`,
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: theme.shadows[10],
                          '& .expand-icon': { transform: 'rotate(180deg)' }
                        }
                      }}
                    >
                      <Box sx={{ p: 2.5 }}>
                        <Stack spacing={2}>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar
                              variant="rounded"
                              sx={{
                                bgcolor: 'background.paper',
                                height: 56,
                                width: 56,
                                borderRadius: '12px',
                                boxShadow: 3
                              }}
                            >
                              {plan.icon}
                            </Avatar>
                            <Box>
                              <Typography variant="h4" fontWeight={700} color="text.primary">
                                {plan.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {plan.users}
                              </Typography>
                            </Box>
                          </Stack>

                          <Typography variant="body1" color="text.secondary">
                            {plan.subtitle}
                          </Typography>

                          <Typography variant="h5" fontWeight={600}>
                            {plan.price}
                          </Typography>

                          <Stack component="ul" spacing={1} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {plan.shortFeatures.map((feature, idx) => (
                              <Stack
                                key={idx}
                                component="li"
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{ fontSize: '0.875rem' }}
                              >
                                <CheckCircleOutline
                                  fontSize="small"
                                  sx={{ color: 'secondary.main' }}
                                />
                                <Typography variant="body2" color="text.primary">
                                  {feature}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>

                          <Button
                            onClick={() => handleToggle(plan.id)}
                            sx={{
                              mt: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              color: 'text.primary',
                              fontWeight: 600,
                              textTransform: 'none',
                              justifyContent: 'flex-start',
                              transition: 'all 0.3s',
                              '&:hover': {
                                color: 'secondary.dark',
                                textDecoration: 'underline',
                                bgcolor: 'transparent'
                              },
                              '& .expand-icon': {
                                transition: 'all 0.3s',
                                transform: expanded[plan.id] ? 'rotate(180deg)' : 'rotate(0)'
                              }
                            }}
                            endIcon={
                              <ExpandMore
                                className="expand-icon"
                                sx={{
                                  color: 'text.primary',
                                  fontSize: '1.5rem',
                                  transition: 'color 0.3s',
                                  '&:hover': {
                                    color: 'secondary.dark'
                                  }
                                }}
                              />
                            }
                          >
                            {expanded[plan.id] ? 'Скрыть подробности' : 'Узнать больше'}
                          </Button>

                          <Collapse in={expanded[plan.id]} timeout="auto" unmountOnExit>
                            <Typography variant="h6" fontWeight={600} gutterBottom color="text.primary">
                              Подробное описание: {plan.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                              {plan.description}
                            </Typography>
                            <Divider sx={{ my: 1.5 }} />
                            <Typography variant="subtitle2" fontWeight={600} gutterBottom color="text.primary">
                              Возможности:
                            </Typography>
                            <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
                              {plan.features.map((feature, idx) => (
                                <Typography
                                  key={idx}
                                  component="li"
                                  variant="body2"
                                  color="text.secondary"
                                  sx={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                                >
                                  {feature}
                                </Typography>
                              ))}
                            </Stack>
                          </Collapse>
                        </Stack>
                      </Box>
                    </SubCard>
                  </FadeInWhenVisible>
                </Grid>
              ))}
            </Grid>
          </article>
        </Container>
      </Box>
    </section>
  );
}