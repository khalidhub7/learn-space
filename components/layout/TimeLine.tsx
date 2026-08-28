import { motion } from "motion/react";
import type { RefObject } from "react";

type SeparatorProps = {
  className?: string;
  parentRef: RefObject<HTMLElement | null>;
};

type TimeLineItemProps = {
  isMobile?: boolean;
  position: "left" | "right";
  title: string;
  parentRef: RefObject<HTMLElement | null>;
};

type TimeLineItemData = {
  id: number;
  position: "left" | "right";
  title: string;
};

type TimeLineProps = {
  items: TimeLineItemData[];
  parentRef: RefObject<HTMLElement | null>;
};

const Separator = ({ className = "", parentRef }: SeparatorProps) => {
  return (
    <div
      className={`
        flex flex-col items-center gap-4
        ${className}
        `}
    >
      <div
        aria-hidden="true"
        className="
        size-2 rounded-full 
        ring-2 ring-pink-200
        ring-offset-1 bg-pink-300
        "
      ></div>
      <div className="w-0.5 h-28 bg-blue-300 rounded-full "></div>
    </div>
  );
};

const TimeLineItem = ({
  isMobile = false,
  position,
  title,
  parentRef,
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
        parentRef={parentRef}
      />

      {/* right card */}
      <div className="p-5 border-t-2 border-blue-400 w-[95%]">
        <p>{title}</p>
      </div>
    </div>
  );
};

const TimeLine = ({ items, parentRef }: TimeLineProps) => {
  return (
    <ul>
      {items.map((c) => (
        <li key={c.id}>
          <TimeLineItem
            position={c.position}
            title={c.title}
            parentRef={parentRef}
          />
        </li>
      ))}
    </ul>
  );
};

export { TimeLine };
export type { TimeLineItemData };
