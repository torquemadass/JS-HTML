import React from "react";
import { cn } from "../lib/utils.js";

const Button = React.forwardRef(({ className, children, variant = "primary", disabled = false, ...props }, ref) => {
    const baseStyles = "px-y py-2 text-sm font-medium transition-colors";

    const variants = {
        primary: "bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 text-gray-900 disabled:text-gray-400",
        secondary: "bg-gray-800 hover:bg-gray-700 active:bg-gray-600 disabled:bg-gray-200 text-white disabled:text-gray-400",
        bonus: "border-2 border-gray-800 bg-transparent hover:bg-gray-100 active:bg-gray-200 disabled:border-gray-200 text-gray-900 disabled:text-gray-400"
    };

    return (
        <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        disabled={disabled}
        {...props}
        >
        {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;