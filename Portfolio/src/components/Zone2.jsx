import React from 'react';
import {BoxRevealForma} from "@/components/magicui/box-reveal_formation.tsx";
import {BoxRevealCompetences} from "@/components/magicui/box-reveal_competences.tsx";

const Zone2 = () => {
    return (
        <div
            id="zone2"
            className="scroll-zone h-screen bg-gradient-to-b from-black to-gray-950 flex items-center justify-around absolute top-full left-0 w-full"
        >
            <BoxRevealForma></BoxRevealForma>
            <BoxRevealCompetences></BoxRevealCompetences>

        </div>
    );
};

export default Zone2;
