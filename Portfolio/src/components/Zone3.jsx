import React from 'react';
import {BoxRevealCompetences} from "@/components/magicui/box-reveal_competences.tsx";

const Zone3 = () => {
    return (
        <div
            id="zone3"
            className="scroll-zone h-screen text-white bg-gradient-to-b from-gray-950 to-gray-950 flex items-center justify-center absolute top-[200vh] w-screen"
        >
            <BoxRevealCompetences></BoxRevealCompetences>
        </div>
    );
};

export default Zone3;
