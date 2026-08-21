import { motion, Variants } from "motion/react";
import { useState } from "react";

/* 
sprint 3: Variants
*/
const testNavs = ["Home", "About", "Projects", "Contact"];

const variants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const parentVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: { transition: { staggerChildren: 0.1 } },
};

const Sprint3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
      w-xl rounded-lg p-5 h-96
      ring-4 ring-gray-100
      flex flex-col items-center gap-10
      "
    >
      <motion.button
        className="
        rounded-full w-8 aspect-square cursor-pointer
        flex items-center justify-center
        ring-2 ring-slate-200
        ring-offset-1 ring-offset-slate-300
        "
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </motion.button>

      {isOpen ? (
        <nav>
          <motion.ul
            className="w-sm flex flex-col items-center gap-5"
            variants={parentVariants}
            animate="visible"
            initial="hidden"
          >
            {testNavs.map((l) => (
              <motion.li
                key={l}
                className="
                rounded-lg p-2 w-60
                ring-2 ring-slate-100
                ring-offset-2 ring-offset-slate-200
                "
                variants={variants}
                /* initial="hidden"
                animate="visible" */
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a href="" className="text-center block">
                  {l}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      ) : undefined}
    </div>
  );
};

export { Sprint3 };
