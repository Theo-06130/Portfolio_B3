import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import React, { useState, useEffect } from "react";

export function MagicCardDoca() {
    const { theme } = useTheme();
    const [currentCard, setCurrentCard] = useState(0);
    const [timer, setTimer] = useState(10); // 10 seconds timer

    const blogs = [
        {
            title: "Mon stage chez Docaposte",
            content: "J'ai découvert le développement Java, la partie SOC de la sécurité, et la maintenance/infra. Une expérience enrichissante dans un environnement professionnel.",
        },
        {
            title: "Cozette - Conciergerie du bien-être",
            content: "J'ai contribué à la création d'un studio de communication pour aider les entreprises à développer leur image de marque.",
        },
        {
            title: "Mon projet LOOMING",
            content: "Une plateforme de freelance avec un forum collaboratif, intégrant des éléments de gamification pour engager les utilisateurs.",
        },
        {
            title: "Mon alternance chez CFM Indosuez",
            content: "Je suis assistant en cybersécurité, où je travaille sur des projets qui renforcent la sécurité des systèmes d'information.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % blogs.length);
            setTimer(10); // Reset timer
        }, 10000); // Change every 10 seconds

        const timerInterval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000); // Decrement timer every second

        return () => {
            clearInterval(interval);
            clearInterval(timerInterval);
        }; // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col justify-around w-full gap-4 h-screen relative">
            {/* Timer Circle */}
            <svg className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10" width="100" height="100">
                <circle cx="50" cy="50" r="45" stroke="#7CD7E9" strokeWidth="5" fill="none" />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#ffffff"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={283} // 2 * π * 45
                    strokeDashoffset={(timer / 10) * 283} // Animate the stroke based on remaining time
                    style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
            </svg>

            {/* Version Desktop */}
            <div className="hidden md:flex md:flex-col w-screen h-full justify-around">
                <div className="flex w-full h-1/3 justify-around">
                    {blogs.slice(0, 2).map((blog, index) => (
                        <MagicCard
                            key={index}
                            className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                            gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                        >
                            <h3 className="text-xl text-center">{blog.title}</h3>
                            <p className="text-sm text-center max-h-20 overflow-hidden">{blog.content}</p>
                        </MagicCard>
                    ))}
                </div>
                <div className="flex w-full h-1/3 justify-around">
                    {blogs.slice(2, 4).map((blog, index) => (
                        <MagicCard
                            key={index + 2}
                            className="cursor-pointer w-1/3 bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                            gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                        >
                            <h3 className="text-xl text-center">{blog.title}</h3>
                            <p className="text-sm text-center max-h-20 overflow-hidden">{blog.content}</p>
                        </MagicCard>
                    ))}
                </div>
            </div>

            {/* Version Mobile */}
            <div className="flex md:hidden w-screen h-full items-center justify-center">
                <MagicCard
                    className="cursor-pointer bg-gray-950 text-white flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-3/4"
                    gradientColor={theme === "dark" ? "rgba(124,215,233,0.74)" : "rgba(9,94,220,0.7)"}
                >
                    <h3 className="text-xl text-center">{blogs[currentCard].title}</h3>
                    <p className="text-sm text-center max-h-20 overflow-hidden">{blogs[currentCard].content}</p>
                </MagicCard>
            </div>
        </div>
    );
}
