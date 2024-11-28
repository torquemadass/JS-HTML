import React from "react";
import { cn } from "../lib/utils.js";

const Card = React.forwardRef(({ className, children, disabled = false, ...props }, ref) => {
    return (
        <div
        className={cn(
            "p-4 rounded border border-gray-200 transition-all",
          "hover:border-blue-500 hover:ring-1 hover:ring-blue-500",
          "active:border-blue-600 active:ring-2 active:ring-blue-600",
          disabled && "opacity-50 pointer-events-none border-gray-100",
          className
        )}
        ref={ref}
        {...props}
        >
        {children}
        </div>
    );
    });

Card.displayName = "Card";

export default Card;