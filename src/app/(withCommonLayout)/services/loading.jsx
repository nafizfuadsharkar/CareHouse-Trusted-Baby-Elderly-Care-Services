import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {[...Array(10)].map((_, ind) => (
        <div key={ind} className="p-6 space-y-4 animate-pulse bg-white rounded-lg">
          {/* Title */}
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>

          {/* Content lines */}
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>

          {/* Card skeleton */}
          <div className="mt-6 space-y-3">
            <div className="h-40 w-full bg-gray-300 rounded-lg"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
