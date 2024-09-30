import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";

export function MagicCard3_4() {
    const { theme } = useTheme();
    return (
        <div className={"flex flex-col justify-around w-full gap-4 h-screen"}>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Première MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[47%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
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
                        J'ai opté pour <span className="text-[#7CD7E9]">WordPress</span> car il permet une <span className="text-[#7CD7E9]">mise en place rapide</span> et est <span className="text-[#7CD7E9]">facile à utiliser</span> pour les non-développeurs. Cela a été crucial pour permettre à Cozette de maintenir le site facilement après la fin de mon stage. De plus, les plugins offrent une <span className="text-[#7CD7E9]">personnalisation</span> selon les besoins de l'équipe, et les mises à jour sont simples à gérer.
                    </p>
                </MagicCard>

                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[47%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <div className="w-full flex justify-between">
                        {/* Date */}
                        <p className="text-gray-400 text-sm">24/06/24</p>

                        {/* Nom */}
                        <p className="text-gray-400 text-sm">Théo CERKOWNIK</p>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-white">Les défis rencontrés avec WordPress</h2>

                    {/* Texte */}
                    <p className="text-sm text-gray-300 mt-2.5 text-left">
                        Malgré ses avantages, j'ai rencontré des défis comme la <span className="text-[#7CD7E9]">compatibilité</span> entre certains plugins et des problèmes de <span className="text-[#7CD7E9]">performance</span>. De plus, le manque de <span className="text-[#7CD7E9]">liberté sur le style</span> m'a contraint à utiliser mes connaissances en développement pour modifier des éléments qui n'étaient pas personnalisables via WordPress. Ces obstacles ont nécessité des ajustements et une <span className="text-[#7CD7E9]">veille constante</span> pour assurer un site fonctionnel et réactif.
                    </p>
                </MagicCard>
            </div>
        </div>
    );
}
