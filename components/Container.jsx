export default function Container({ children }) {
  return (
    <>
      <div className=" relative flex px-5 flex-col mx-auto w-screen min-h-screen tabletMinWidth:w-[95vw] desktopMinWidth:w-[90vw] fullHdMinWidth:w-[70vw]">
        {children}
      </div>
    </>
  );
}
