import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard6() {
    const { theme } = useTheme();
    return (
        <div className={"flex flex-col justify-around w-full gap-4 h-screen"}>
            <div className="w-screen h-screen flex flex-col items-center justify-around">

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[80%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-2/3 md:h-4/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">25/07/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Acquérir des compétences nouvelles</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Cette expérience m'a permis de <span
                        className="text-[#7CD7E9]">sortir de ma zone de confort</span> du développement web classique.
                        En effet, travailler avec un <span className="text-[#7CD7E9]">CMS comme WordPress</span> offre
                        une <span className="text-[#7CD7E9]">rapidité de développement</span> appréciable, mais cela
                        limite également la liberté sur certains aspects, notamment en termes de personnalisation et de
                        flexibilité. J'ai dû m'adapter à des contraintes qui n'étaient pas présentes dans mes projets
                        précédents, ce qui m'a amené à explorer des solutions créatives pour contourner ces limitations.
                        Bien que cette aventure ait été <span className="text-[#7CD7E9]">enrichissante</span> et m'ait
                        permis d'élargir mes connaissances, cela m'a également confirmé que je souhaite me concentrer
                        sur des domaines tels que la <span className="text-[#7CD7E9]">cybersécurité</span>, qui
                        m'intéressent davantage. Cette réflexion m'a incité à me questionner sur mes objectifs
                        professionnels à long terme et à envisager des voies qui me permettront d'explorer pleinement
                        mes passions.
                    </p>

                </MagicCard>
            </div>
        </div>
    );
}
