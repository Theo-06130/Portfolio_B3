import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";
import Cozette from "../../assets/cozette.png"

export function MagicCard1() {
    const { theme } = useTheme();
    return (
        <div
            className={"flex flex-col justify-around w-full gap-4 h-screen"}
        >
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Première MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[80%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col  justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">6/06/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Comprendre l'organisation</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Travailler chez <span className="text-[#7CD7E9]">Cozette</span> m'a permis de découvrir leur
                        projet de création d'un studio de communication, <span
                        className="text-[#7CD7E9]">StudioCom</span>. Ce studio vise à aider à la transition digitale en
                        proposant des <span className="text-[#7CD7E9]">formations</span> sur la création d'entreprise,
                        l'identité visuelle et le community management.

                    </p>
                    <div className=" w-full flex justify-center mt-5">
                        <img className="rounded" src={Cozette} alt="Site cozette la conciergerie du bien-être"/>
                    </div>

                </MagicCard>
            </div>
        </div>
    );
}
