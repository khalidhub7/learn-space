"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Sprint1 = () => {
  const [product, setProduct] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <motion.div
      className="
      rounded-md p-5 w-sm
      ring-4 ring-stone-100
      ring-offset-2 ring-offset-stone-200
      "

      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-blue-400 font-semibold">{product.title}</h3>

        <motion.p className="text-stone-500 leading-7 tracking-wider text-sm">
          {product.description}
        </motion.p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
          />
        </motion.div>
      </div>

      <div className="flex justify-between items-center h-12 ">
        <div className="h-full w-1/2" ref={containerRef}>
          <motion.span
            className="
            inline-block
            text-blue-400 font-semibold p-2 rounded-lg cursor-grab
            "
            drag
            whileDrag={{ border: "1px dashed" }}
            dragConstraints={containerRef}
          >
            {product.price}
          </motion.span>
        </div>

        <motion.button
          className="
          text-blue-400 font-bold text-sm p-2 rounded-lg cursor-pointer
          outline-none
          ring-4 ring-blue-50
          ring-offset-2 ring-offset-blue-100
        "
          whileTap={{ scale: 0.9 }}
          whileFocus={{ backgroundColor: "oklch(93% 0.007 106.5)" }}
        >
          add to cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export { Sprint1 };
