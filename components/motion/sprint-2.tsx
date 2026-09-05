import { useState } from "react";
import type { Transition } from "motion/react";
import {
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
} from "motion/react";

/* 
sprint 2: Transitions + Springs
*/

const transitionTypes: Record<string, Transition> = {
  tween: {
    type: "tween",
    duration: 1, // how long the animation takes
    ease: "easeOut", // starts fast, slows down
  },

  spring: {
    type: "spring", // use spring physics
    stiffness: 150, // how strongly it pulls
    damping: 15, // how much it reduces bouncing
    mass: 1, // how heavy the movement feels
    bounce: 0.3, // extra bounce
  },
  /* 
what is inertia
it predict the position of x according physics

when velocity: 100 it predict x: 0
when velocity: 500 it predict x: 100

Then min / max can limit that predicted target
*/
  inertia: {
    type: "inertia", // use momentum
    velocity: 200, // starting movement speed
    timeConstant: 200, // how quickly the momentum slows down
    min: -100, // minimum allowed value
    max: 100, // maximum allowed value
  },
};

/*
Keyframes → animate through multiple values: [-100, 100, 0]
Decay     → inertia-style movement that gradually slows down
*/

const Sprint2 = () => {
  const [transitionType, setTransitionType] = useState("tween");
  const controls = useAnimationControls();
  const [level, setLevel] = useState("basic");

  return (
    <div className="space-y-10">
      {/* level nav */}
      <div className="px-5 flex items-center gap-5">
        <p className="flex-[1_1] text-fuchsia-400 font-bold tracking-wider">
          select level :
        </p>

        <ul className="flex justify-around flex-[2_1] p-2">
          {["basic", "advanced"].map((l) => (
            <li key={l}>
              <motion.button
                className={`
                  rounded-lg px-3 cursor-pointer ring-2 ring-stone-200
                  ring-offset-1 
                  ${level === l ? "ring-offset-fuchsia-400" : ""}
                  `}
                onClick={() => setLevel(l)}

                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {l}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="
        flex flex-col items-center gap-10
        w-xl rounded-lg p-5 ring-2 ring-stone-200
        "
      >
        {/* basic level */}
        {level === "basic" ? (
          <>
            <p className="text-blue-400 font-bold tracking-wider">
              Transition types
            </p>

            <ul className="py-2 flex justify-around w-full">
              {Object.keys(transitionTypes).map((t) => (
                <li key={t}>
                  <motion.button
                    className={`
                      px-5 rounded-lg cursor-pointer
                      ring-2 ring-stone-200 ring-offset-1
                      ${transitionType === t ? "ring-offset-fuchsia-400 " : ""}
                      `}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ translateY: -2 }}
                    onClick={() => setTransitionType(t)}
                  >
                    {t}
                  </motion.button>
                </li>
              ))}
            </ul>

            <motion.div
              className="
              rounded-md px-5 py-1
              ring-2 ring-stone-100 ring-offset-1 ring-offset-stone-300
              "

              animate={controls}
              transition={transitionTypes[transitionType]}
            >
              <p>notification : please update your profile</p>
            </motion.div>

            <motion.button
              className="
              px-5 py-1 rounded-xl cursor-pointer
              ring-2 ring-olive-200
              "

              onClick={() => {
                controls.set({ x: -100 }); // like initial (jump)
                controls.start({ x: 0 }); // like animate (animate)
              }}

              whileHover={{ y: -2 }}
              whileTap={{
                backgroundColor: "oklch(88.2% 0.059 254.128)",
                scale: 0.9,
              }}
            >
              ↻
            </motion.button>
          </>
        ) : undefined}

        {/* advanced level */}
        {level === "advanced" ? (
          <>
            <p className="text-blue-400 font-bold tracking-wider">
              Other animation
            </p>

            <motion.div
              className="
              rounded-xl px-5 py-2 w-sm
              ring-2 ring-stone-100 ring-offset-1 ring-offset-stone-300
              "
              animate={{ x: [-100, 100, 0] }}
              transition={{
                type: "keyframes",
                duration: 2,
              }}
            >
              keyframes example
            </motion.div>

            <motion.div
              className="
              rounded-xl px-5 py-2 w-sm cursor-grab
              ring-2 ring-stone-100 ring-offset-1 ring-offset-stone-300 
              "
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              dragTransition={{ power: 0, timeConstant: 100 }}
            >
              decay example
            </motion.div>
          </>
        ) : undefined}
      </div>
    </div>
  );
};

/* 
Need precise timing? → tween
Need physical/natural movement? → spring
Need momentum after movement? → inertia
*/

/* 
bounce/duration are overridden when those physics parameters are used

*/

export { Sprint2 };
