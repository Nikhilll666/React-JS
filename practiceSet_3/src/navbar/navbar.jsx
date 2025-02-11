import React from "react";

function Navbar({ songData }) {
  return (
    <div className="flex w-full bg-zinc-500 p-4 justify-between px-15 text-white">
      <div className="">Rhythm</div>
      <div>Favourite: {songData.filter((item) => item.added).length}</div>
    </div>
  );
}

export default Navbar;
