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
      <div
        aria-hidden="true"
        className="
        size-2 rounded-full bg-pink-300
        ring-2 ring-pink-200 ring-offset-1 
        "
      ></div>
      <motion.div
        className="
        w-0.5 h-28 bg-blue-300 rounded-full origin-top
        "
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
        className="p-5 border-t-2 border-blue-400 w-[95%]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
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
