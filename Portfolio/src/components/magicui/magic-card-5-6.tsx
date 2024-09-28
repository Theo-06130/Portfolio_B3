import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard5_6() {
    const { theme } = useTheme();
    return (
        <div className={"flex flex-col justify-around w-full gap-4 h-screen"}>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Première MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-2/5 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Participer aux prises de décision</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Au cours de mon stage, j'ai pris part à des discussions sur l'importance de <span className="text-[#7CD7E9]">l'UX/UI</span> et sur la <span className="text-[#7CD7E9]">quantité de travail</span> par rapport à nos délais. Nous avons souvent été confrontés à des défis pour respecter nos échéances, et j'ai partagé mon avis sur la nécessité de prioriser certaines fonctionnalités pour éviter d'être submergés. Cette expérience m'a appris à mieux évaluer l'impact de chaque décision sur la <span className="text-[#7CD7E9]">charge de travail</span> et les délais.
                    </p>
                </MagicCard>

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-2/5 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Acquérir des compétences nouvelles</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Cette expérience m'a permis de sortir de ma <span className="text-[#7CD7E9]">zone de confort</span> du développement web classique. Les <span className="text-[#7CD7E9]">CMS</span> offrent une <span className="text-[#7CD7E9]">rapidité de développement</span>, mais cela limite la liberté sur certains aspects. Bien que cela ait été enrichissant pour élargir mes connaissances, cela m'a également confirmé que je souhaite me concentrer sur des domaines tels que la <span className="text-[#7CD7E9]">cybersécurité</span>, qui m'intéressent davantage.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
