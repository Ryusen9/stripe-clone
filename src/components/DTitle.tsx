import { ReactNode } from "react";

interface DTitleProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  className?: string;
}

const DTitle = ({
  title = "Financial infrastructure to grow your revenue.",
  subtitle = `Accept payments, offer financial services, and build custom
revenue models—from your first transaction to your billionth.`,
  className = "",
  subtitleClassName = "",
}: DTitleProps) => {
  return (
    <p
      className={`text-4xl lg:text-5xl max-w-5xl font-grotesk font-medium leading-tight ${className}`}
    >
      {title}{" "}
      <span className={`text-gray-500 hidden md:inline ${subtitleClassName}`}>
        {subtitle}
      </span>
    </p>
  );
};

export default DTitle;
