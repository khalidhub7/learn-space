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
        <div
          className="
        w-xl rounded-lg p-5 ring-4 ring-gray-100
        flex flex-col gap-6 items-center justify-center
        "
        >
          <p className="text-slate-500">
            click me ( change x without re-render )
          </p>
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-pointer"
            onClick={() => (x.get() === 0 ? x.set(200) : x.set(0))}
            style={{ x }}
          />
        </div>
      ) : undefined}

      {concept === "useTransform" ? (
        <div
          className="
        w-xl rounded-lg p-5 ring-4 ring-gray-100
        flex flex-col gap-6 items-center justify-center
        "
        >
          <p className="text-slate-500">
            drag me ( opacity caculated according x )
          </p>
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-grab"
            style={{ x, opacity }}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
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
