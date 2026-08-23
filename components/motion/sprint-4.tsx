import { motion } from "motion/react";
import { useState } from "react";

/* 
sprint 4: Layout animations
*/

const widgets = [
  { id: 1, name: "Weather" },
  { id: 2, name: "Clock" },
  { id: 3, name: "Calendar" },
  { id: 4, name: "Notes" },
  { id: 5, name: "Tasks" },
  { id: 6, name: "Music" },
];
const tabs = ["Home", "About", "Projects"];

const Sprint4 = () => {
  const [hiddenIds, setHiddenIds] = useState(new Set([]));
  const [active, setActive] = useState("Home");

  return (
    <div className="space-y-10">
      <div
        className="
        relative w-xl rounded-lg p-5
        ring-4 ring-gray-100 
        flex flex-col items-center gap-10
        "
      >
        <motion.button
          className="absolute -top-8 right-5 cursor-pointer text-xl"
          whileHover={{ scale: 1.3, rotate: 90 }}
          onClick={() => setHiddenIds(new Set())}
        >
          ↻
        </motion.button>
        <ul
          className="
          w-full p-2 grid grid-cols-3 gap-y-10
          place-items-center
          "
        >
          {widgets.map((w) => (
            <motion.li
              layout
              key={w.id}

              className={`
                relative w-28
                flex items-center justify-center
                aspect-square rounded-lg
                ring-2 ring-slate-200
                ring-offset-1 ring-offset-slate-300
                ${hiddenIds.has(w.id) ? "hidden" : ""}
                `}
            >
              <motion.button
                className=" cursor-pointer absolute right-2 top-1 "
                whileHover={{ scale: 1.3, rotate: 90 }}
                onClick={() => setHiddenIds((prev) => new Set(prev).add(w.id))}
              >
                ×
              </motion.button>
              <p> {w.name} </p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div
        className="
        relative
        w-xl rounded-lg p-5
        ring-4 ring-gray-100
        flex flex-col items-center gap-10
        "
      >
        <ul className="flex justify-around w-full">
          {tabs.map((tab) => (
            <li>
              <button
                onClick={() => setActive(tab)}
                className="relative cursor-pointer isolate"
              >
                {tab}
                {active === tab && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
                    absolute -top-1 -left-2 -z-10
                    rounded-lg h-8 w-20
                    bg-neutral-50
                    ring-2 ring-olive-200
                    ring-offset-1 ring-offset-slate-300
                  "
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Sprint4 };
