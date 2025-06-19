import Card from "./Card";
import contents from "./../datas/content.json"
import type { CardProps } from "../types/CardProps";

/* Afin de gérer les différents textes et les images du body, et étant donné que sa mise en forme
se répète, j'ai décidé de faire un composant que je fais répeter (3 fois en l'occurence).
C'est peut-être un petit peu overkill dans ce contexte (au vu du peu de contenu), mais cela permet de montrer comment je
travaille en composants, de passer des props, etc... */
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
