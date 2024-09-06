import React from 'react';
import HaloEffect from '@/components/ui/HaloEffect';
import TypingAnimation from '@/components/magicui/typing-animation';
import HyperText from '@/components/magicui/hyper-text';
import WordFadeIn from '@/components/magicui/word-fade-in';

const Zone1 = () => {
    return (
        <div id="zone1" className="scroll-zone h-screen bg-black flex flex-col items-center justify-center">
            <HaloEffect />
            <main className="w-screen h-screen overflow-hidden lg:mt-28">
                <TypingAnimation className="text-7xl mt-10 mb-10" text="Théo Cerkownik" />
                <span className="flex flex-col justify-center items-center mt-4 md:flex-row">
                    <WordFadeIn className="mr-4" words="Je suis étudiant en " />
                    <HyperText text="Cybersécurité" />
                </span>
            </main>
        </div>
    );
};

export default Zone1;
