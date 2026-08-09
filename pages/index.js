import Link from "next/link";

const concepts = [{ id: 1, concept: "Motion", href: "/motion" }];

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="mb-2 text-3xl font-bold">learn with examples</h1>

      <p className="mb-8 text-gray-600">Select a concept</p>

      <nav>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {concepts.map((c) => (
            <li key={c.id}>
              <Link
                href={c.href}
                className="
                  inline-block rounded-lg border p-2
                  transition
                  hover:scale-105 hover:shadow-md
                "
              >
                <span className="font-medium">{c.concept}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
