import React from "react";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div
      className="w-60 h-72 absolute flex flex-col gap-2 items-center justify-center text-center bg-opacity-26 bg-white border-4 border-orange-300 shadow-box rounded-2xl p-0 px-26 pb-8"
      style={{ borderColor: { color } }}
    >
      <img src={emoji} alt="" className="transform scale-60 mb-[-1rem]" />
      <span className="text-gray-500 text-base">{heading}</span>
      <span>{detail}</span>
      <button className="bg-white shadow-xl rounded-lg border-none p-2 text-base text-blue-500 transform scale-110 cursor-pointer">
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
