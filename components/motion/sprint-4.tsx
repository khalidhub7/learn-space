/* 
sprint 4: Layout animations
*/

const widgets = [
  { id: "1", name: "Weather" },
  { id: "2", name: "Clock" },
  { id: "3", name: "Calendar" },
  { id: "4", name: "Notes" },
  { id: "5", name: "Tasks" },
  { id: "6", name: "Music" },
];

const Sprint4 = () => {
  return (
    <div
      className="
      w-xl rounded-lg p-5 h-96
      ring-4 ring-gray-100
      flex flex-col items-center gap-10
        "
    >
      <ul
        className="
       w-full p-2 grid grid-cols-3 gap-3
      "
      >
        {widgets.map((w) => (
          <li
            key={w.id}
            className="
          aspect-square rounded-lg
          ring-2 ring-slate-200
          ring-offset-1 ring-offest-slate-300
          "
          >
            <p> {w.name} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Sprint4 };
