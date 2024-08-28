// src/App.jsx

import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import {AnimatedListDemo} from "@/components/magicui/animated-list_demo.tsx";
import TypingAnimation from "@/components/magicui/typing-animation.tsx";


function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Théo Cerkownik</title>
            </Helmet>
            <main className="w-screen h-screen overflow-hidden lg:mt-28">
                <TypingAnimation text="Work In Progress"></TypingAnimation>
                <AnimatedListDemo></AnimatedListDemo>
            </main>
        </>
    );
}

export default App;
