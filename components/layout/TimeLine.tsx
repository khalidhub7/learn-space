import { motion, useScroll, useTransform } from "motion/react";

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
  const { scrollYProgress } = useScroll();

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <motion.div
        aria-hidden="true"
        className="
        size-1 rounded 
        ring-4 ring-rose-100 
        ring-offset-2 ring-offset-rose-300
        "
      />
      <motion.div
        className="
        w-0.5 h-28 bg-gray-100 rounded-full origin-top
        "
        whileInView={{ backgroundColor: "oklch(80.9% 0.105 251.813)" }}
        transition={{ duration: 2 }}
        style={{ scaleY: scrollYProgress }}
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
