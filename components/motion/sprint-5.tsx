import { motion } from "motion/react";
import { useState } from "react";

const concepts = [
  "motionValue",
  "useMotionValue",
  "useTransform",
  "useSpring",
  "useScroll",
  "useVelocity",
];

const Sprint5 = () => {
  const [concept, setConcept] = useState("motionValue");
  return (
    <div>
      <ul
        className="
        p-1
        w-xl flex justify-evenly gap-5 flex-wrap
        "
      >
        {concepts.map((c) => (
          <li>
            <motion.button
              className={`
                rounded p-1 cursor-pointer
                ring-2 ring-slate-300
                ring-offset-1
                ${concept === c ? "ring-offset-fuchsia-400" : undefined}
                `}
              whileHover={{ scale: 0.9 }}
            >
              {c}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* <div
      className="
        w-xl rounded-lg p-5
        ring-4 ring-gray-100
        "
    ></div> */}
    </div>
  );
};

export { Sprint5 };
