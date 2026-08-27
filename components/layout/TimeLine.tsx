import { motion } from "motion/react";

const Separator = ({ className = "" }) => {
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
        size-2 rounded-full ring-1 ring-fuchsia-300
        ring-offset-8 bg-fuchsia-300
        "
      ></div>
      <div className="w-0.5 h-28 bg-blue-300 rounded-full "></div>
    </div>
  );
};

const TimeLineItem = ({ isMobile = false, position, title }) => {
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
        ${isMobile === false && position === "left" ? "order-2" : ""}
        `}
      />

      <Separator
        className={`
            ${isMobile === false && position === "left" ? "order-1" : ""}
            `}
      />

      {/* right card */}
      <div className="p-5 border-t-2 border-blue-300 w-[95%]">
        <p>{title}</p>
      </div>
    </div>
  );
};

const TimeLine = ({}) => {
  return (
    <div className="">
      <TimeLineItem position={"right"} title={"sign up/in"} />
      <TimeLineItem position={"left"} title={"sign up/in"} />
      <TimeLineItem position={"right"} title={"sign up/in"} />
      <TimeLineItem position={"left"} title={"sign up/in"} />
      <TimeLineItem position={"right"} title={"sign up/in"} />
      <TimeLineItem position={"left"} title={"sign up/in"} />
      <TimeLineItem position={"right"} title={"sign up/in"} />
      <TimeLineItem position={"left"} title={"sign up/in"} />
      <TimeLineItem position={"right"} title={"sign up/in"} />
    </div>
  );
};

export { TimeLine };
