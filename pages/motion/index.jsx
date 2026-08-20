import { useState } from "react";
import { Sprint1 } from "@/components/motion/sprint-1";
import { Sprint2 } from "@/components/motion/sprint-2";
import { Sprint3 } from "@/components/motion/sprint-3";

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
    description: "Variants",
    component: <Sprint3 />,
  },
];

const Motion = () => {
  const [sprint, setSprint] = useState(1);

  return (
    <div
      className="
    flex flex-col gap-10 justify-center items-center
    "
    >
      <ul className="w-md flex justify-around p-2 ">
        {sprints.map((s) => (
          <li>
            <button
              className={`inline-block rounded-lg p-2 cursor-pointer
              ring-2 ring-gray-200
              ring-offset-1 ring-offset-gray-300

              hover:scale-95 transition-transform duration-300
              ${sprint === s.id ? "ring-offset-red-400" : ""}
              `}
              onClick={() => setSprint(s.id)}
            >
              {s.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-10 justify-center items-center">
        <p>{sprints[sprint - 1].description}</p>
        <div>{sprints[sprint - 1].component}</div>
      </div>
    </div>
  );
};

export default Motion;
