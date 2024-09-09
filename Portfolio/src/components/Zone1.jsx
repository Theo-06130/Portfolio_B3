import React from 'react';
import HaloEffect from '@/components/ui/HaloEffect';
import TypingAnimation from '@/components/magicui/typing-animation';
import HyperText from '@/components/magicui/hyper-text';
import WordFadeIn from '@/components/magicui/word-fade-in';
import scroll from '../assets/scroll.svg'

const Zone1 = () => {
    return (
        <div id="zone1" className="scroll-zone text-white h-screen bg-black flex flex-col items-center justify-center">
            <HaloEffect />
            <main className="w-screen h-screen overflow-hidden xl:mt-24">
                <TypingAnimation className="text-7xl mt-10 mb-10" text="Théo Cerkownik" />
                <span className="flex flex-col justify-center items-center mt-4 md:flex-row">
                    <WordFadeIn className="mr-4" words="Je suis étudiant en " />
                    <HyperText text="Cybersécurité" />
                </span>
                <div className="flex">
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[-200px] left-20 text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1800px]:left-[100px] min-[2000px]:left-[] min-[2500px]:left-[]">Front-end</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[200px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1800px]:left-[] min-[2000px]:left-[] min-[2500px]:left-[]">Photographe</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-28 left-[400px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1500px]:left-[650px] min-[1800px]:left-[1100px] min-[2000px]:left-[1350px] min-[2500px]:left-[1500px]">Motard</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[-160px] left-[500px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1500px]:left-[700px] min-[1800px]:left-[800px] min-[2000px]:left-[1200px] min-[2500px]:left-[1500px]">Sportif</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[0px] left-[300px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1500px]:left-[500px] min-[1800px]:left-[600px] min-[2000px]:left-[900px] min-[2500px]:left-[1050px]">Créatif</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[0px] left-[-800px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1800px]:left-[-600px] min-[2000px]:left-[] min-[2500px]:left-[]">Curieux</h3>
                    <h3 className="hidden xl:block text-4xl p-5 relative top-[250px] left-[-100px] text-transparent font-bold transition duration-700 hover:text-gray-700 min-[1800px]:left-[400px] min-[2000px]:left-[550px] min-[2500px]:left-[1000px]">Motivé</h3>
                </div>
                <div className="w-screen flex items-center justify-center"><img className="w-14" src={scroll}/>
                </div>
            </main>
        </div>
    );
};

export default Zone1;
