import { useState, useEffect } from 'react';
import {Container, Typography } from '@mui/material';
import FadeInWhenVisible from '../FadeInWhenVisible';

import ProcessSchemeDesktop from './ProcessSchemeDesktop';
import ProcessSchemeMobile from './ProcessSchemeMobile';
import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';
import ArrowRight from 'assets/images/landing/arrow-right.png';
import ArrowLeft from 'assets/images/landing/arrow-left.png';
import ArrowUp from 'assets/images/landing/arrow-up.png';

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

    return () => window.removeEventListener('scroll', checkVisibility);
  }, [isInView]);

    const loadImages = async () => {
    const imageUrls = [
      ProcessImage,
      PlanningImage,
      ControlImage,
      ResultImage,
      ArrowRight,
      ArrowLeft,
      ArrowUp
    ];

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


      const timers = [
        setTimeout(() => setVisibleElements([0]), 100),
        setTimeout(() => setVisibleElements([0, 1]), 200),
        setTimeout(() => setVisibleElements([0, 1, 2]), 500),
        setTimeout(() => setVisibleElements([0, 1, 2, 3]), 900),
        setTimeout(() => setVisibleElements([0, 1, 2, 3, 4]), 1200),
        setTimeout(() => setVisibleElements([0, 1, 2, 3, 4, 5]), 1500),
        setTimeout(() => setVisibleElements([0, 1, 2, 3, 4, 5, 6]), 1800),
      ];

      return () => timers.forEach(clearTimeout);
    } catch (error) {
      console.error('Ошибка загрузки изображений:', error);
      setImagesLoaded(true);
    }
  };

  return (
      <Container component="section" id="process-scheme" sx={{ px: { xs: 4, md: 0 } }}>
        <FadeInWhenVisible>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}
          >
            Что такое Planify?
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ fontSize: '1rem', mb: 3 }}
          >
            «Planify — это современная экосистема веб и мобильных решений для управления выездным обслуживанием, основанная на математической модели FSM (Field Service Management)».
          </Typography>
        </FadeInWhenVisible>

        {/* TODO: опять два разных компонента, перегруженный код и дом для одного и того же контента, для позиционирования на адаптиве есть стили */}
        <ProcessSchemeDesktop component="article" visibleElements={visibleElements} imagesLoaded={imagesLoaded} />
        <ProcessSchemeMobile component="article" visibleElements={visibleElements} imagesLoaded={imagesLoaded} />
      </Container>
  );
}
