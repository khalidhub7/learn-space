import { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

/* 
sprint 5: Motion Values + Scroll
*/

const concepts = [
  "useMotionValue",
  "useTransform",
  "useSpring",
  "useScroll",
  "useVelocity",
];

const Sprint5 = () => {
  const [concept, setConcept] = useState("useMotionValue");

  const x = useMotionValue(0);
  // calculate opacity according x
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

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

      {concept === "useMotionValue" ? (
        <div className="w-xl rounded-lg p-5 ring-4 ring-gray-100">
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-pointer"
            onClick={() => (x.get() === 0 ? x.set(200) : x.set(0))}
            style={{ x }}
          />
        </div>
      ) : undefined}

      {concept === "useTransform" ? (
        <div className="w-xl rounded-lg p-5 ring-4 ring-gray-100">
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-pointer"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
          />
        </div>
      ) : undefined}
    </div>
  );
};

export { Sprint5 };

/* other apis
useMotionValueEvent → Instead of repeatedly checking x.get()
                    it help to listen for events

*/
