import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface RoundedBtnProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function RoundedBtn({
  children,
  className = "",
  backgroundColor,
}: RoundedBtnProps) {
  return (
    <button
      className={`px-4 py-1.5 rounded-lg! bg-skyBlue flex items-center justify-center text-sm! font-semibold! gap-1 font-grotesk ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <span>{children}</span>
      <ChevronRight size={18} />
    </button>
  );
}
