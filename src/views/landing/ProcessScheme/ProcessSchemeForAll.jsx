import { Box, useMediaQuery } from '@mui/material';
import { ImageAnimation } from './ImageAnimation';
import { AnimatedArrow } from './AnimatedArrow';
import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';
import ArrowRight from 'assets/images/landing/arrow-right.png';
import ArrowUp from 'assets/images/landing/arrow-up.png';
import ArrowLeft from 'assets/images/landing/arrow-left.png';

export default function ProcessScheme({ visibleElements, imagesLoaded }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const imageConfig = [
    { src: ProcessImage, alt: 'Процессы', index: 0 },
    { src: PlanningImage, alt: 'Планирование', index: 2 },
    { src: ControlImage, alt: 'Контроль', index: 4 },
    { src: ResultImage, alt: 'Результат', index: 6 },
  ];

  return isMobile ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 6 },
        position: 'relative',
        px: 2,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100vw',
          px: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <ImageAnimation
            src={imageConfig[0].src}
            alt={imageConfig[0].alt}
            label="Процессы"
            isVisible={imagesLoaded && visibleElements.includes(imageConfig[0].index)}
          />
        </Box>

        <Box sx={{ mx: 0.5 }}>
          <AnimatedArrow
            src={ArrowUp}
            isVisible={visibleElements.includes(1)}
            isMobile={isMobile}
            style={{
              width: 'clamp(40px, 10vw, 70px)',
              height: 'auto',
              aspectRatio: '70 / 90',
            }}
            direction="y"
            offset={-10}
          />
        </Box>

        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <ImageAnimation
            src={imageConfig[1].src}
            alt={imageConfig[1].alt}
            label="Планирование"
            isVisible={imagesLoaded && visibleElements.includes(imageConfig[1].index)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '51%',
          left: '50%',
          transform: { xs: 'translate(-30%, -50%)', md: 'translate(-50%, -50%)' },
          pointerEvents: 'none',
        }}
      >
        <AnimatedArrow
          src={ArrowLeft}
          isVisible={visibleElements.includes(3)}
          isMobile={isMobile}
          style={{
            width: 'clamp(60px, 15vw, 90px)',
            height: 'auto',
            aspectRatio: '140 / 130',
          }}
          direction="x"
          offset={-10}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100vw',
          px: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <ImageAnimation
            src={imageConfig[2].src}
            alt={imageConfig[2].alt}
            label="Контроль"
            isVisible={imagesLoaded && visibleElements.includes(imageConfig[2].index)}
          />
        </Box>
        <Box sx={{ mx: 0.5 }}>
          <AnimatedArrow
            src={ArrowUp}
            isVisible={visibleElements.includes(5)}
            isMobile={isMobile}
            style={{
              width: 'clamp(40px, 10vw, 70px)',
              height: 'auto',
              aspectRatio: '70 / 90',
            }}
            direction="y"
            offset={-10}
          />
        </Box>
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <ImageAnimation
            src={imageConfig[3].src}
            alt={imageConfig[3].alt}
            label="Результат"
            isVisible={imagesLoaded && visibleElements.includes(imageConfig[3].index)}
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        minHeight: 100,
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <ImageAnimation
          src={imageConfig[0].src}
          alt={imageConfig[0].alt}
          label="Процессы"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[0].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrow 
          src={ArrowRight} 
          isVisible={visibleElements.includes(1)} 
          isMobile={isMobile}
        />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <ImageAnimation
          src={imageConfig[1].src}
          alt={imageConfig[1].alt}
          label="Планирование"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[1].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrow 
          src={ArrowRight} 
          isVisible={visibleElements.includes(3)} 
          isMobile={isMobile}
        />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <ImageAnimation
          src={imageConfig[2].src}
          alt={imageConfig[2].alt}
          label="Контроль"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[2].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrow 
          src={ArrowRight} 
          isVisible={visibleElements.includes(5)} 
          isMobile={isMobile}
        />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <ImageAnimation
          src={imageConfig[3].src}
          alt={imageConfig[3].alt}
          label="Результат"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[3].index)}
        />
      </Box>
    </Box>
  );
}