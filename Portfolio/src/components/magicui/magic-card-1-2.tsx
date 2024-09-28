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
                    <h2 className="text-xl font-bold text-white">Comprendre l'organisation</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Travailler chez <span className="text-[#7CD7E9]">Cozette</span>, une conciergerie du bien-être, m'a permis d'appréhender leur fonctionnement. En pleine croissance, ils cherchent à <span className="text-[#7CD7E9]">digitaliser</span> leurs services pour améliorer la <span className="text-[#7CD7E9]">communication</span> interne. Cela a été une expérience enrichissante pour comprendre les enjeux organisationnels et l'importance d'un système d'information efficace.
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
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        L'intégration dans l'équipe s'est faite de manière fluide. Grâce à une bonne collaboration avec le responsable des maquettes et des contenus, j'ai pu contribuer rapidement à la mise en place du site WordPress. Cette <span className="text-[#7CD7E9]">synergie</span> a facilité notre travail, permettant d'ajuster le site aux besoins de l'équipe et d'assurer une <span className="text-[#7CD7E9]">réactivité</span> optimale.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
