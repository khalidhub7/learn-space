import { motion } from "motion/react";
import { useState } from "react";

/* 
sprint 4: Layout animations
*/

const widgets = [
  { id: 1, name: "Weather" },
  { id: 2, name: "Clock" },
  { id: 3, name: "Calendar" },
  /* { id: 4, name: "Notes" },
  { id: 5, name: "Tasks" },
  { id: 6, name: "Music" }, */
];

const Sprint4 = () => {
  const [hiddenIds, setHiddenIds] = useState(new Set([]));

  return (
    <div
      className="
      w-xl rounded-lg p-5 h-96
      ring-4 ring-gray-100
      flex flex-col items-center gap-10
        "
    >
      <ul
        className="
       w-full p-2 grid grid-cols-3 gap-3
      "
      >
        {widgets.map((w) => (
          <motion.li
            layout
            key={w.id}

            className={`
                relative
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
  );
};

export { Sprint4 };
