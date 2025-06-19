export default function Hero() {
/* Comme je l'ai précisé auparavant, j'ai appliqué un filtre gradient vers le bas sur le header, car c'est ce que j'ai remarqué sur
le figma. De plus, un autre gradient est existant à la fin de la hero banner pour faire la transition avec le background du body. */
    const scrollToFirstSection = () => {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollableHeight = documentHeight - viewportHeight;
        
        const targetScrollY = scrollableHeight * 0.35;
        window.scrollTo({ 
            top: targetScrollY, 
            behavior: 'smooth' 
        });
    };

    return (
        <>
            <img
                src="/hero/cloud.png"
                alt="Nuages en arrière-plan"
                className="absolute inset-0 w-full object-cover z-10"
            />

            <div 
                className="relative h-180 w-full text-white z-30"
                style={{ 
                    background: 'linear-gradient(to top, rgba(11, 29, 38, 0), rgba(11, 29, 38, 0.6))'
                }}
            >
                <div className="absolute w-2/5 h-64 flex flex-col justify-around left-1/2 top-36 transform -translate-x-1/2">
                    <p className="text-[#FBD784] font-chronicle uppercase flex items-center">
                        <span className="inline-block w-12 mr-4 border-b border-[#FBD784] mb-1"></span>
                        A Hiking Guide
                    </p>
                    <h1 className="text-7xl font-chronicle">Be prepared for the Mountains and beyond!</h1>
                    <button 
                        className="cursor-pointer hover:text-[#FBD784] transition-colors duration-300 flex items-center gap-2 bg-transparent border-none text-white text-base font-inherit p-0 outline-none relative z-40"
                        onClick={scrollToFirstSection}
                    >
                        scroll down 
                        <span className="text-xl animate-bounce">↓</span> 
                    </button>
                </div>
            </div>
            
            <img
                src="/hero/moutains.png"
                alt="Montagnes enneigées"
                className="absolute w-full h-auto object-cover z-20"
                style={{ top: '30%' }}
            />
            <img
                src="/hero/hill.png"
                alt="Collines vertes"
                className="absolute w-full h-auto object-cover z-25"
                style={{ top: '80%' }}
            />
            <div 
                className="absolute h-80 w-full z-35"
                style={{ 
                    top: '150%',
                    background: 'linear-gradient(to bottom, transparent 0%, #0b1d26 80%)'
                }}>
            </div>
        </>
    );
}