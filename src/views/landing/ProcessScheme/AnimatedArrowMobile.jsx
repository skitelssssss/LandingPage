import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedArrowMobile = ({ src, alt = '', isVisible, style, direction = 'y', offset = -10 }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          style={style}
          initial={{ opacity: 0, [direction]: offset }}
          animate={{ opacity: 1, [direction]: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </AnimatePresence>
  );
};