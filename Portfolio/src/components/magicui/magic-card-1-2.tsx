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
                    className="cursor-pointer w-screen m-6 h-1/2 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
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
                    <p className="text-sm text-gray-300">
                        Cozette, une <span className="text-[#7CD7E9]">conciergerie du bien-être</span> en pleine croissance, cherche à développer un <span className="text-[#7CD7E9]">studio de communication</span>. Leur besoin de <span className="text-[#7CD7E9]">digitalisation</span> et d'amélioration de la <span className="text-[#7CD7E9]">communication</span> interne m'a permis de mieux comprendre les enjeux organisationnels.
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
                    <h2 className="text-xl font-bold text-white">S'intégrer dans l'équipe</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300">
                        L'intégration s'est faite rapidement grâce à une bonne collaboration avec le responsable des <span className="text-[#7CD7E9]">maquettes</span> et des <span className="text-[#7CD7E9]">contenus</span>. Nous avons travaillé en <span className="text-[#7CD7E9]">synergie</span> pour mettre en place un site WordPress en phase avec les attentes de l'équipe.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
