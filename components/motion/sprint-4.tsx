import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";

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

const NavItem = ({ rowId, tabName, isActive, setActive }) => {
  const handler = () => {
    setActive((prev) => {
      if (prev[rowId] !== tabName) {
        return { ...prev, [rowId]: tabName };
      }
      return prev;
    });
  };
  return (
    <>
      {isActive ? (
        <motion.div
          layoutId="active-tab"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
            absolute -top-1 -left-4 -z-10
            bg-neutral-50 rounded-full h-8 w-24
            ring-2 ring-olive-200
            ring-offset-1 ring-offset-blue-400
            "
        />
      ) : undefined}

      <button onClick={handler} className="cursor-pointer">
        {tabName}
      </button>
    </>
  );
};

const Sprint4 = () => {
  const [hiddenIds, setHiddenIds] = useState(new Set([]));
  const [activeTab, setActiveTab] = useState({ row1: "Home", row2: "Home" });
  const [concept, setConcept] = useState("layout");

  return (
    <div className="space-y-10">
      {/* task nav */}
      <ul className="w-xl p-2 flex justify-evenly">
        {["layout", "LayoutGroup", "layoutId"].map((n) => (
          <li key={n}>
            <motion.button
              className={`
                rounded-lg  w-28 cursor-pointer
                ring-2 ring-olive-300 ring-offset-1
                ${concept === n ? "ring-offset-fuchsia-400" : undefined}
              `}
              onClick={() => setConcept(n)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {n}
            </motion.button>
          </li>
        ))}
      </ul>

      {/* layout */}
      {concept === "layout" ? (
        <div
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
                  onClick={() =>
                    setHiddenIds((prev) => new Set(prev).add(w.id))
                  }
                >
                  ×
                </motion.button>
                <p> {w.name} </p>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : undefined}

      {/* layoutId */}

      {concept === "layoutId" ? (
        <div
          className="
        relative w-xl rounded-lg p-5
        ring-4 ring-gray-100
        space-y-6
        "
        >
          {/*
          Problem before namespace:
          Two rows share the same layoutId,
          so their indicators interfere.
          
          Namespace:
          LayoutGroup id separates the rows,
          so each row has its own layoutId scope.
          */}

          <LayoutGroup id="row-1">
            {/* first row */}
            <ul className="flex justify-around w-full">
              {tabs.map((tab) => (
                <li key={tab} className="relative isolate">
                  <NavItem
                    tabName={tab}
                    isActive={activeTab.row1 === tab}
                    setActive={setActiveTab}
                    rowId="row1"
                  />
                </li>
              ))}
            </ul>
          </LayoutGroup>

          <LayoutGroup id="row-2">
            {/* second row */}
            <ul className="flex justify-around w-full">
              {tabs.map((tab) => (
                <li key={tab} className="relative isolate">
                  <NavItem
                    tabName={tab}
                    isActive={activeTab.row2 === tab}
                    setActive={setActiveTab}
                    rowId="row2"
                  />
                </li>
              ))}
            </ul>
          </LayoutGroup>
        </div>
      ) : undefined}

      {/* LayoutGroup */}

      {concept === "LayoutGroup" ? (
        <div
          className="
        w-xl rounded-lg p-5
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
          LayoutGroup is useful when items have separate state/updates
          and need coordination
          */}
          <p className="text-blue-400 font-bold text-xl ">
            LayoutGroup example 1
          </p>
          <p className="text-slate-400">
            with/without LayoutGroup read cmnts inside code to understand
          </p>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="space-y-5">
              <p className="text-fuchsia-500">without LayoutGroup</p>
              <ul>
                {tabs.map((t) => (
                  <li key={t}>
                    <AccordionItem header={t} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <p className="text-fuchsia-500">with LayoutGroup</p>
              <ul>
                <LayoutGroup>
                  {tabs.map((t) => (
                    <li key={t}>
                      <AccordionItem header={t} />
                    </li>
                  ))}
                </LayoutGroup>
              </ul>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export { Sprint4 };

/*
layout = animate layout changes
LayoutGroup = LayoutGroup coordinates layout animations 
              between components that update independently.
layoutId = animate between matching/shared elements
*/
