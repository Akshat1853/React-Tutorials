import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute h-full top-0 left-0 w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-normal text-white mb-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          aspernatur quaerat inventore, blanditiis reprehenderit perferendis.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
