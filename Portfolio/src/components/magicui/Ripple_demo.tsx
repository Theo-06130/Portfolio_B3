import Ripple from "@/components/magicui/ripple";
import React from "react";

export function RippleDemo() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <a className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black transition duration-500 hover:text-white" href="mailto:theo.cerkownik@ynov.com" target="_blank">
                Me contacter
            </a>
            <Ripple />
        </div>
    );
}
