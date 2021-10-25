import React from "react";

function PhotoSection() {
  return (
    <div>
      <div className="innerShadowCircle dark:innerShadowCircleDark p-4 flex justify-center items-center">
        <div className="outerShadowCircle dark:outerShadowCircleDark p-4 flex justify-center items-center">
          <img src="/profile-circle.png" alt="logo" className="w-24 h-24 p-2" />
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
