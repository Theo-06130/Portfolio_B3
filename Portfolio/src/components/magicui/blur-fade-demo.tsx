import BlurFade from "@/components/magicui/blur-fade";
import React from "react";
import biblivres from '../../assets/biblivres.png'
import accessibilite from '../../assets/bouche_glacee.png'
import spoonacular from '../../assets/spoonacular.png'


const images = [
    {
        src: biblivres, // Chemin vers l'image locale
        link: 'https://biblivres.sqwado.com/home',  // Lien associé
    },
    {
        src: accessibilite,
        link: 'https://theo-06130.github.io/Site_accessibilite/',
    },
    {
        src: spoonacular,
        link: 'https://theo-06130.github.io/spoonacular/',
    },
    // Ajoute d'autres objets si nécessaire
];

export function BlurFadeDemo() {
    return (
        <section id="photos" className="h-screen mt-16 overflow-auto">
            <div className="columns-2 gap-4 sm:columns-3">
                {images.map(({ src, link }, idx) => (
                    <a href={link} key={src} target="_blank" rel="noopener noreferrer">
                        <BlurFade delay={0.25 + idx * 0.05} inView>
                            <img
                                className="mb-4 w-full h-auto max-h-[20vh] rounded-lg object-contain"
                                src={src}  // Utilisez src ici
                                alt={`Image ${idx + 1}`}
                            />
                        </BlurFade>
                    </a>
                ))}
            </div>
        </section>
    );
}
