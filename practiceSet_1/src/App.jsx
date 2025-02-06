import React from "react";
// how to reuse component
// conditional randening (button part)

function App() {
  const data = [
    {
      url: "https://plus.unsplash.com/premium_photo-1737677108245-3a53a328abde?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "A Car",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, fugit.",
      follow: true,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1737066451197-93d342a476c2?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Traffic Light",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nobis excepturi sit?",
      follow: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1736771175363-7c57ce845077?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Brown Item",
      discription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eligendi nulla et suscipit.",
      follow: true,
    },
  ];

  return (
    <>
      <div className="flex w-[100vw] justify-center gap-2 h-[100vh] items-center">
        {data.map((Element, index) => (
          <div className="w-[20%] h-[42%] border-2 " key={index}>
            <div className="w-[100%] h-[60%] overflow-hidden">
              <img src={Element.url} className="w-[100%] object-cover h-full" />
            </div>
            <div className="flex items-center flex-col px-4 py-2 bg-grey-500">
              <h1 className="font-semibold text-xl">{Element.name}</h1>

              <p className="font-semibold text-zinc-700 text-center">
                {Element.discription}
              </p>
            </div>

            <button
              className={`px-4 py-1 ${
                Element.follow ? "bg-sky-600" : "bg-red-600"
              } test-xs rounded text-zinc-100 mt-3 flex justify-self-center`}
            >
              {Element.follow ? "Following Us" : "Follow Us"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
