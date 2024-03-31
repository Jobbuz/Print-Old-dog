import React from "react";
import Image from "next/image";

export default function RecommendedMenu() {
  return (
    <div className="flex flex-row">
      <div className="bg-red-300 rounded-md basis-1/4">1</div>
      <div className="bg-green-500 rounded-md basis-1/4">2</div>
      <div className="bg-blue-400 rounded-md basis-1/4">3</div>
      <div className="bg-yellow-300 rounded-md basis-1/4">4</div>
    </div>
  );
}
