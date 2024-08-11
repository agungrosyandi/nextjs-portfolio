import React from "react";

export default function Background() {
  return (
    <>
      <div className="flex z-[-1]">
        <div className=" desktopMinWidth:absolute desktopMinWidth:flex-1 desktopMinWidth:bg-[#FFFAE6] desktopMinWidth:w-[60%] desktopMinWidth:h-[100%] desktopMinWidth:top-[0%] desktopMinWidth:left-[-10%] desktopMinWidth:bottom-0"></div>
        ;
        <div className="desktopMinWidth:absolute desktopMinWidth:flex-1 desktopMinWidth:bg-[#9AB5AC] desktopMinWidth:w-[60%] h-[100%] desktopMinWidth:top-[0%] desktopMinWidth:right-[-10%] desktopMinWidth:bottom-0"></div>
        ;
      </div>
    </>
  );
}
