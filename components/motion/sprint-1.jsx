import { motion } from "motion/react";

// Initial + Animate (Slide-in + Fade-in)
const Sprint1 = () => {
  return (
    <div className="space-y-3">
      <p>1. Initial + Animate</p>

      <motion.div
        className="motion-div"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        enter smoothly
      </motion.div>
    </div>
  );
};

export { Sprint1 };
