//Event Handling
import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "Yeh Dil Na Hota Bechara",
      discription:
        "A melancholic song about unrequited love, capturing the pain of a broken heart.",
    },
    {
      name: "Tere Liye",
      discription: "A romantic ballad expressing unwavering devotion and love.",
    },
    {
      name: "Dhak Dhak",
      discription:
        " A heartwarming ode to the beauty of family bonds and the importance.",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-center gap-4 items-center">
      {data.map((ele, index) => (
        <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{ele.name}</h3>
          <p className="text-xs mt-2">{ele.discription}</p>
          <button
            onClick={() => {
              alert("Start Downloding...");
            }}
            className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
