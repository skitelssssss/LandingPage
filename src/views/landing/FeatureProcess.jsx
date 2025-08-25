import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';
import ArrowRight from 'assets/images/landing/arrow-right.png';
import ArrowDown from 'assets/images/landing/arrow-down.png';

export default function ProcessScheme() {
  const [visibleElements, setVisibleElements] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('process-scheme');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;

        if (isVisible && !isInView) {
          setIsInView(true);
          loadImages();
        }
      }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isInView]);

  const loadImages = async () => {
    const imageUrls = [ProcessImage, PlanningImage, ControlImage, ResultImage, ArrowRight];
    const loadPromises = imageUrls.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    try {
      await Promise.all(loadPromises);
      setImagesLoaded(true);

      const timer1 = setTimeout(() => setVisibleElements([0]), 100);
      const timer2 = setTimeout(() => setVisibleElements([0, 1]), 200);
      const timer3 = setTimeout(() => setVisibleElements([0, 1, 2]), 500);
      const timer4 = setTimeout(() => setVisibleElements([0, 1, 2, 3]), 900);
      const timer5 = setTimeout(() => setVisibleElements([0, 1, 2, 3, 4]), 1200);
      const timer6 = setTimeout(() => setVisibleElements([0, 1, 2, 3, 4, 5]), 1500);
      const timer7 = setTimeout(() => setVisibleElements([0, 1, 2, 3, 4, 5, 6]), 1800);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
      };
    } catch (error) {
      console.error('Error loading images:', error);
      setImagesLoaded(true);
    }
  };

  return (
    <section aria-labelledby="process-scheme">
      <Container id="process-scheme">
        <FadeInWhenVisible>
          <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
            Что такое Planify?
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontSize: '1rem', mb: 3 }}>
            «Planify — это современная экосистема веб и мобильных решений для управления выездным обслуживанием, основанная на математической модели FSM (Field Service Management)».
          </Typography>
        </FadeInWhenVisible>
        
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            minHeight: 200,
            flexWrap: 'wrap'
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ProcessImage}
              alt="Процессы"
              style={{ width: 120, height: 120 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(0) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(0) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 2 }}>Процессы</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 60, minHeight: 20 }}>
            <AnimatePresence>
              {visibleElements.includes(1) && (
                <motion.img
                  src={ArrowRight}
                  alt=""
                  style={{ width: 60, height: 20 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={PlanningImage}
              alt="Планирование"
              style={{ width: 120, height: 120 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(2) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(2) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 2 }}>Планирование</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 60, minHeight: 20 }}>
            <AnimatePresence>
              {visibleElements.includes(3) && (
                <motion.img
                  src={ArrowRight}
                  alt=""
                  style={{ width: 60, height: 20 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ControlImage}
              alt="Контроль"
              style={{ width: 120, height: 120 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(4) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(4) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 2 }}>Контроль</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 60, minHeight: 20 }}>
            <AnimatePresence>
              {visibleElements.includes(5) && (
                <motion.img
                  src={ArrowRight}
                  alt=""
                  style={{ width: 60, height: 20 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ResultImage}
              alt="Результат"
              style={{ width: 120, height: 120 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(6) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(6) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 2 }}>Результат</Typography>
            </motion.div>
          </Box>
        </Box>

        <Box sx={{ 
          display: { xs: 'flex', md: 'none' }, 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 3,
          minHeight: 500
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ProcessImage}
              alt="Процессы"
              style={{ width: 170, height: 170 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(0) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(0) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 1 }}>Процессы</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 20, minHeight: 40 }}>
            <AnimatePresence>
              {visibleElements.includes(1) && (
                <motion.img
                  src={ArrowDown}
                  alt=""
                  style={{ width: 70, height: 90 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={PlanningImage}
              alt="Планирование"
              style={{ width: 170, height: 170 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(2) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(2) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 1 }}>Планирование</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 20, minHeight: 40 }}>
            <AnimatePresence>
              {visibleElements.includes(3) && (
                <motion.img
                  src={ArrowDown}
                  alt=""
                  style={{ width: 70, height: 90 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ControlImage}
              alt="Контроль"
              style={{ width: 170, height: 170 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(4) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(4) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 1 }}>Контроль</Typography>
            </motion.div>
          </Box>

          <Box sx={{ minWidth: 20, minHeight: 40 }}>
            <AnimatePresence>
              {visibleElements.includes(5) && (
                <motion.img
                  src={ArrowDown}
                  alt=""
                  style={{ width: 70, height: 90 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.img
              src={ResultImage}
              alt="Результат"
              style={{ width: 170, height: 170 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView && imagesLoaded && visibleElements.includes(6) ? { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6,
                  scale: { type: "spring", stiffness: 300, damping: 15 }
                }
              } : { opacity: 0, scale: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView && imagesLoaded && visibleElements.includes(6) ? { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.4, delay: 0.2 }
              } : { opacity: 0, y: 10 }}
            >
              <Typography variant="h4" sx={{ mt: 1 }}>Результат</Typography>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </section>
  );
}