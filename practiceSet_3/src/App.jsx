// useState

import React, { useState } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "./card/card"
const data = [
  {url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Shruti", profession: "Software Engineer", discription: "Software engineers apply programming languages to build software solutions for end users.", friends: false},
  {url: "https://images.unsplash.com/photo-1714976327275-15f214514cc2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Aaravi ", profession: "Software Developer", discription: "She builds innovative web applications and enjoys solving complex coding challenges.", friends: false},
  {url: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzUwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D", name: "Saanvi ", profession: "UX Designer", discription: "She crafts user-friendly designs to enhance digital experiences and improve accessibility.", friends: false},
  {url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Meera", profession: "Data Scientist", discription: "She analyzes big data to uncover trends and help businesses make data-driven decisions.", friends: false},
]




function App() {
  const [realData, setreatData] = useState(data);

 const handleFriendsButton = (cardIndex) => {
  setreatData((prev) => 
    prev.map((item, index) => 
      index === cardIndex ? { ...item, friends: !item.friends } : item
    )
  );
};

  // const [val, setVal] = useState([1, 2, 3, 4, 5]);
  // const [num, setNum] = useState(val[val.length-1])
  // const [val, setVal] = useState(false);
  return (
    // <div className="w-full h-screen bg-zinc-300 flex justify-center items-center flex-col">
    //   <h1>{val.name.toUpperCase()}</h1>
    //   <h1>{val.band.toString().toUpperCase()}</h1>
    //   <button
    //     onClick={() => setVal({ ...val, band: !val.band })}
    //     className={`px-3 py-1 ${
    //       val.band ? "bg-blue-500" : "bg-red-500"
    //     } rounded-full text-white`}
    //   >
    //     Change
    //   </button>
    // </div>

    // <div className="w-full h-screen bg-zinc-300 flex justify-center items-center flex-col select-none">
    //   {val.map((ele, index) => (
    //     <h1 key={index}>{ele}</h1>
    //   ))}
    //   <button
    //     onClick={() =>
    //       setVal(() => val.filter((ele, index) => index !== val.length - 1))
    //     }
    //     className="px-2 py-1 bg-red-500 text-white rounded-full"
    //   >
    //     Remove Element
    //   </button>
    // </div>

    // <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
    //   <div className="w-100 h-72 bg-zinc-500 rounded flex overflow-hidden">
    //     <img
    //       className= {`relative w-full h-full object-cover shrink-0 ${val == false ? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform duration-700 ease-in-out`}
    //       src="https://images.unsplash.com/photo-1738000711416-a22d5ad609a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="dears"
    //     />
    //     <img
    //       className={`relative w-full h-full object-cover shrink-0 ${val == false ? "-translate-x-[0%]" : "-translate-x-[100%]"} transition-transform duration-700 ease-in-out`}
    //       src="https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="dears"
    //     />
    //     <span onClick={() => setVal(() => !val)} className="w-10 h-10 bg-[#dadada7b] flex items-center justify-center rounded-full absolute bottom-[34%] left-1/2 -translate-x-[50%]">
    //         <FaLongArrowAltRight />
    //     </span>
    //   </div>
    // </div>

    <div className="flex justify-center items-center gap-4 flex-wrap min-h-screen bg-gray-100 p-10">
      {realData.map((item, index) =>(
        <Card key = {index} cardIndex = {index} values = {item} friendsButton = {handleFriendsButton}/>
      ))}
    </div>
  );
}

export default App;

// props use hote h aapke component ko reusuable banane ke liye, consider karo aapke paas ek button h and aapko us button ko alg alg jagah daalna h aap mein, to aap ek button component banaye and uska data hard coder karne ki jagah parent component se send karde and child component par use kar le 
