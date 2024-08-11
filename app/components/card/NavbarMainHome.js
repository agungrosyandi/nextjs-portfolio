export default function NavbarMainHome({ children }) {
  return (
    <h1 className="text-xs rounded-xl drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] bg-[#FFFAE6] shadow-xl px-5 py-2 tabletMinWidth:text-base desktopMinWidth:text-sm">
      {children}
    </h1>
  );
}
