import Link from "next/link";

const concepts = [{ id: 1, concept: "Motion", href: "/motion" }];

export default function Home() {
  return (
    <div
      className="
      min-h-screen
      flex flex-col gap-10 justify-center items-center
      "
    >
      <h1 className="text-3xl text-fuchsia-400 font-bold">Learn with examples</h1>
      <p className="text-gray-500 text-2xl">Select a concept</p>

      <nav>
        <ul>
          {concepts.map((c) => (
            <li key={c.id}>
              <Link
                href={c.href}
                className="
                  inline-block rounded-lg p-2
                  ring-2 ring-blue-200
                  ring-offset-1 ring-offset-blue-300
                  hover:scale-95
                  transition-transform duration-300
                "
              >
                {c.concept}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
