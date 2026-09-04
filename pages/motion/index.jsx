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
    component: <Sprint1 />,
  },
  {
    id: 2,
    name: "sprint-2",
    description: "Transitions + Springs",
    component: <Sprint2 />,
  },
  {
    id: 3,
    name: "sprint-3",
    description: "Variants, AnimatePresence, Exit animations",
    component: <Sprint3 />,
  },
  {
    id: 4,
    name: "sprint-4",
    description: "Layout animations",
    component: <Sprint4 />,
  },

  {
    id: 5,
    name: "sprint-5",
    description: "Motion Values + Scroll",
    component: <Sprint5 />,
  },
];

const Motion = () => {
  const [sprint, setSprint] = useState(2);

  return (
    <div className="flex flex-col items-center gap-10">
      <ul
        className="
      w-xl flex justify-around p-4
      "
      >
        {sprints.map((s) => (
          <li>
            <motion.button
              className={`
                inline-block rounded-lg px-4 py-1 cursor-pointer
                ring-2 ring-gray-200
                ring-offset-1 ring-offset-gray-300
                ${sprint === s.id ? "ring-offset-red-400" : ""}
                `}
              onClick={() => setSprint(s.id)}

              whileHover={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              {s.name}
            </motion.button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-10">
        <p>{sprints[sprint - 1].description}</p>
        <div>{sprints[sprint - 1].component}</div>
      </div>
    </div>
  );
};

export default Motion;
