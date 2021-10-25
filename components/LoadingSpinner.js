import React from "react";

export default function LoadingSpinner() {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-drPurple"></div>
    </div>
  );
}
