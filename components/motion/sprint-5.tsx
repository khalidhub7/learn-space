import { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

/* 
sprint 5: Motion Values + Scroll
*/

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

  const x = useMotionValue(0);

  const opacity = useTransform( x, [-200, 0, 200], [0, 1, 0] );

  return (
    <div className="space-y-8">
      <ul className="p-1 w-xl flex justify-evenly gap-5 flex-wrap">
        {concepts.map((c) => (
          <li key={c}>
            <motion.button
              className={`
                rounded p-1 cursor-pointer
                ring-2 ring-slate-300 ring-offset-1
                ${concept === c ? "ring-offset-fuchsia-400" : undefined}
                `}
              onClick={() => setConcept(c)}
              whileHover={{ scale: 0.9 }}
            >
              {c}
            </motion.button>
          </li>
        ))}
      </ul>

      <div
        className="
        w-xl rounded-lg p-5
        ring-4 ring-gray-100
        "
      ></div>
    </div>
  );
};

export { Sprint5 };
