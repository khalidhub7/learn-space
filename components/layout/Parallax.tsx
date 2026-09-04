import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/*
Parallax: When elements move at different speeds as you scroll.
Effect: Faster and slower movement creates a depth/3D-like feeling.
*/

const Parallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ container });

  const slow = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const normal = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const fast = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      ref={container}
      className="
      w-md h-40 rounded-lg p-1 overflow-y-scroll
      ring-2 ring-slate-200
      "
    >
      <div className="h-96 flex justify-around items-center ">
        <motion.div
          className="rounded px-1 ring-1 ring-green-500"
          style={{ y: slow }}
        >
          moves slowly
        </motion.div>

        <motion.div
          className="rounded px-1 ring-1 ring-green-500"
          style={{ y: normal }}
        >
          moves normally
        </motion.div>

        <motion.div
          className=" rounded px-1 ring-1 ring-green-500"
          style={{ y: fast }}
        >
          moves faster
        </motion.div>
      </div>
    </motion.div>
  );
};

export { Parallax };
