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
                <h2 className="mt-[0.8rem] text-[1.2rem] text-left md:mt-[1.8rem]">
                    Présentation de l'entreprise - {" "}
                    <span className="text-[#7CD7E9]">Leader de la transition numérique</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Docaposte est une filiale du groupe La Poste, spécialisée dans la
                        <span className="font-semibold text-[#7CD7E9]"> transformation digitale</span> et la
                        <span className="font-semibold text-[#7CD7E9]"> gestion documentaire</span>.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; L'entreprise offre des solutions innovantes permettant d'optimiser la
                        <span className="font-semibold text-[#7CD7E9]"> dématérialisation</span> des documents
                        et la <span className="font-semibold text-[#7CD7E9]"> sécurisation des données </span>
                        tout en garantissant la conformité réglementaire. <br />
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-2.5 rounded  bg-white md:mt-8"/>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Engagement en faveur de l'innovation - {" "}
                    <span className="text-[#7CD7E9]">Partenaire de confiance pour les entreprises</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Docaposte investit dans des technologies émergentes telles que
                        <span className="font-semibold text-[#7CD7E9]"> l'intelligence artificielle</span> et
                        <span className="font-semibold text-[#7CD7E9]"> la blockchain</span> pour répondre aux défis
                        actuels des entreprises.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; Grâce à son expertise, Docaposte accompagne les organisations dans leur
                        <span className="font-semibold text-[#7CD7E9]"> transformation numérique</span> et leur permet
                        d'améliorer l'efficacité de leurs processus opérationnels.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}
