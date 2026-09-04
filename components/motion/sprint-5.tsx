import { useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

import { TimeLine, TimeLineItemData } from "../layout/TimeLine";
import { Parallax } from "../layout/Parallax";

/* 
sprint 5: Motion Values + Scroll
*/

const concepts = [
  "useMotionValue",
  "useTransform",
  "useSpring",
  "useScroll",
  "useVelocity",
  "bonus",
];

const items: TimeLineItemData[] = [
  { id: 1, position: "left", title: "sign up" },
  { id: 2, position: "right", title: "setup dashboard" },
  { id: 3, position: "left", title: "custom your overlay" },
  { id: 4, position: "right", title: "take browser source" },
];

const Sprint5 = () => {
  const [concept, setConcept] = useState("bonus");

  // useMotionValue
  const x1 = useMotionValue(0);

  // useTransform
  const x2 = useMotionValue(0);
  const opacity = useTransform(x2, [-200, 0, 200], [0, 1, 0]); // calculate opacity according x

  // useSpring
  const x3 = useMotionValue(0);
  const smoothX = useSpring(x3, { stiffness: 300 }); // attach spring transition

  // useVelocity
  const x4 = useMotionValue(0);
  const xVelocity = useVelocity(x4);
  const deforcation = useSpring(
    useTransform(xVelocity, [-1000, 0, 1000], [1.5, 1, 1.5]),
    { stiffness: 600 },
  );

  // Parallax task

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
              whileHover={{ scale: 0.9, y: -3 }}
            >
              {c}
            </motion.button>
          </li>
        ))}
      </ul>

      {concept === "useMotionValue" ? (
        <div
          className="
          w-xl rounded-lg p-5 
          ring-4 ring-gray-100
          flex flex-col gap-8 items-center
          "
        >
          <p className="text-slate-500">
            click me ( change x without re-render )
          </p>
          <motion.div
            className="
            bg-blue-400 size-10 rounded-xl cursor-pointer self-start
            "
            /* onClick={() => (x.get() === 0 ? x.set(200) : x.set(0))} */
            onClick={() =>
              animate(x1, x1.get() === 0 ? 200 : 0, {
                type: "tween",
                ease: "easeOut",
                duration: 1,
              })
            }
            style={{ x: x1 }}
          />
        </div>
      ) : undefined}

      {concept === "useTransform" ? (
        <div
          className="
          w-xl rounded-lg p-5 
          ring-4 ring-gray-100
          flex flex-col gap-6 items-center
          "
        >
          <p className="text-slate-500">
            drag me ( opacity caculated according x )
          </p>
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-grab"
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            style={{ x: x2, opacity }}
          />
        </div>
      ) : undefined}

      {concept === "useSpring" ? (
        <div
          className="
          w-xl rounded-lg p-5
          ring-4 ring-gray-100
          flex flex-col gap-6 items-center
          "
        >
          <p className="text-slate-500">
            click me ( change x with a spring transition )
          </p>
          <motion.div
            className="bg-blue-400 size-10 rounded-xl cursor-pointer self-start"
            onClick={() => (x3.get() === 0 ? x3.set(200) : x3.set(0))}
            style={{ x: smoothX }}
          />
        </div>
      ) : undefined}

      {concept === "useScroll" ? (
        <div
          className="
          w-xl rounded-lg p-5
          ring-4 ring-gray-100
          flex flex-col gap-6 items-center
          "
        >
          <p className="text-slate-500">
            scroll me ( scroll to see animation )
          </p>

          <div className="rounded p-3 w-full ring-1 ring-slate-200">
            <TimeLine items={items} />
          </div>
        </div>
      ) : undefined}

      {concept === "useVelocity" ? (
        <div
          className="
          w-xl rounded-lg p-5 ring-4 ring-gray-100
          flex flex-col gap-6 items-center
          "
        >
          <p className="text-slate-500">
            drag me ( to see velocity fake effect )
          </p>

          <motion.div
            className="size-10 bg-blue-400 rounded-xl cursor-pointer"
            style={{ x: x4, scaleX: deforcation }}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
          />
        </div>
      ) : undefined}

      {concept === "bonus" ? (
        <div
          className="
          w-xl rounded-lg p-5
          ring-4 ring-gray-100
          flex flex-col gap-6 items-center
          "
        >
          <p className="text-slate-500">
            Parallax ( different elements move at different speeds )
          </p>

          < Parallax />
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
