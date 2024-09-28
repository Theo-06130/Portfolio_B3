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
                    className="cursor-pointer w-[calc(100%-24px)] h-[47%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Comprendre l'organisation</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Travailler chez <span className="text-[#7CD7E9]">Cozette</span> m'a permis de découvrir leur projet de création d'un studio de communication, <span className="text-[#7CD7E9]">StudioCom</span>. Ce studio vise à aider à la transition digitale en proposant des <span className="text-[#7CD7E9]">formations</span> sur la création d'entreprise, l'identité visuelle et le community management.
                    </p>
                </MagicCard>

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[47%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">S'intégrer dans l'équipe</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        L'intégration dans l'équipe s'est faite de manière fluide. Grâce à une bonne collaboration avec la responsable des maquettes et des contenus, j'ai pu contribuer rapidement à la mise en place du site WordPress. Cette <span className="text-[#7CD7E9]">synergie</span> a facilité notre travail, permettant d'ajuster le site aux besoins de l'équipe et d'assurer une <span className="text-[#7CD7E9]">réactivité</span> optimale.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
