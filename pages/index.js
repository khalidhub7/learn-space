import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const concepts = [{ id: 1, concept: "motion", href: "/motion" }];

const Home = () => {
  return (
    <nav
      className="
          p-14 rounded-md w-xl
          flex justify-center items-center
          ring-4 ring-gray-200
          ring-offset-2 ring-offset-gray-300
          "
    >
      <ul className="flex justify-center items-center gap-3 ">
        {concepts.map((c) => (
          <li key={c.id}>
            <Link
              href={c.href}
              className="
                  inline-block
                  py-1 px-3 rounded-md
                  ring-4 ring-blue-200
                  ring-offset-2 ring-offset-blue-300
                  hover:scale-105 transform-gpu duration-300
                  "
            >
              {c.concept}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Home;
