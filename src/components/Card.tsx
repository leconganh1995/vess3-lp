import clsx from "clsx";
import React, { forwardRef } from "react";

export const Card = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(
  (
    {
      children,
      className = "",
      ...props
    }: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "border-[0.5px] border-[rgba(255,255,255,0.5)] rounded-[8px] backdrop-blur-[20px] p-[6px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
