import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-fit object-cover" src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCard;
