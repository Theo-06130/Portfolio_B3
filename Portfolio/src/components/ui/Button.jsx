import React from 'react';

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`px-4 py-2 bg-[#7CD7E9] text-[#03060F] ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
