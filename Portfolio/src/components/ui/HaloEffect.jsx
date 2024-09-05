import React, { useState, useEffect } from 'react';

const HaloEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [haloPosition, setHaloPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            setHaloPosition((prevPosition) => ({
                x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.1,
                y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.1,
            }));
        };

        const animationFrame = requestAnimationFrame(updatePosition);
        return () => cancelAnimationFrame(animationFrame);
    }, [mousePosition, haloPosition]);

    return (
        <div
            className="absolute pointer-events-none rounded-full
                 transform -translate-x-1/2 -translate-y-1/2
                 bg-gradient-to-r from-indigo-900 via-purple-800 to-transparent
                 w-36 h-36 opacity-50 blur-lg"
            style={{
                left: `${haloPosition.x}px`,
                top: `${haloPosition.y}px`,
            }}
        />
    );
};

export default HaloEffect;
