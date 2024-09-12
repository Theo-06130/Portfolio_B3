import React from 'react';
import {SparklesTextDemo} from "@/components/magicui/sparkles-text-demo.tsx";
import {BlurFadeDemo} from "@/components/magicui/blur-fade-demo.tsx";
const Zone4 = () => {
    return (
        <div
            id="zone4"
            className="scroll-zone h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center absolute top-[300vh] w-screen"
        >
            <SparklesTextDemo/>
            <BlurFadeDemo/>
        </div>
    );
};

export default Zone4;
