// src/App.jsx

import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import {AnimatedListDemo} from "@/components/magicui/animated-list_demo.tsx";
import TypingAnimation from "@/components/magicui/typing-animation.tsx";
import HaloEffect from "@/components/ui/HaloEffect.jsx";
import WordRotate from "@/components/magicui/word-rotate.tsx";
import DelayedAppearance from "@/components/ui/DelayedAppearance.jsx";


function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Théo Cerkownik</title>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>
            </Helmet>
            <HaloEffect/>
            {/*<div className="text-center w-1/5 cursor-default relative top-[150px] left-[150px]">*/}
            {/*    <p className="text-5xl font-bold tracking-[.10em] text-transparent hover:text-gray-600 hover:opacity-50 transition-colors duration-500">La lumière UV révèle le texte caché.</p>*/}
            {/*</div>*/}
            <main className="w-screen h-screen overflow-hidden lg:mt-28">
                <TypingAnimation className="text-5xl" text="Théo Cerkownik"></TypingAnimation>
                <DelayedAppearance delay="2000">
                <span className="flex justify-center items-center mt-4"><h2 className="text-4xl mr-2">Je suis</h2><WordRotate className="text-4xl" words={["Étudiant", "Photographe","Motard"]}/></span>
                </DelayedAppearance>
            </main>
        </>
    );
}

export default App;
