import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { Sprint1 } from "@/components/motion/sprint-1";
import { Sprint2 } from "@/components/motion/sprint-2";
import { Sprint3 } from "@/components/motion/sprint-3";
import { Sprint4 } from "@/components/motion/sprint-4";
import { Sprint5 } from "@/components/motion/sprint-5";

const sprints = [
  {
    id: 1,
    name: "sprint-1",
    description: "fundamentals + interactions",
    component: Sprint1,
  },
  {
    id: 2,
    name: "sprint-2",
    description: "Transitions + Springs",
    component: Sprint2,
  },
  {
    id: 3,
    name: "sprint-3",
    description: "Variants, AnimatePresence, Exit animations",
    component: Sprint3,
  },
  {
    id: 4,
    name: "sprint-4",
    description: "Layout animations",
    component: Sprint4,
  },

  {
    id: 5,
    name: "sprint-5",
    description: "Motion Values + Scroll",
    component: Sprint5,
  },
];

const Motion = () => {
  const [activeSprintId, setActiveSprintId] = useState(2);
  const activeSprint = sprints[activeSprintId - 1];
  const ActiveComponent = activeSprint.component;

  return (
    <div className="flex flex-col items-center gap-10">
      {/* nav */}
      <ul className="w-xl p-4 mt-2 flex justify-around shadow rounded-full">
        {sprints.map((s) => (
          <li key={s.id}>
            <motion.button
              className={cn(
                "rounded px-4 py-1 cursor-pointer",
                "ring-2 ring-gray-100 ring-offset-1 ring-offset-gray-300 ",
                { "ring-offset-red-300": activeSprintId === s.id },
              )}
              onClick={() => setActiveSprintId(s.id)}

              whileHover={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              {s.name}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* sprint content */}
      <div className="flex flex-col items-center gap-8">
        <p className="text-fuchsia-600 text-lg">{activeSprint.description}</p>
        <div>
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Motion;
