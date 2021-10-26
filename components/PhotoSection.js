import React from "react";

function PhotoSection() {
  return (
    <div>
      <div className="innerShadowCircle dark:innerShadowCircleDark sm:p-4 p-2 flex justify-center items-center">
        <div
          className="outerShadowCircle dark:outerShadowCircleDark sm:p-2 p-1 flex justify-center items-center"
          data-inviewport="zoom-in"
        >
          <img
            src="/profile-circle.png"
            alt="logo"
            className=" w-32 h-32 p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
