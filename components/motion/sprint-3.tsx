import { useState } from "react";

/* 
sprint 3: Variants
*/
const testNavs = ["Home", "About", "Projects", "Contact"];

const Sprint3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
      w-xl rounded-lg p-5
      ring-4 ring-gray-100
      flex flex-col items-center gap-10
      "
    >
      <span className="
      rounded-full aspect-square text-center
      ring-1 ring-gray-400 
      " > {isOpen ? "✕" : "☰"} </span>

      <nav
        className="
        p-4 rounded
        ring-2 ring-gray-100
        ring-offset-1 ring-offset-fuchsia-300
        "
      >
        <ul className="w-sm flex flex-col items-center gap-5 ">
          {testNavs.map((l) => (
            <li
              key={l}
              className="
              rounded p-2 w-64
              ring-2 ring-slate-200
              ring-offset-2 ring-offset-slate-300
              "
            >
              <a href="" className="text-center block">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { Sprint3 };
