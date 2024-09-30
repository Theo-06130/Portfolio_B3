import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard2() {
    const { theme } = useTheme();
    return (
        <div
            className={"flex flex-col justify-around w-full gap-4 h-screen"}
        >
            <div className="w-screen h-screen flex flex-col items-center justify-around">

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[80%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">10/06/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">S'intégrer dans l'équipe</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        L'<span className="text-[#7CD7E9]">intégration</span> dans l'équipe s'est faite de manière
                        fluide et naturelle. Dès le départ, j'ai pu <span className="text-[#7CD7E9]">collaborer étroitement</span> avec
                        la responsable des <span className="text-[#7CD7E9]">maquettes</span> et des <span
                        className="text-[#7CD7E9]">contenus</span>, ce qui a été déterminant pour une bonne <span
                        className="text-[#7CD7E9]">coordination des tâches</span>. Grâce à cette <span
                        className="text-[#7CD7E9]">synergie</span>, nous avons pu mettre en place <span
                        className="text-[#7CD7E9]">rapidement</span> le site WordPress en respectant les <span
                        className="text-[#7CD7E9]">besoins spécifiques</span> de l'entreprise. Cette <span
                        className="text-[#7CD7E9]">collaboration efficace</span> a permis d'ajuster les fonctionnalités
                        du site <span className="text-[#7CD7E9]">en temps réel</span> et de maintenir une <span
                        className="text-[#7CD7E9]">réactivité optimale</span> face aux demandes de l'équipe. Cela m'a
                        également aidé à mieux <span className="text-[#7CD7E9]">comprendre les attentes</span> de chacun
                        et à <span className="text-[#7CD7E9]">adapter mes priorités</span>.
                    </p>


                </MagicCard>
            </div>
        </div>
    );
}
