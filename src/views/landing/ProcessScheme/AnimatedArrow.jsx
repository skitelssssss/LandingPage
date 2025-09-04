import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedArrow = ({ 
  src, 
  alt = '', 
  isVisible, 
  style, 
  direction = 'x',
  offset = -20,
  isMobile = false 
}) => {

  if (isMobile) {
    
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
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          style={{ width: 60, height: 20, ...style }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </AnimatePresence>
  );
};