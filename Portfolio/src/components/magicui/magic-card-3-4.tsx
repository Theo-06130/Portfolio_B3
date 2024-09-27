import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import {useTheme} from "next-themes";

export function MagicCard3_4() {
    const { theme } = useTheme();
    return (
        <div
            className={
                "flex flex-col justify-around w-full gap-4 h-screen "
            }
        >
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                <MagicCard
                    className="cursor-pointer w-1/3 h-2/5 bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">27/09/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>


                    {/* Title */}
                    <h2 className="text-xl font-bold text-white">Mon stage chez Docaposte</h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-300">
                        J'ai découvert le développement Java, la sécurité SOC, et la maintenance/infra. Une expérience enrichissante...
                    </p>
                </MagicCard>

                <MagicCard
                    className="cursor-pointer w-1/3 h-2/5 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    Card
                </MagicCard>
            </div>
        </div>
    );
}