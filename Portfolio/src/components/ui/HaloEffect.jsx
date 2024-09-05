import React, { useState, useEffect } from 'react';

const HaloEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [haloPosition, setHaloPosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Seuil pour écran de bureau

    useEffect(() => {
        // Fonction pour mettre à jour l'état de l'écran
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024); // Mettre à jour la condition pour les écrans de bureau
        };

        // Écouter les changements de taille de la fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur lors du démontage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            const handleMouseMove = (e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [isDesktop]);

    useEffect(() => {
        if (isDesktop) {
            const updatePosition = () => {
                setHaloPosition((prevPosition) => ({
                    x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.1,
                    y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.1,
                }));
            };

            const animationFrame = requestAnimationFrame(updatePosition);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [mousePosition, haloPosition, isDesktop]);

    if (!isDesktop) return null; // Ne rien rendre sur les appareils mobiles

    return (
        <div
            className="absolute pointer-events-none rounded-full
                 transform -translate-x-1/2 -translate-y-1/2
                 bg-gradient-to-r from-indigo-900 via-purple-800 to-transparent
                 w-36 h-36 opacity-50 blur-lg"
            style={{
                left: `${haloPosition.x}px`,
                top: `${haloPosition.y}px`,
            }}
        />
    );
};

export default HaloEffect;
