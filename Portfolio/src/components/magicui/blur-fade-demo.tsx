import BlurFade from "@/components/magicui/blur-fade";
import React from "react";

const images = [
    {
        url: 'https://picsum.photos/seed/1/800/600',
        link: 'https://github.com/Theo-06130/Portfolio_B3'  // Remplace par ton dépôt GitHub
    },
    {
        url: 'https://picsum.photos/seed/2/600/800',
        link: 'https://github.com/Theo-06130'
    },
    {
        url: 'https://picsum.photos/seed/3/800/600',
        link: 'https://github.com/Theo-06130/spoonacular'
    },
    // Ajoute d'autres objets comme nécessaire
];

export function BlurFadeDemo() {
    return (
        <section id="photos" className="h-screen mt-16 overflow-auto">
            <div className="columns-2 gap-4 sm:columns-3">
                {images.map(({ url, link }, idx) => (
                    <a href={link} key={url} target="_blank" rel="noopener noreferrer">
                        <BlurFade delay={0.25 + idx * 0.05} inView>
                            <img
                                className="mb-4 w-full h-auto max-h-[20vh] rounded-lg object-contain"
                                src={url}
                                alt={`Random stock image ${idx + 1}`}
                            />
                        </BlurFade>
                    </a>
                ))}
            </div>
        </section>
    );
}
