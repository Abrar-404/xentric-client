import { motion } from 'framer-motion';
import '../Styles/transition.css';

const Transition = OgComponent => {
  // eslint-disable-next-line react/display-name
  return () => (
    <>
      <OgComponent></OgComponent>

      <motion.div
        className="give-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="give-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
