import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full flex flex-nowrap gap-10 overflow-x-auto p-6 w-2/3 rounded-4xl">
      {props.users.map((elem, idx) => {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;
