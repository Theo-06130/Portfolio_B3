import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import TypingAnimation from '@/components/magicui/typing-animation.tsx';
import HaloEffect from '@/components/ui/HaloEffect.jsx';
import WordFadeIn from '@/components/magicui/word-fade-in.tsx';
import HyperText from '@/components/magicui/hyper-text.tsx';
import DelayedAppearance from '@/components/ui/DelayedAppearance.jsx';

function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Théo Cerkownik</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                />
            </Helmet>
            <HaloEffect />
            <main className="w-screen h-screen overflow-hidden lg:mt-28">
                <TypingAnimation className="text-4xl mt-10 mb-10 lg:text-7xl" text="Théo Cerkownik" />
                <span className="flex flex-col justify-center items-center mt-4 md:flex-row">
                    <WordFadeIn className="mr-4" words="Je suis étudiant en " />
                    <DelayedAppearance delay={2000}>
                        <HyperText text="Cybersécurité" />
                    </DelayedAppearance>
                </span>
            </main>
        </>
    );
}

//hello world

export default App;
