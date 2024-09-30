import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";
import wp_panel from "../../assets/panel_wp.png"
import Cozette from "@/assets/cozette.png";

export function MagicCard3() {
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
                        <p className="text-gray-400 text-sm">12/06/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Pourquoi j'ai choisi WordPress</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        J'ai <span className="text-[#7CD7E9]">opté pour WordPress</span> car il permet une <span
                        className="text-[#7CD7E9]">mise en place rapide</span> et est <span className="text-[#7CD7E9]">facile à utiliser</span> pour
                        les <span className="text-[#7CD7E9]">non-développeurs</span>. Ce choix a été <span
                        className="text-[#7CD7E9]">crucial</span> pour permettre à Cozette de <span
                        className="text-[#7CD7E9]">maintenir le site facilement</span> après mon stage. Les <span
                        className="text-[#7CD7E9]">plugins</span> permettent une <span
                        className="text-[#7CD7E9]">personnalisation</span> adaptée aux besoins de l'équipe, et les <span
                        className="text-[#7CD7E9]">mises à jour</span> restent <span className="text-[#7CD7E9]">simples à gérer</span>,
                        assurant une maintenance sans complication.
                    </p>


                    <div className=" w-full flex justify-center mt-5">
                        <img className="rounded" src={wp_panel} alt="Panel wordpress"/>
                    </div>

                </MagicCard>

            </div>
        </div>
    );
}
