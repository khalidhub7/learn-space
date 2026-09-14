import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { cn } from "@/lib/utils";

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
      rounded-md p-2 cursor-pointer ring-1 ring-olive-300
      "
      layout
      onClick={() => setIsOpen(!isOpen)}

      /* enable that to see the interfere clearly */
      /* transition={{ type: "tween", duration: 3 }} */
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? <p className="h-28">AccordionItem content ...</p> : null}
    </motion.div>
  );
};

const NavItem = ({ rowId, tabName, isActive, setActive }) => {
  const handler = () => {
    setActive((prev) =>
      prev[rowId] !== tabName ? { ...prev, [rowId]: tabName } : prev,
    );
  };

  return (
    <>
      {isActive ? (
        <motion.div
          layoutId="active-tab"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="
          rounded-md h-8 w-24 bg-taupe-50 absolute -top-1 -left-4 -z-10
          ring-2 ring-blue-100 ring-offset-1 ring-offset-blue-300
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
  const [concept, setConcept] = useState("LayoutGroup");
  const [hiddenIds, setHiddenIds] = useState(new Set([]));
  const [activeTab, setActiveTab] = useState({ row1: "Home", row2: "Home" });

  return (
    <div className="space-y-10">
      {/* task nav */}
      <ul className="w-xl p-2 flex justify-evenly">
        {["layout", "LayoutGroup", "layoutId"].map((n) => (
          <li key={n}>
            <motion.button
              className={cn(
                "rounded w-28 cursor-pointer",
                "ring-2 ring-olive-300 ring-offset-1",
                { "ring-offset-fuchsia-400": concept === n },
              )}

              onClick={() => setConcept(n)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -3 }}
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
          relative w-xl rounded p-5 ring-2 ring-gray-200
          "
        >
          {/* reset button */}
          <motion.button
            className="absolute -top-8 right-5 cursor-pointer text-xl"
            whileHover={{ scale: 1.3, rotate: 90 }}
            onClick={() => setHiddenIds(new Set())}
          >
            ↻
          </motion.button>

          {/* widgets */}
          <ul
            className="
            w-full p-2 grid grid-cols-3 gap-y-10 place-items-center
            "
          >
            {widgets.map((w) => (
              <motion.li
                layout
                key={w.id}

                className={cn(
                  "relative w-28 flex items-center justify-center",
                  "aspect-square rounded",
                  "ring-2 ring-olive-100",
                  "ring-offset-1 ring-offset-olive-300",
                  { hidden: hiddenIds.has(w.id) },
                )}
              >
                <motion.button
                  className="text-xl cursor-pointer absolute right-2 top-1"
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
          space-y-7 relative w-xl rounded p-5 ring-2 ring-gray-200
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
          space-y-1 w-xl rounded p-5 ring-2 ring-gray-200
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

          <div className="grid grid-cols-2 gap-x-10">
            {/* without LayoutGroup */}
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

            {/* with LayoutGroup */}
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
