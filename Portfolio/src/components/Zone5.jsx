import React, { useEffect, useState, useRef } from 'react';
import { GradualSpacingDemo } from "@/components/magicui/gradual-spacing_demo.tsx";
import {AnimatedListDemo} from "@/components/magicui/animated-list_demo.tsx";

const Zone5 = ({ currentZone }) => {
    const [isInView, setIsInView] = useState(false);
    const zone5Ref = useRef(null);

    useEffect(() => {
        // Déclencher l'animation lorsque la zone 5 est active
        if (currentZone === 5) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    }, [currentZone]);

    return (
        <div
            id="zone5"
            ref={zone5Ref}
            className="scroll-zone h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-around absolute top-[400vh] w-screen"
        >
            {isInView && <GradualSpacingDemo />}
            <AnimatedListDemo/>
        </div>
    );
};

export default Zone5;
