import { motion, scale } from "motion/react";

const Home = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1 — Initial + Animate (Slide-in + Fade-in) */}
        <div className="space-y-3">
          <p>1. Initial + Animate</p>

          <motion.div
            className="motion-div"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Hello
          </motion.div>
        </div>

        {/* 2 — Hover (Hover Scale) */}
        <div className="space-y-3">
          <p>2. Hover</p>

          <motion.div className="motion-div" whileHover={{ scale: 1.1 }}>
            Hello
          </motion.div>
        </div>

        {/* 3 — Tap (Tap Shrink) */}
        <div className="space-y-3">
          <p>3. Tap</p>

          <motion.div className="motion-div" whileTap={{ scale: 0.9 }}>
            Hello
          </motion.div>
        </div>

        {/* 4 — Focus (Focus Highlight) */}
        <div className="space-y-3">
          <p>4. Focus</p>

          <motion.button
            className="motion-div"
            whileFocus={{ backgroundColor: "#fefce8" }}
          >
            Focus me
          </motion.button>
        </div>

        {/* 5 — Drag */}
        <div className="space-y-3">
          <p>5. Drag</p>

          <motion.div
            className="motion-div cursor-grab"
            drag
            whileDrag={{ border: "2px dotted black" }}
          >
            Drag me
          </motion.div>
        </div>

        {/* 6 — While In View (Fade-in on View) */}
        <div className="space-y-3">
          <p>6. While In View</p>

          <motion.div
            className="motion-div"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Hello
          </motion.div>
        </div>

        {/* 7 — Tween */}
        <div className="space-y-3">
          <p>7. Tween</p>

          <motion.div
            className="motion-div"
            animate={{ x: 100 }}
            transition={{ type: "tween", duration: 2, ease: "easeInOut" }}
          >
            Tween
          </motion.div>
        </div>

        {/* 8 — Spring */}
        <div className="space-y-3">
          <p>8. Spring</p>

          <motion.div
            className="motion-div"
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            Spring
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
