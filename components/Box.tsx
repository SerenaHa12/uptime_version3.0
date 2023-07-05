import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div>
      <div
        className={twMerge(
          `
        bg-neutral-100 
            rounded-lg 
            h-fit 
            w-full
        `,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
