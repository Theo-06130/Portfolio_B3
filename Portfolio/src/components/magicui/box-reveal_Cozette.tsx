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
                        -&gt; Cozette est une conciergerie spécialisée dans le bien-être, offrant des services variés pour améliorer la qualité de vie de ses clients.
                    </p>
                    <p className="mt-[0.8rem] text-left ml-6 md:mt-[1.8rem]">
                        -&gt; L'entreprise se consacre à créer des solutions personnalisées, allant des services de bien-être à domicile aux conseils en gestion du temps.
                    </p>
                </div>
            </BoxReveal>
            <hr className="mt-2.5 rounded  bg-white md:mt-8"/>
            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <h2 className="mt-2.5 text-[1.2rem] text-left md:mt-8">
                    Stage de 2ème année - {" "}
                    <span className="text-[#7CD7E9]">Création du site WordPress pour StudioCom</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#7CD7E9"} duration={0.5}>
                <div className="mt-[0.8rem] md:mt-[1.8rem]">
                    <p className="text-left ml-6">
                        -&gt; Lors de mon stage, j'ai été en charge de la création du site WordPress pour StudioCom, un projet qui m'a permis de mettre en pratique mes compétences en développement web.
                    </p>
                </div>
            </BoxReveal>
        </div>
    );
}
