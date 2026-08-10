import { Sprint1 } from "@/components/motion/sprint-1";

const Home = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Sprint1 />
      </div>
    </main>
  );
};

export default Home;
