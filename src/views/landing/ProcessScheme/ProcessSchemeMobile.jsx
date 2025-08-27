import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

import ProcessImage from 'assets/images/landing/process.png';
import PlanningImage from 'assets/images/landing/planning.png';
import ControlImage from 'assets/images/landing/control.png';
import ResultImage from 'assets/images/landing/result.png';
import ArrowUp from 'assets/images/landing/arrow-up.png';
import ArrowLeft from 'assets/images/landing/arrow-left.png';

export default function ProcessSchemeMobile({ visibleElements, imagesLoaded }) {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
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
          <motion.img
            src={ProcessImage}
            alt="Процессы"
            style={{
              width: 'clamp(80px, 20vw, 150px)',
              height: 'auto',
              aspectRatio: '1',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              imagesLoaded && visibleElements.includes(0)
                ? { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 } }
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
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, fontSize: '0.875rem' }}>
              Процессы
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mx: 0.5 }}>
          <AnimatePresence>
            {visibleElements.includes(1) && (
              <motion.img
                src={ArrowUp}
                alt=""
                style={{
                  width: 'clamp(40px, 10vw, 70px)',
                  height: 'auto',
                  aspectRatio: '70 / 90',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>
        </Box>

        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <motion.img
            src={PlanningImage}
            alt="Планирование"
            style={{
              width: 'clamp(80px, 20vw, 150px)',
              height: 'auto',
              aspectRatio: '1',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              imagesLoaded && visibleElements.includes(2)
                ? { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 } }
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
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, fontSize: '0.875rem' }}>
              Планирование
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '51%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {visibleElements.includes(3) && (
            <motion.img
              src={ArrowLeft}
              alt=""
              style={{
                width: 'clamp(60px, 15vw, 90px)',
                height: 'auto',
                aspectRatio: '140 / 130',
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
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
          <motion.img
            src={ControlImage}
            alt="Контроль"
            style={{
              width: 'clamp(80px, 20vw, 150px)',
              height: 'auto',
              aspectRatio: '1',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              imagesLoaded && visibleElements.includes(4)
                ? { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 } }
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
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, fontSize: '0.875rem' }}>
              Контроль
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mx: 0.5 }}>
          <AnimatePresence>
            {visibleElements.includes(5) && (
              <motion.img
                src={ArrowUp}
                alt=""
                style={{
                  width: 'clamp(40px, 10vw, 70px)',
                  height: 'auto',
                  aspectRatio: '70 / 90',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>
        </Box>

        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <motion.img
            src={ResultImage}
            alt="Результат"
            style={{
              width: 'clamp(80px, 20vw, 150px)',
              height: 'auto',
              aspectRatio: '1',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              imagesLoaded && visibleElements.includes(6)
                ? { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 } }
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
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, fontSize: '0.875rem' }}>
              Результат
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}