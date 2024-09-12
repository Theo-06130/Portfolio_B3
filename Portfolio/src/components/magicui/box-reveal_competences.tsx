import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxRevealCompetences() {
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <p className="text-2xl mt-4 font-semibold md:text-[3.5rem] md:mb-4 md:mt-10 ">
                    Compétences<span className="text-[#7CD7E9]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-[0.8rem] text-[1.2rem] text-left md:mt-[1.8rem]">
                    Mes Langages {" "}
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Front-end
                        <span
                            className="font-semibold text-[#7CD7E9]"> HTML</span>,
                        <span className="font-semibold text-[#7CD7E9]"> CSS</span>/
                        <span className="font-semibold text-[#7CD7E9]">SCSS</span>/
                        <span className="font-semibold text-[#7CD7E9]">TAILWIND</span>,
                        <span className="font-semibold text-[#7CD7E9]"> JS</span>/
                        <span className="font-semibold text-[#7CD7E9]">REACT</span>.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Back-end
                        <span className="font-semibold text-[#7CD7E9]"> PHP</span>,
                        <span className="font-semibold text-[#7CD7E9]"> PYTHON</span>/
                        <span className="font-semibold text-[#7CD7E9]">GO</span>,
                        <span className="font-semibold text-[#7CD7E9]"> C#</span>/
                        <span className="font-semibold text-[#7CD7E9]">C++</span>/
                        <span className="font-semibold text-[#7CD7E9]">Java</span>.
                    </p>
                </div>
            </BoxReveal>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Autre
                        <span
                            className="font-semibold text-[#7CD7E9]"> SQL</span>,
                        <span className="font-semibold text-[#7CD7E9]"> BASH</span>/
                        <span className="font-semibold text-[#7CD7E9]">POWERSHELL</span>.
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-2.5 rounded  bg-white md:mt-8"/>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Outils/Application {" "}
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Partie développement
                        <span className="font-semibold text-[#7CD7E9]"> JetBrains (Phpstorm,Rider...)</span>/
                        <span className="font-semibold text-[#7CD7E9]"> VSCode</span>/
                        <span className="font-semibold text-[#7CD7E9]">Eclipse</span>/
                        <span className="font-semibold text-[#7CD7E9]">Code Blocks</span>.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Partie Réseaux/Infrastructure
                        <span className="font-semibold text-[#7CD7E9]"> Cisco packet tracer</span>,
                        <span className="font-semibold text-[#7CD7E9]"> Windows Server 2019</span>,
                        <span className="font-semibold text-[#7CD7E9]"> Ubuntu/Debian/TrueNAS</span>.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Autres
                        <span className="font-semibold text-[#7CD7E9]"> Wordpress</span>.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}

