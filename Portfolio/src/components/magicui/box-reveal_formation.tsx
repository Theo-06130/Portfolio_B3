import Button  from "../ui/Button.jsx";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxRevealForma() {
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <p className="text-3xl font-semibold md:text-[3.5rem] md:mb-4 md:mt-4 ">
                    Formations<span className="text-[#7CD7E9]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-[1.5rem] text-[1rem] text-left md:mt-[1.8rem]">
                    Baccalauréat Général - {" "}
                    <span className="text-[#7CD7E9]">Section Européenne Anglais</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[1.5rem] md:mt-[1.8rem]">
                    <p className="text-left">
                        -&gt; Mes spécialités
                        <span className="font-semibold text-[#7CD7E9]"> NSI ( Numériques et Sciences Informatique )</span>,
                        <span className="font-semibold text-[#7CD7E9]"> Physique-Chimie</span>,
                        <span className="font-semibold text-[#7CD7E9]"> Mathématiques</span>.
                    </p>
                    <p className="mt-[1.5rem] text-left md:mt-[1.8rem]">
                        -&gt; Réalisations de différents projets dont
                        <span className="font-semibold text-[#7CD7E9]"> AI FOR YOUTH</span> organisé par Intel
                        .
                         Ce projet a pour but de permettre aux étudiants de développer des compétences en IA tout en créant un impact social significatif. <br />
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-2.5 rounded  bg-white md:mt-8"/>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1rem] text-left md:mt-8">
                    Ynov campus de Sophia-Antipolis - {" "}
                    <span className="text-[#7CD7E9]">Actuellement en bachelor 3 informatique</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[1.5rem] md:mt-[1.8rem]">
                    <p className="text-left">
                        -&gt; En spécialisation
                        <span className="font-semibold text-[#7CD7E9]"> cybersécurité jusqu'au Bac+5</span>,
                    </p>
                    <p className="mt-[1.5rem] text-left md:mt-[1.8rem]">
                        -&gt; Réalisations de différents projets dans des domaines variés tel que
                        <span className="font-semibold text-[#7CD7E9]"> Développement web</span>, <span className="font-semibold text-[#7CD7E9]"> Développement Application</span>,<span className="font-semibold text-[#7CD7E9]"> Gestion de réseaux</span>,<span className="font-semibold text-[#7CD7E9]"> Administration Windows</span>,<span className="font-semibold text-[#7CD7E9]"> Cybersécurité</span><span className="font-semibold text-[#7CD7E9]"> et bien plus encore</span>.
                    </p>
                </div>
            </BoxReveal>

            {/*<BoxReveal boxColor={"#7CD7E9"} duration={0.5}>*/}
            {/*    <Button className="mt-[.6rem] bg-[#7CD7E9] md:mt-[1.6rem]">Explore</Button>*/}
            {/*</BoxReveal>*/}
        </div>
    );
}

