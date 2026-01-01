import React from "react";
import ImageCard from "./ImageCard";
import ThreadbuildCard from "./ThreadbuildCard";
import StructureCard from "./StructureCard";
import FourSAMethodCard from "./FourSAMethodCard";
import { projectData, getFirstTask } from "@/constants/data";

export default function Homepage() {
  const task = getFirstTask();
  
  return (
    <div className="bg-white ml-14 mr-20 py-6 md:ml-5 md:mr-4 lg:ml-14 lg:mr-20 sm:ml-0 sm:mr-0 max-sm:ml-5 max-sm:mr-4">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <h1 className="text-2xl font-bold text-blue-600 sm:text-xl md:text-2xl lg:text-2xl max-sm:text-lg">
          {projectData.title}
        </h1>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-xl max-sm:text-xs ">
          Submit task
        </button>
      </div>
      {task && (
        <div className="flex flex-col bg-[#E9ECEF] rounded-xl p-4 mt-4 max-sm:p-2">
          <h2 className="text-lg font-bold max-sm:text-sm">{task.task_title}</h2>
          <p className="text-sm text-black max-sm:text-xs">
            {task.task_description}
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-12 mt-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-sm:grid-cols-1">
        <ImageCard />
        <ThreadbuildCard />
        <StructureCard />
        <FourSAMethodCard />
      </div>
    </div>
  );
}
