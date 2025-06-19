import { useState, useEffect } from "react";
import ButtonPagination from "./ButtonPagination";

export default function Header() {
    type Pagination = 'start' | '01' | '02' | '03';
    const [hasScrolled, setHasScrolled] = useState(false);
    const [pagination, setPagination] = useState<Pagination>('start');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setHasScrolled(scrollY > 50);

            const documentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const scrollableHeight = documentHeight - viewportHeight;
            const scrollPercentage = scrollY / scrollableHeight;
            
            if (scrollPercentage <= 0.35) {
                setPagination('start');
            } else if (scrollPercentage <= 0.60) {
                setPagination('01');
            } else if (scrollPercentage <= 0.85) {
                setPagination('02');
            } else {
                setPagination('03');
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const scrollToSection = (section: Pagination) => {
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollableHeight = documentHeight - viewportHeight;
        
        let targetPercentage = 0;
        
        switch (section) {
            case 'start':
                targetPercentage = 0;
                break;
            case '01':
                targetPercentage = 0.35;
                break;
            case '02':
                targetPercentage = 0.60;
                break;
            case '03':
                targetPercentage = 0.85;
                break;
        }
        
        const targetScrollY = scrollableHeight * targetPercentage;
        window.scrollTo({ 
            top: targetScrollY, 
            behavior: 'smooth' 
        });
    };

    const getBarPosition = () => {
        switch (pagination) {
            case 'start': return 'top-[00%]';
            case '01': return 'top-[28%]';
            case '02': return 'top-[55%]';
            case '03': return 'top-[83%]';
            default: return 'top-[00%]';
        }
    };

    return (
        <div className="w-full h-screen z-100 fixed text-white">
            <div className="absolute left-0 w-40 h-4/5 flex flex-col items-center justify-center gap-6">
                <p className="transform rotate-90 origin-left -translate-y-14 translate-x-9">Follow us</p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 0 0 1.84-2.31 8.22 8.22 0 0 1-2.6 1 4.13 4.13 0 0 0-7.06 3.76A11.71 11.71 0 0 1 3.1 4.89a4.13 4.13 0 0 0 1.28 5.51 4.07 4.07 0 0 1-1.87-.52v.05a4.13 4.13 0 0 0 3.31 4.05 4.15 4.15 0 0 1-1.85.07 4.14 4.14 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 19.54a11.7 11.7 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.35 8.35 0 0 0 24 5.5a8.19 8.19 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27z" />
                    </svg>
                </a>
            </div>

            <div className="absolute right-0 w-40 h-4/5 flex items-center justify-center">
                <div className="relative flex flex-col items-center gap-8">
                    <div className="absolute left-14 transform -translate-x-1/2 w-px h-57 bg-gray-400 opacity-30"></div>
                    
                    <div className={`absolute left-14 transform -translate-x-1/2 w-px h-12 bg-white transition-all duration-500 ease-in-out ${getBarPosition()}`}></div>
                    
                    <ButtonPagination
                        value="Start"
                        isActive={pagination === 'start'}
                        onClick={() => scrollToSection('start')}
                        className="mt-2"
                    />
                    
                    <ButtonPagination
                        value="01"
                        isActive={pagination === '01'}
                        onClick={() => scrollToSection('01')}
                    />
                    
                    <ButtonPagination
                        value="02"
                        isActive={pagination === '02'}
                        onClick={() => scrollToSection('02')}
                    />

                    <ButtonPagination
                        value="03"
                        isActive={pagination === '03'}
                        onClick={() => scrollToSection('03')}
                    />
                </div>
            </div>

            <div
                className="w-full h-28 flex items-center justify-between transition-colors duration-500"
                style={{
                    backgroundColor: hasScrolled ? '#0b1d26' : 'transparent'
                }}
            >
                <div className="w-52">
                    <h1 className="text-3xl text-center cursor-pointer">MNTN</h1>
                </div>
                <div className="w-80 flex items-center justify-around font-black">
                    <p className="cursor-pointer">Equipement</p>
                    <p className="cursor-pointer">About Us</p>
                    <p className="cursor-pointer">Blog</p>
                </div>
                <div className="w-52">
                    <p className="text-center flex items-center justify-center gap-2 cursor-pointer">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                            </svg>
                        </span>
                        Account
                    </p>
                </div>
            </div>
        </div>
    );
}