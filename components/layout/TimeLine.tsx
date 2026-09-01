/*
- Initially created to practice using useScroll.

- It is now a standalone reusable component that I plan
      to improve and use in future projects.
  
*/

/* const items: TimeLineItemData[] = [
  { id: 1, position: "left", title: "sign up" },
  { id: 2, position: "right", title: "setup dashboard" },
  { id: 3, position: "left", title: "custom your overlay" },
  { id: 4, position: "right", title: "take browser source" },
]; */

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useRef } from "react";

type SeparatorProps = {
  className?: string;
};

type TimeLineItemProps = {
  isMobile?: boolean;
  position: "left" | "right";
  title: string;
};

type TimeLineItemData = {
  id: number;
  position: "left" | "right";
  title: string;
};

type TimeLineProps = {
  items: TimeLineItemData[];
};

const Separator = ({ className = "" }: SeparatorProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 75%"],
  });

  const scaleY = useSpring(0, { stiffness: 100, damping: 10 });

  useMotionValueEvent(scrollYProgress, "change", (newValue) => {
    if (newValue < scaleY.get()) return;
    scaleY.set(newValue);
  });

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <motion.div
        aria-hidden="true"
        className="size-8 rounded-full ring-4 ring-blue-200"
        
        whileInView={{ height: 5, width: 5, opacity: 1 }}
        transition={{ type: "spring", stiffness: 900 }}
      />
      <motion.div
        className="w-0.5 h-28 rounded-full origin-top"
        whileInView={{ backgroundColor: "oklch(80.9% 0.105 251.813)" }}

        ref={ref}
        style={{ scaleY }}
      />
    </div>
  );
};

const TimeLineItem = ({
  isMobile = false,
  position,
  title,
}: TimeLineItemProps) => {
  return (
    <div
      className={`
        p-3
        grid justify-items-center
        ${isMobile ? "grid-cols-[30px_1fr]" : "grid-cols-[1fr_30px_1fr]"}
        `}
    >
      {/* empty card */}
      <div
        aria-hidden="true"
        className={`
        ${isMobile ? "hidden" : ""}
        ${!isMobile && position === "left" ? "order-2" : ""}
        `}
      />

      <Separator
        className={`
            ${!isMobile && position === "left" ? "order-1" : ""}
            `}
      />

      {/* right card */}
      <motion.div
        className="p-5 border-t-2 border-gray-100 w-[95%]"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          borderColor: "oklch(80.9% 0.105 251.813)",
        }}

        transition={{ type: "spring", stiffness: 900, delay: 1 }}
      >
        <p>{title}</p>
      </motion.div>
    </div>
  );
};

const TimeLine = ({ items }: TimeLineProps) => {
  return (
    <ul>
      {items.map((c) => (
        <li key={c.id}>
          <TimeLineItem position={c.position} title={c.title} />
        </li>
      ))}
    </ul>
  );
};

export { TimeLine };
export type { TimeLineItemData };
