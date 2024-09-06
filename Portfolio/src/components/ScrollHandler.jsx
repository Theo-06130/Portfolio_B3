import React, { useEffect } from 'react';

const ScrollHandler = ({ children }) => {
    const handleScroll = (e) => {
        e.preventDefault();

        const zone1 = document.getElementById('zone1');
        const zone2 = document.getElementById('zone2');
        const zone3 = document.getElementById('zone3');

        const zone1Bounding = zone1.getBoundingClientRect();
        const zone2Bounding = zone2.getBoundingClientRect();
        const zone3Bounding = zone3.getBoundingClientRect();

        // Logs pour débogage
        console.log('zone1Bounding:', zone1Bounding);
        console.log('zone2Bounding:', zone2Bounding);
        console.log('zone3Bounding:', zone3Bounding);

        // Scroll vers la Zone 2 (depuis Zone 1)
        if (e.deltaY > 0 && zone1Bounding.top >= 0 && zone1Bounding.top < window.innerHeight) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 3 (depuis Zone 2)
        else if (e.deltaY > 0 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone3.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 2 (depuis Zone 3)
        else if (e.deltaY < 0 && zone3Bounding.left >= 0 && zone3Bounding.left < window.innerWidth) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Scroll vers la Zone 1 (depuis Zone 2)
        else if (e.deltaY < 0 && zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone1.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClick = (e) => {
        const zone1 = document.getElementById('zone1');
        const zone2 = document.getElementById('zone2');
        const zone3 = document.getElementById('zone3');

        const zone1Bounding = zone1.getBoundingClientRect();
        const zone2Bounding = zone2.getBoundingClientRect();
        const zone3Bounding = zone3.getBoundingClientRect();

        // Logs pour débogage
        console.log('zone1Bounding:', zone1Bounding);
        console.log('zone2Bounding:', zone2Bounding);
        console.log('zone3Bounding:', zone3Bounding);

        // Si on est dans la Zone 1, aller à la Zone 2
        if (zone1Bounding.top >= 0 && zone1Bounding.top < window.innerHeight) {
            zone2.scrollIntoView({ behavior: 'smooth' });
        }
        // Si on est dans la Zone 2, aller à la Zone 3
        else if (zone2Bounding.top >= 0 && zone2Bounding.top < window.innerHeight) {
            zone3.scrollIntoView({ behavior: 'smooth' });
        }
        // Si on est dans la Zone 3, retourner à la Zone 1
        else if (zone3Bounding.left >= 0 && zone3Bounding.left < window.innerWidth) {
            zone1.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Ajout du gestionnaire de touche et de molette pour desktop
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('click', handleClick);

        // Nettoyage des gestionnaires lors du démontage du composant
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div
            onClick={handleClick} // Gestionnaire de clic pour mobile/desktop
            className="h-screen overflow-hidden relative"
        >
            {children}
        </div>
    );
};

export default ScrollHandler;
