interface ButtonPaginationProps {
    value: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}

/* Etant donné que le bouton se répète 4 fois, j'ai décidé d'en faire un composant simple */
export default function ButtonPagination({ value, isActive, onClick, className = "" }: ButtonPaginationProps) {
    return (
        <button 
            onClick={onClick}
            className={`relative z-10 text-lg font-black transition-all duration-300 ${
                isActive ? 'text-white scale-110' : 'text-gray-400 hover:text-gray-200'
            } ${className}`}
        >
            {value}
        </button>
    );
}