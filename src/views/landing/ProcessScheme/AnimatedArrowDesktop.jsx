import { motion, AnimatePresence } from 'framer-motion';
import ArrowRight from 'assets/images/landing/arrow-right.png';

export const AnimatedArrowDesktop = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
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
  );
};