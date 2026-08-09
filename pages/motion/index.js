import { motion } from "motion/react";

const Home = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1 — Initial + Animate */}
        <div className="space-y-3">
          <p>1. Initial + Animate</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Hello
          </motion.div>
        </div>

        {/* 2 — Hover */}
        <div className="space-y-3">
          <p>2. Hover</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center cursor-pointer"
            whileHover={{ y: -5 }}
          >
            Hello
          </motion.div>
        </div>

        {/* 3 — Tap */}
        <div className="space-y-3">
          <p>3. Tap</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center cursor-pointer"
            whileTap={{ rotateX: 50 }}
          >
            Hello
          </motion.div>
        </div>

        {/* 4 — Focus */}
        <div className="space-y-3">
          <p>4. Focus</p>

          <motion.button
            className="border rounded-md p-1 w-24"
            whileFocus={{ color: "red" }}
          >
            Focus me
          </motion.button>
        </div>

        {/* 5 — Drag */}
        <div className="space-y-3">
          <p>5. Drag</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center cursor-grab"
            drag
            whileDrag={{ border: "2px dotted black" }}
          >
            Drag me
          </motion.div>
        </div>

        {/* 6 — While In View */}
        <div className="space-y-3">
          <p>6. While In View</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center"
            whileInView={{ backgroundColor: "yellow" }}
          >
            Hello
          </motion.div>
        </div>

        {/* 7 — Tween */}
        <div className="space-y-3">
          <p>7. Tween</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center"
            animate={{ x: 100 }}
            transition={{
              type: "tween",
              duration: 2,
              ease: "easeInOut",
            }}
          >
            Tween
          </motion.div>
        </div>

        {/* 8 — Spring */}
        <div className="space-y-3">
          <p>8. Spring</p>

          <motion.div
            className="border rounded-md p-1 w-24 text-center"
            animate={{ x: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            Spring
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home;
