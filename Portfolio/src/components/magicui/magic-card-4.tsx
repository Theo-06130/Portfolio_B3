import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";
import Css_panel from '../../assets/Css_custom_wp.png'

export function MagicCard4() {
    const { theme } = useTheme();
    return (
        <div className={"flex flex-col justify-around w-full gap-4 h-screen"}>
            <div className="w-screen h-screen flex flex-col items-center justify-around">
                {/* Deuxième MagicCard */}
                <MagicCard
                    className="cursor-pointer w-[calc(100%-24px)] h-[90%] bg-gray-950 text-white shadow-2xl p-4 flex flex-col justify-between md:w-1/3 md:h-2/5"
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
                        Malgré ses <span className="text-[#7CD7E9]">avantages</span>, j'ai rencontré des <span
                        className="text-[#7CD7E9]">défis</span> tels que la <span className="text-[#7CD7E9]">compatibilité entre certains plugins</span> et
                        des <span className="text-[#7CD7E9]">problèmes de performance</span>. Le <span
                        className="text-[#7CD7E9]">manque de liberté sur le style</span> m'a également contraint à
                        utiliser mes <span className="text-[#7CD7E9]">connaissances en développement</span> pour
                        personnaliser des éléments non modifiables via WordPress. Dans certains cas, j'ai dû recourir à
                        l'utilisation de <span className="text-[#7CD7E9]">CSS</span> pour appliquer des styles
                        spécifiques, utilisant même la balise <span className="text-[#7CD7E9]">!important</span> pour
                        forcer l'application de styles qui ne prenaient pas effet à cause de règles prédéfinies par
                        WordPress. Ces <span className="text-[#7CD7E9]">obstacles</span> ont nécessité des <span
                        className="text-[#7CD7E9]">ajustements réguliers</span> et une <span className="text-[#7CD7E9]">veille constante</span> pour
                        garantir un site <span className="text-[#7CD7E9]">fonctionnel</span> et <span
                        className="text-[#7CD7E9]">réactif</span> face aux exigences de l'équipe.
                    </p>


                    <div className=" w-full flex justify-center mt-5">
                        <img className="rounded" src={Css_panel} alt="Site cozette la conciergerie du bien-être"/>
                    </div>
                </MagicCard>
            </div>
        </div>
    );
}
