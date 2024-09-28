import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard1_2() {
    const { theme } = useTheme();
    return (
        <div
            className={"flex flex-col justify-around w-full gap-4 h-screen"}
        >
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Première MagicCard */}
                <MagicCard
                    className="cursor-pointer w-4/5 h-2/5 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Pourquoi j'ai choisi WordPress</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300">
                        J'ai choisi <span className="text-[#7CD7E9]">WordPress</span> pour son <span className="text-[#7CD7E9]">gain de temps</span> et ses <span className="text-[#7CD7E9]">fonctionnalités variées</span>, grâce aux plugins. Il est également <span className="text-[#7CD7E9]">simple à mettre à jour</span>, permettant à l'équipe de gérer le contenu sans compétences techniques.
                    </p>
                </MagicCard>

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-4/5 h-2/5 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Les défis rencontrés</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300">
                        Malgré ses avantages, j'ai dû faire face à des problèmes de <span className="text-[#7CD7E9]">compatibilité</span> entre certains plugins et à des défis pour optimiser le site et assurer une bonne performance.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
