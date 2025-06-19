import Card from "./Card";
import contents from "./../datas/content.json"
import type { CardProps } from "../types/CardProps";

export default function Body() {
  return (
    <div className="flex flex-col items-center">
      {(contents as CardProps[]).map(content => (
        <div id={`card-${content.id}`} key={content.id} className="flex items-center justify-center">
          <Card {...content} />
        </div>
      ))}
    </div>
  );
}
