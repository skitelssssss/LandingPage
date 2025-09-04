import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

export const ImageAnimation = ({ src, alt, isVisible, label, imageIndex, labelIndex }) => {
  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: '120px',
          height: 'auto',
          aspectRatio: '1',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 } }
            : { opacity: 0, scale: 0.8 }
        }
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={
          isVisible
            ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }
            : { opacity: 0, y: 10 }
        }
      >
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 700, fontSize: '0.875rem' }}>
          {label}
        </Typography>
      </motion.div>
    </>
  );
};