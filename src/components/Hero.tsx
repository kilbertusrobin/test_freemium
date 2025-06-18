export default function Hero() {
    return (
        <div className="w-full relative min-h-screen">
            <img
                src="/hero/cloud.png"
                alt="Nuages en arrière-plan"
                className="absolute inset-0 w-full object-cover z-10"
            />

            <div 
                className="relative h-180 w-full text-white z-10"
                style={{ 
                    background: 'linear-gradient(to top, rgba(11, 29, 38, 0), rgba(11, 29, 38, 0.6))'
                }}>
                <div className="absolute w-2/5 h-64 flex flex-col justify-around left-1/2 top-36 transform -translate-x-1/2">
                    <p className="text-[#FBD784] font-chronicle uppercase flex items-center">
                        <span className="inline-block w-12 mr-4 border-b border-[#FBD784] mb-1"></span>
                        A Hiking Guide
                    </p>
                    <h1 className="text-7xl font-chronicle">Be prepared for the Mountains and beyond!</h1>
                    <p>scroll down <span className="text-xl">↓</span></p>
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
                className="absolute w-full h-auto object-cover z-30"
                style={{ top: '80%' }}
            />
            <div 
                className="absolute h-80 w-full z-35"
                style={{ 
                    top: '150%',
                    background: 'linear-gradient(to bottom, rgba(11, 29, 38, 0) 0%, #0b1d26 80%)'
                }}>
            </div>

        </div>
    );
}