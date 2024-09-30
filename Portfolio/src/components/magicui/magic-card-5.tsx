import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard5() {
    const { theme } = useTheme();
    return (
        <div className={"flex flex-col justify-around w-full gap-4 h-screen"}>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Première MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[90%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">10/07/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Participer aux prises de décision</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Au cours de mon stage, j'ai pris part à des <span className="text-[#7CD7E9]">discussions enrichissantes</span> sur
                        l'importance de l'<span className="text-[#7CD7E9]">UX/UI</span> et sur la <span
                        className="text-[#7CD7E9]">quantité de travail</span> par rapport à nos délais. Nous avons
                        souvent été confrontés à des <span className="text-[#7CD7E9]">défis significatifs</span> pour
                        respecter nos échéances, notamment en raison de la complexité de certaines fonctionnalités que
                        nous devions intégrer. J'ai partagé mon avis sur la nécessité de <span
                        className="text-[#7CD7E9]">prioriser certaines fonctionnalités</span> afin d'éviter d'être
                        submergés par un volume de travail trop élevé. Par exemple, nous avons discuté de la possibilité
                        de reporter certaines options moins critiques pour nous concentrer sur l'essentiel et livrer un
                        produit de qualité dans les délais impartis. Cette expérience m'a appris à mieux évaluer l'<span
                        className="text-[#7CD7E9]">impact de chaque décision</span> sur la charge de travail et les
                        délais, renforçant ainsi ma compréhension des processus de <span className="text-[#7CD7E9]">gestion de projet</span> et
                        l'importance d'une communication claire au sein de l'équipe.
                    </p>

                </MagicCard>

            </div>
        </div>
    );
}
