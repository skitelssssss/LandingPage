import { Box } from '@mui/material';
import { AnimatedImageAll } from './AnimatedImageAll';
import { AnimatedArrowDesktop } from './AnimatedArrowDesktop'; 
import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';

export default function ProcessSchemeDesktop({ visibleElements, imagesLoaded }) {
  const imageConfig = [
    { src: ProcessImage, alt: 'Процессы', index: 0 },
    { src: PlanningImage, alt: 'Планирование', index: 2 },
    { src: ControlImage, alt: 'Контроль', index: 4 },
    { src: ResultImage, alt: 'Результат', index: 6 },
  ];

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        minHeight: 100,
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <AnimatedImageAll
          src={imageConfig[0].src}
          alt={imageConfig[0].alt}
          label="Процессы"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[0].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrowDesktop isVisible={visibleElements.includes(1)} />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <AnimatedImageAll
          src={imageConfig[1].src}
          alt={imageConfig[1].alt}
          label="Планирование"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[1].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrowDesktop isVisible={visibleElements.includes(3)} />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <AnimatedImageAll
          src={imageConfig[2].src}
          alt={imageConfig[2].alt}
          label="Контроль"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[2].index)}
        />
      </Box>

      <Box sx={{ minWidth: 60, minHeight: 20 }}>
        <AnimatedArrowDesktop isVisible={visibleElements.includes(5)} />
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <AnimatedImageAll
          src={imageConfig[3].src}
          alt={imageConfig[3].alt}
          label="Результат"
          isVisible={imagesLoaded && visibleElements.includes(imageConfig[3].index)}
        />
      </Box>
    </Box>
  );
}