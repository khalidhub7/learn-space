"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Initial + Animate (Slide-in + Fade-in)
const Sprint1 = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <motion.div
      className="
    rounded-md p-5
    ring-4 ring-stone-100
    ring-offset-2 ring-offset-stone-200
    "
    >
      <div className="flex flex-col items-center">
        <p className="pb-5 text-blue-400 font-semibold"> {product?.title} </p>
        <p className="text-stone-600">{product?.description}</p>
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width={200}
          height={200}
        />
      </div>

      <div className="flex justify-between">
        <p className="text-blue-400 font-semibold">{product?.price}</p>
        <button
          className="text-blue-400 font-semibold p-1 rounded-lg
        ring-4 ring-stone-100
    ring-offset-2 ring-offset-stone-200
        "
        >
          add to cart
        </button>
      </div>
    </motion.div>
  );
};

export { Sprint1 };

/* 

<div className="space-y-3">
      <p>1. Initial + Animate</p>

      <motion.div
        className="motion-div"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        enter smoothly
      </motion.div>
    </div>

*/
