"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Initial + Animate (Slide-in + Fade-in)
const Sprint1 = () => {
  const [product, setProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <motion.div
      className="
      rounded-md p-5 w-sm
      ring-4 ring-stone-100
      ring-offset-2 ring-offset-stone-200
      "

      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="flex flex-col items-center">
        <h3 className="pb-5 text-blue-400 font-semibold">{product?.title}</h3>
        <p className="text-stone-500 leading-7 tracking-wider text-sm">
          {product?.description}
        </p>
        <motion.div
          drag
          whileDrag={{ border: "2px dotted" }}
          dragConstraints={containerRef}
        >
          <Image
            src={product?.thumbnail}
            alt={product?.title}
            width={200}
            height={200}
          />
        </motion.div>
      </div>

      <div
        className="flex justify-between items-center h-12 "
        ref={containerRef}
      >
        <motion.span
          className="text-blue-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          {product?.price}
        </motion.span>

        <motion.button
          className="
          text-blue-400 font-bold text-sm p-2 rounded-lg cursor-pointer
          ring-4 ring-blue-50
          ring-offset-2 ring-offset-blue-100
        "
          whileTap={{ scale: 0.9 }}
        >
          add to cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export { Sprint1 };
