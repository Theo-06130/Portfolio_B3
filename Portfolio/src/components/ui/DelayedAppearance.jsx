import React, { useState, useEffect } from 'react';

const DelayedAppearance = ({ delay, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            {children}
        </div>
    );
};

export default DelayedAppearance;
