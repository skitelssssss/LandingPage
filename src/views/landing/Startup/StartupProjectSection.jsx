import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import BackgroundImag from 'assets/images/landing/bg-heand.png';

export default function StartupProjectSection() {
  const settings = {
    className: 'center',
    dots: false,
    arrows: false,
    centerPadding: '0',
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
      <Box
        className="project-info"
        sx={{
          bgcolor: 'dark.900',
          height: { xs: 150, sm: 200, md: 340, lg: 450, xl: 520 },
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Container component="section" sx={{ position: 'relative', zIndex: 1, px: { xs: 4, md: 4 } }}>
          <Box sx={{ mt: { xs: 4, md: 6, lg: 12, xl: 15 }, zIndex: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',

                '& .slick-slide.slick-current': {
                  opacity: 1,
                  '.MuiTypography-root': { color: 'primary.main' }
                },

                '& .slick-slider': {
                  textAlign: 'left',
                  '.MuiTypography-root': {
                    fontSize: { xs: '1rem', sm: '1.563rem', md: '2.25rem', xl: '3rem' },
                    cursor: 'pointer'
                  }
                }
              }}
            >
              <Box
                sx={{
                  marginTop: { sm: '5%', lg: '4%' },
                  width: { xs: '38%', md: '100%' },
                  paddingLeft: { xs: 2, md: 0, xl: 0 }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    width: 'max-content',
                    fontSize: { xs: '1rem', sm: '1.563rem', md: '2.25rem', xl: '3rem' },
                    mt: { xs: 3, sm: 3.75, md: 5.5, xl: 7 },
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Planify —
                </Typography>
              </Box>
              <Slider {...settings} >
                <Typography variant="body1">
                  Белорусский разработчик
                </Typography>
                <Typography variant="body1">
                  Защита персональных данных
                </Typography>
                <Typography variant="body1">
                  Конкурентные цены
                </Typography>
                <Typography variant="body1">
                  Простота внедрения
                </Typography>
                <Typography variant="body1">
                  Интуитивно понятный интерфейс
                </Typography>
                <Typography variant="body1">
                  Подходит для любой компаний
                </Typography>
                <Typography variant="body1">
                  Быстрая окупаемость
                </Typography>
              </Slider>
            </Stack>
          </Box>
        </Container>
        <CardMedia
          component="img"
          image={BackgroundImag}
          alt="Planify ;("
          sx={{
            position: 'absolute',
            bottom: { sm: -40, md: -80 },
            right: { sm: 30, md: 50, lg: 130 },
            width: { xl: 240, lg: 220, md: 150, sm: 100, xs: 0 },
            maxWidth: '100%',
            filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
          }}
        />
      </Box>
  );
}
