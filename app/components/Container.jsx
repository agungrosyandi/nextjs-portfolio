import Background from "./card/Background";

export default function Container({ children }) {
  return (
    <>
      <div className="relative px-[5%] mx-auto w-screen min-h-screen desktopMinWidth:w-[95vw] fullHdMinWidth:w-[90vw]">
        {children}
      </div>
    </>
  );
}
