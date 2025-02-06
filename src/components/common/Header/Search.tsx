import { CiSearch } from "react-icons/ci";

export default function Search({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <CiSearch className="text-2xl font-bold cursor-pointer" />
    </div>
  );
}
