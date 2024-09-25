import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";

export function MagicCardDoca() {
    const { theme } = useTheme();
    return (
        <div
            className={
                "flex flex-col justify-around w-full gap-4 h-screen "
            }
        >
            <div className="w-screen h-1/3 flex justify-around">
            <MagicCard
                className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
            >
                Magic
            </MagicCard>
            <MagicCard
                className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
            >
                Card
            </MagicCard>
            </div>
            <div className="w-screen flex h-1/3 justify-around">
            <MagicCard
                className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
            >
                Magic
            </MagicCard>
            <MagicCard
                className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
            >
                Card
            </MagicCard>
            </div>
        </div>
    );
}
