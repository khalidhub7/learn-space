import { motion } from "motion/react";

const Home = () => {
  return (
    <div
      className="
      grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
      p-14 rounded-md
      ring-4 ring-gray-200
      ring-offset-2 ring-offset-gray-300"
    >
      <div className="space-y-5" >
        <p className="text-blue-500" >first animation</p>
        <motion.div
        className="border rounded-md p-1 w-24 text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          Hello
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
