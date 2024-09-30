import Button from "../ui/Button.jsx";
import BoxReveal from "@/components/magicui/box-reveal";
import React from "react";

export function BoxReveal_Cozette() {
    return (
        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <p className="text-2xl mt-4 font-semibold md:text-[3.5rem] md:mb-4 md:mt-10 ">
                    Cozette<span className="text-[#7CD7E9]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-[0.8rem] text-[1.2rem] text-left md:mt-[1.8rem]">
                    Présentation de l'entreprise - {" "}
                    <span className="text-[#7CD7E9]">Conciergerie du bien-être</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Cozette propose des services de <span className="text-[#7CD7E9]">bien-être</span> et de <span className="text-[#7CD7E9]">développement personnel</span>, mettant en relation des <span className="text-[#7CD7E9]">professionnels</span> pour répondre aux besoins de ses clients.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; L'entreprise vise à créer un <span className="text-[#7CD7E9]">studio de communication</span> pour aider les entreprises à développer leur <span className="text-[#7CD7E9]">image de marque</span>.
                    </p>
                </div>
            </BoxReveal>

            <hr className="mt-2.5 rounded bg-white md:mt-8"/>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Stage de 2ème année - {" "}
                    <span className="text-[#7CD7E9]">Création du site WordPress pour StudioCom</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Mon objectif était de mettre en place un <span className="text-[#7CD7E9]">site internet fonctionnel</span>, <span className="text-[#7CD7E9]">responsive</span>, <span className="text-[#7CD7E9]">moderne</span> et facile à mettre à jour par un utilisateur lambda. Le travail s'est fait en <span className="text-[#7CD7E9]">collaboration</span> avec une autre personne, responsable des <span className="text-[#7CD7E9]">maquettes</span> et du <span className="text-[#7CD7E9]">texte</span>.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}
