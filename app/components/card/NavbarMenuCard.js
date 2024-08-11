export default function NavbarMenuCard({ children }) {
  return (
    <li className="z-10">
      <div className="flex gap-3 bg-[#FFFAE6] drop-shadow-[0_1.10px_1.10px_rgba(0,0,0,0.8)] items-center rounded-xl shadow-xl py-2 px-2 desktopMinWidth:px-5">
        {children}
      </div>
    </li>
  );
}
