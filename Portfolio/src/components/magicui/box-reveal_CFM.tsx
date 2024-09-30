import Button from "../ui/Button.jsx";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxReveal_CFM() {
    return (
        <div className="h-full text-gray-900 w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#095edc"} duration={0.5}>
                <p className="text-2xl mt-4 font-semibold md:text-[3.5rem] md:mb-4 md:mt-10 ">
                    CFM Indosuez<span className="text-[#095edc]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#095edc"} duration={0.5}>
                <h2 className="mt-[0.8rem] text-[1.2rem] text-left md:mt-[1.8rem]">
                    Présentation de l'entreprise - {" "}
                    <span className="text-[#095edc]">CFM Indosuez Wealth Management</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#095edc"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; CFM Indosuez est une institution bancaire de premier plan basée à Monaco, spécialisée dans la gestion de fortune et l'accompagnement des grandes fortunes.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Forte d'une expertise internationale, l'entreprise propose des solutions sur mesure en matière de gestion d'actifs, de planification patrimoniale et de conseil financier.
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-2.5 rounded bg-white md:mt-8"/>
            <BoxReveal boxColor={"#095edc"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Alternance en cybersécurité - {" "}
                    <span className="text-[#095edc]">Assistant cybersécurité (2024 - 2027)</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#095edc"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Depuis 2024, je suis en alternance chez CFM Indosuez en tant qu'assistant en cybersécurité. Cette expérience me permet de renforcer mes compétences en sécurité informatique et de contribuer à la protection des infrastructures numériques de l'entreprise.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}
