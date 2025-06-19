import Card from "./Card";
import contents from "./../datas/content.json"
import type { CardProps } from "../types/CardProps";

export default function Body() {
  return (
    <div className="flex flex-col items-center">
      {(contents as CardProps[]).map(content => (
        <Card
          key={content.id}
          {...content}
        />
      ))}
    </div>
  );
}
