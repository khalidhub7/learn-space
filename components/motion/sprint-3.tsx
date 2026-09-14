import { useState } from "react";
import type { Variants } from "motion/react";
import { motion, AnimatePresence } from "motion/react";

/* 
sprint 3: Variants, AnimatePresence, Exit animations
*/
const testNavs = ["Home", "About", "Projects", "Contact"];

const childVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
  exit: { x: 20 },
};

const parentVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2, when: false } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

const Sprint3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
      flex flex-col items-center gap-10 w-xl rounded p-5 h-96
      ring-2 ring-gray-200
      "
    >
      {/* nav trigger */}
      <motion.button
        className="
        rounded-full w-8 aspect-square cursor-pointer
        flex items-center justify-center
        ring-2 ring-olive-200 ring-offset-1 ring-offset-olive-300
        "

        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: 90 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "✕" : "☰"}
      </motion.button>

      {/* nav */}
      <AnimatePresence>
        {isOpen ? (
          <nav>
            <motion.ul
              className="w-sm flex flex-col items-center gap-5"

              variants={parentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {testNavs.map((l) => (
                <motion.li
                  key={l}
                  className="
                  rounded-lg py-2 w-52 text-sm
                  ring-2 ring-olive-100 ring-offset-1 ring-offset-olive-200
                  "

                  variants={childVariants}
                  /*
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  */
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <a href="" className="text-center block">
                    {l}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        ) : undefined}
      </AnimatePresence>
    </div>
  );
};

export { Sprint3 };
