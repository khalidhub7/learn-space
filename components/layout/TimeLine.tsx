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

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useTransform, useMotionValueEvent } from "motion/react";
import { motion, useSpring, useTime, useScroll } from "motion/react";

type SeparatorProps = { className?: string };
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

type TimeLineProps = { items: TimeLineItemData[] };

const Separator = ({ className = "" }: SeparatorProps) => {
  // dot
  const time = useTime();
  /* const scale = useTransform(time, [0, 4000], [0, 1], { clamp: false }); */
  const scale = useTransform(time, (latest) => {
    const progress = (latest % 4000) / 4000;
    return 0.5 + progress * 0.5;
  });

  // line
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 75%"],
    trackContentSize: true, // watch content size changes
  });

  const scaleY = useSpring(0, { stiffness: 100, damping: 10 });

  useMotionValueEvent(scrollYProgress, "change", (newValue) => {
    if (newValue < scaleY.get()) return;
    scaleY.set(newValue);
  });

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <motion.div
        aria-hidden="true"
        className="size-2 rounded-full ring-4 ring-taupe-200 "

        style={{ scale }}
        transition={{ type: "spring", stiffness: 900 }}
      />

      <motion.div
        className="w-px h-28 rounded-full origin-top"
        whileInView={{ backgroundColor: "oklch(54.6% 0.245 262.881)" }}

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
      className={cn(
        "px-3 py-1 grid justify-items-center",
        isMobile ? "grid-cols-[30px_1fr]" : "grid-cols-[1fr_30px_1fr]",
      )}
    >
      {/* empty card */}
      <div
        aria-hidden="true"
        className={cn(
          { hidden: isMobile },
          { "order-2": !isMobile && position === "left" },
        )}
      />

      <Separator
        className={cn({ "order-1": !isMobile && position === "left" })}
      />

      {/* right card */}
      <motion.div
        className={cn(
          "p-5 w-full shadow",
          "border-t-2 border-blue-400",

          position === "left" && !isMobile
            ? "rounded-tl-2xl rounded-br-2xl"
            : "rounded-tr-2xl rounded-bl-2xl",
        )}

        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
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
