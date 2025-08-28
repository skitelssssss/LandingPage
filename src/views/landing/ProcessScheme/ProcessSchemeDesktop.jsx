import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';
import ArrowRight from 'assets/images/landing/arrow-right.png';

export default function ProcessSchemeDesktop({ visibleElements, imagesLoaded }) {
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
        <motion.img
          src={ProcessImage}
          alt="Процессы"
          style={{ width: 120, height: 120 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            imagesLoaded && visibleElements.includes(0)
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, scale: { type: 'spring', stiffness: 300, damping: 15 } },
                }
              : { opacity: 0, scale: 0.8 }
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            imagesLoaded && visibleElements.includes(0)
              ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
              : { opacity: 0, y: 10 }
          }
        >
          <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
            Процессы
          </Typography>
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
          animate={
            imagesLoaded && visibleElements.includes(2)
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, scale: { type: 'spring', stiffness: 300, damping: 15 } },
                }
              : { opacity: 0, scale: 0.8 }
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            imagesLoaded && visibleElements.includes(2)
              ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
              : { opacity: 0, y: 10 }
          }
        >
          <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
            Планирование
          </Typography>
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
          animate={
            imagesLoaded && visibleElements.includes(4)
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, scale: { type: 'spring', stiffness: 300, damping: 15 } },
                }
              : { opacity: 0, scale: 0.8 }
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            imagesLoaded && visibleElements.includes(4)
              ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
              : { opacity: 0, y: 10 }
          }
        >
          <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
            Контроль
          </Typography>
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
          animate={
            imagesLoaded && visibleElements.includes(6)
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, scale: { type: 'spring', stiffness: 300, damping: 15 } },
                }
              : { opacity: 0, scale: 0.8 }
          }
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            imagesLoaded && visibleElements.includes(6)
              ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
              : { opacity: 0, y: 10 }
          }
        >
          <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
            Результат
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
