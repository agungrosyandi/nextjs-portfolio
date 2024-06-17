import { FaCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <small className="gap-2 w-full h-[2rem] flex flex-row justify-center items-center text-center text-xs">
        <FaCopyright />
        <p>2024 Agung Rosyandi || All right reserved</p>
      </small>
    </footer>
  );
}
