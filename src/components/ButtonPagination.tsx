interface ButtonPaginationProps {
    value: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
}

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