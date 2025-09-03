import { useTheme } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { ThemeMode } from 'config';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SliderLight1 from 'assets/images/landing/pre-apps/slider-light-1.png';
import SliderLight2 from 'assets/images/landing/pre-apps/slider-light-2.png';
import SliderLight3 from 'assets/images/landing/pre-apps/slider-light-3.png';
import SamplePrevArrow from './SamplePrevArrow'
import SampleNextArrow from './SampleNextArrow';
import Items from './Items';

export default function PreBuildDashBoard() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
        <Grid component="section" id="decisions" container sx={{ justifyContent: 'center', gap: 7.5, px: { xs: 4, md: 0 } }}>
          <Grid sx={{ textAlign: 'center' }} size={{ xs: 12, md: 6 }}>
            <Grid container spacing={1.5}>
              <Grid size={12}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 0 }}>
                  Готовые решения для выездного сервиса
                </Typography>
              </Grid>
              <Grid size={12}>
                <Typography variant="body2" sx={{ fontSize: '1rem', mb: -2 }} align="center">
                  У Planify есть концептуальные рабочие страницы, такие как Главная, Приложение, Календарь.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Box
              className="preBuildDashBoard-slider"
              sx={{
                direction: 'initial',
                '.slider': { height: { xs: 'auto' }, '& .slide:not(.selected)': { transformOrigin: 'center !important' } }
              }}
            >
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                centerMode={downMD ? false : true}
                centerSlidePercentage={50}
                infiniteLoop={true}
                autoFocus={true}
                emulateTouch={true}
                swipeable={true}
                autoPlay={true}
                interval={2000}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && <SamplePrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && <SampleNextArrow onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
                }
              >
                <Items title="Список заявок" image={theme.palette.mode === ThemeMode.DARK ? SliderDark2 : SliderLight2} link="#" />
                <Items title="Статистика по заявкам" image={theme.palette.mode === ThemeMode.DARK ? SliderDark1 : SliderLight1} link="#" />
                <Items title="Планировщик" image={theme.palette.mode === ThemeMode.DARK ? SliderDark3 : SliderLight3} link="#" />
              </Carousel>
            </Box>
          </Grid>
        </Grid>
    </>
  );
}