// src/App.jsx

import React from 'react';
import './App.css';
import BlurIn from "@/components/magicui/blur-in";
import NumberTicker from "@/components/magicui/number-ticker";
import {AnimatedListDemo} from "@/components/magicui/animated-list_demo.tsx";
import TypingAnimation from "@/components/magicui/typing-animation.tsx";


function App() {
    return (
        <>
            <main className="w-screen h-screen overflow-hidden">
                <TypingAnimation text="Work In Progress"></TypingAnimation>
                <AnimatedListDemo></AnimatedListDemo>
            </main>
        </>
    );
}

export default App;
