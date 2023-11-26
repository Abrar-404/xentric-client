import * as React from 'react';
import { motion } from 'framer-motion';
const Relax = () => {
  return (
    <div className="flex gap-20 md:flex-row lg:flex-row flex-col justify-center mt-32 mx-auto items-center">
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
      />

      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
      />
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
      />
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
      />
    </div>
  );
};

export default Relax;
