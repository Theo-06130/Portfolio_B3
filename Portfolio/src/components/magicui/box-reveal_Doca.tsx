import Button from "../ui/Button.jsx";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxReveal_Doca() {
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <p className="text-2xl mt-4 font-semibold md:text-[3.5rem] md:mb-4 md:mt-10 ">
                    Docaposte<span className="text-[#7CD7E9]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <a href="https://www.docaposte.com/" target="_blank" className="mt-[0.8rem] text-white underline text-[1.2rem] text-left md:mt-[1.8rem] hover:text-white">
                    Présentation de l'entreprise - {" "}
                    <span className="text-[#7CD7E9]">Leader de la transition numérique</span>
                </a>
            </BoxReveal>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Docaposte, filiale du groupe La Poste, est spécialisée dans la
                        <span className="font-semibold text-[#7CD7E9]"> transformation digitale</span> et la
                        <span className="font-semibold text-[#7CD7E9]"> gestion documentaire</span>.
                        Elle propose des solutions de <span className="font-semibold text-[#7CD7E9]">dématérialisation</span>
                        et de <span className="font-semibold text-[#7CD7E9]">sécurisation des données</span> tout en garantissant
                        la conformité réglementaire.
                    </p>
                </div>
            </BoxReveal>


            <hr className="mt-2.5 rounded  bg-white md:mt-8"/>


            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Expérience chez Docaposte - {" "}
                    <span className="text-[#7CD7E9]">Exploration des services numériques</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; J'ai eu l'opportunité d'observer plusieurs domaines clés chez Docaposte, notamment
                        <span className="font-semibold text-[#7CD7E9]"> le développement Java</span>,
                        <span className="font-semibold text-[#7CD7E9]"> la sécurité ( SOC )</span>, et
                        <span className="font-semibold text-[#7CD7E9]"> la maintenance/infra</span>.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Cette immersion m'a permis de mieux comprendre le rôle crucial des solutions technologiques dans la gestion
                        des systèmes et des données.
                    </p>
                </div>
            </BoxReveal>

        </div>
    );
}
