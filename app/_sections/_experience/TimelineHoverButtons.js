import { roles } from "./roles.js";

export default function TimelineHoverButtons({ handleHover }) {
  return (
    <div className="flex h-24 w-5/6 overflow-hidden rounded-md bg-white drop-shadow-xl">
      <div
        onMouseEnter={() => handleHover(roles.monash)}
        className="flex h-full w-1/4 lg:w-1/2 items-center bg-emerald-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-emerald-100 hover:text-black"
      >
        2018
      </div>
      <div
        onMouseEnter={() => handleHover(roles.hardchrome)}
        className="flex h-full w-1/4 lg:w-1/6 items-center bg-rose-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-rose-100 hover:text-black"
      >
        2021
      </div>
      <div
        onMouseEnter={() => handleHover(roles.calix)}
        className="flex h-full w-1/4 lg:w-1/6 items-center bg-yellow-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-yellow-100 hover:text-black"
      >
        2022
      </div>
      <div
        onMouseEnter={() => handleHover(roles.present)}
        className="flex h-full w-1/4 lg:w-1/6 items-center bg-blue-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-blue-100 hover:text-black"
      >
        2024
      </div>
    </div>
  );
}
