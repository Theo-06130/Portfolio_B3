"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import React from "react";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Naissance",
        description: "Début de l'aventure",
        time: "16/02/2004",
        icon: "👶",
        color: "#00C9A7",
    },
    {
        name: "Stage Observation 3ème",
        description: "Chez Docaposte",
        time: "2018",
        icon: "🔍",
        color: "#FFB800",
    },
    {
        name: "Bac général",
        description: "Spé Physique-chimie/NSI",
        time: "2022",
        icon: "👨‍🎓",
        color: "#10c7e6",
    },
    {
        name: "1ère année informatique",
        description: "Informatique général (Dev, Cyber, Infra...)",
        time: "2022/2023",
        icon: "💻",
        color: "#edbf8e",
    },
    {
        name: "Stage 2ème année",
        description: "Création et déploiement site internet",
        time: "2023/2024",
        icon: "🕸️",
        color: "#020937",
    },
    {
        name: "3ème année informatique",
        description: "Spécialité cybersécurité",
        time: "2023/2024",
        icon: "🔒",
        color: "rgba(152,2,2,0.92)",
    },    {
        name: "Alternance Cybersécurité",
        description: "Assistant Cybersécurité CFM Indosuez",
        time: "2024/2027",
        icon: "🏢",
        color: "rgba(15,199,223,0.92)",
    },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg p-2">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-200">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-left dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({
                                     className,
                                 }: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[700px] w-full flex-col overflow-hidden rounded-lg border-none bg-background",
                className,
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
