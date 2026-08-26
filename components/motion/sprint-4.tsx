import { LayoutGroup, motion } from "motion/react";
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

const AccordionItem = ({ header }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="
      rounded-lg p-2 cursor-pointer
      ring-1 ring-olive-300
      "
      layout
      onClick={() => setIsOpen(!isOpen)}

      transition={{ type: "tween", duration: 3 }}
    >
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? <p className="h-28">AccordionItem content ...</p> : null}
    </motion.div>
  );
};

const Sprint4 = () => {
  const [active, setActive] = useState("Home");
  const [hiddenIds, setHiddenIds] = useState(new Set([]));

  return (
    <div className="space-y-10">
      {/* layout */}
      {/*  <div
        className="
        relative w-xl rounded-lg p-5
        ring-4 ring-gray-100
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
      </div> */}

      {/* layoutId */}

      <div
        className="
        relative w-xl rounded-lg p-5
        ring-4 ring-gray-100
        "
      >
        <ul className="flex justify-around w-full">
          {tabs.map((tab) => (
            <li key={tab} className="relative isolate">
              {active === tab && (
                <motion.div
                  layoutId="active-tab"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    absolute -top-1 -left-2 -z-10
                    bg-neutral-50 rounded-lg h-8 w-20
                    ring-2 ring-olive-200
                    ring-offset-1 ring-offset-slate-300
                  "
                />
              )}
              <button onClick={() => setActive(tab)} className="cursor-pointer">
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* LayoutGroup */}
      <div
        className="
        w-xl rounded-lg p-5 h-96
        ring-4 ring-gray-100
        space-y-1
        "
      >
        {/* 
        Test:
        1. Open item 2.
        2. Quickly toggle item 1.
        Without LayoutGroup:
        Animations are separate, so you may see overlap.
        With LayoutGroup:
        Animations are coordinated, so the overlap is avoided.
        Rule:
        LayoutGroup is useful when items have separate state/updates.
        */}

        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-5">
            <p className="text-fuchsia-500">without LayoutGroup</p>
            <div>
              {tabs.map((t) => (
                <AccordionItem header={t} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-fuchsia-500">with LayoutGroup</p>
            <div>
              <LayoutGroup>
                {tabs.map((t) => (
                  <AccordionItem header={t} />
                ))}
              </LayoutGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sprint4 };

/*
layout = animate layout changes
LayoutGroup = coordinate multiple layout animations so they don't conflict
*/
