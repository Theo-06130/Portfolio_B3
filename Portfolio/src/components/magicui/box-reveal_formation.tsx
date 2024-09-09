import Button  from "../ui/Button.jsx";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxRevealForma() {
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-2xl font-semibold md:text-[3.5rem] md:mb-4 md:mt-4 ">
                    Formations<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem] text-left">
                    Baccalauréat Général - {" "}
                    <span className="text-[#5046e6]">Section Européenne Anglais</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                    <p className="text-left">
                        -&gt; Mes spécialisations
                        <span className="font-semibold text-[#5046e6]"> NSI ( Numériques et Sciences Informatique )</span>,
                        <span className="font-semibold text-[#5046e6]"> Physique-Chimie</span>,
                        <span className="font-semibold text-[#5046e6]"> Mathématiques</span>.
                    </p>
                    <p className="mt-[1.5rem] text-left">
                        -&gt; Réalisations de différents projets dont
                        <span className="font-semibold text-[#5046e6]"> AI FOR YOUTH</span> organisé par Intel
                        .
                         Ce projet a pour but de permettre aux étudiants de développer des compétences en IA tout en créant un impact social significatif. <br />
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-8 rounded  bg-white"/>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-8 text-[1rem] text-left">
                    Bachelor informatique - {" "}
                    <span className="text-[#5046e6]">Spécialisation Cybersécurité jusqu'au Bac+5</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-[1.5rem]">
                    <p className="text-left">
                        -&gt; Mes spécialisations
                        <span className="font-semibold text-[#5046e6]"> NSI ( Numériques et Sciences Informatique )</span>,
                        <span className="font-semibold text-[#5046e6]"> Physique-Chimie</span>,
                        <span className="font-semibold text-[#5046e6]"> Mathématiques</span>.
                    </p>
                    <p className="mt-[1.5rem] text-left">
                        -&gt; Réalisations de différents projets dont
                        <span className="font-semibold text-[#5046e6]"> AI FOR YOUTH</span> organisé par Intel
                        .
                        Ce projet a pour but de permettre aux étudiants de développer des compétences en IA tout en créant un impact social significatif. <br />
                    </p>
                </div>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
            </BoxReveal>
        </div>
    );
}

