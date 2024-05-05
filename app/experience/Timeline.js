"use client";

import { useState } from "react";
import { roles } from "./roles.js";

export default function Timeline() {
  const [selectedRole, setSelectedRole] = useState(roles.present);

  return (
    <>
      <div className="mb-10 flex h-1/3 w-1/2 flex-col justify-center rounded-lg drop-shadow-lg overflow-hidden">
        <div className="bg-emerald-900 text-white p-3 rounded-t-lg">
          <div className="font-xl font-bold">{selectedRole.title}</div>
          <div className="font-l italic">{selectedRole.company}</div>
        </div>
        <div className="h-full bg-white text-black p-3 rounded-b-lg">
          <div className="font-normal">
            <ul>
              {selectedRole.descriptionPoints.map((descriptionPoint) => (
                <li>{descriptionPoint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-24 w-5/6 bg-white drop-shadow-xl">
        <div
          onMouseEnter={() => setSelectedRole(roles.monash)}
          className="flex h-full w-1/2 items-center bg-emerald-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-emerald-100 hover:text-black"
        >
          2018
        </div>
        <div
          onMouseEnter={() => setSelectedRole(roles.hardchrome)}
          className="flex h-full w-1/6 items-center bg-rose-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-rose-100 hover:text-black"
        >
          2021
        </div>
        <div
          onMouseEnter={() => setSelectedRole(roles.calix)}
          className="flex h-full w-1/6 items-center bg-yellow-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-yellow-100 hover:text-black"
        >
          2022
        </div>
        <div
          onMouseEnter={() => setSelectedRole(roles.present)}
          className="flex h-full w-1/6 items-center bg-blue-400 p-5 text-lg font-bold text-white hover:cursor-pointer hover:bg-blue-100 hover:text-black"
        >
          2024
        </div>
      </div>
    </>
  );
}
