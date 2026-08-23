import { motion } from "motion/react";

/* 
sprint 4: Layout animations
*/

const widgets = [
  { id: "1", name: "Weather" },
  { id: "2", name: "Clock" },
  { id: "3", name: "Calendar" },
  /* { id: "4", name: "Notes" },
  { id: "5", name: "Tasks" },
  { id: "6", name: "Music" }, */
];

const Sprint4 = () => {
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
            key={w.id}
            
            className="
            relative
            flex items-center justify-center
            aspect-square rounded-lg
            ring-2 ring-slate-200
            ring-offset-1 ring-offset-slate-300
            "
          >
            <span className="absolute right-2 top-1 " >x</span>
            <p> {w.name} </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export { Sprint4 };
