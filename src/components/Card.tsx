import type { CardProps } from "../types/CardProps";

export default function Card({ id, tagLine, headerText, contentText, imageName, isReversed }: CardProps) {
    return (
        <div className={`flex items-center justify-center gap-30 w-2/3 h-48 mb-140 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-[60%] h-158 relative flex items-center justify-center">
                <p className="verybold opacity-15 text-[200px] top-0 left-0 absolute">{id}</p>
                <div className="w-[60%] h-2/3">
                    <p className="text-lg uppercase text-[#FBD784] verybold mt-2 mb-4"><span className="inline-block w-16 mr-4 border border-[#FBD784] mb-2"></span>{tagLine}</p>
                    <h1 className="text-5xl mb-4">{headerText}</h1>
                    <p className="mb-4">{contentText}</p>
                    <button className="text-[#FBD784] flex gap-2 cursor-pointer">read more <span className="text-xl">⭢</span></button>
                </div>
            </div>
            <div className="w-1/3 h-158 overflow-hidden">
                <img src={`./body/${imageName}`} className="h-full object-cover" />
            </div>
        </div>
    );
}