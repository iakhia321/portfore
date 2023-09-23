import "./style.css";
import foto1 from "./../../img/projects/01.foto.png";

const Project = ({title,img}) => {
    return (  
    <li className="project">
    <a href="./project-page.html">
        <img src={foto1} alt="Project img" className="project__img" />
        <h3 className="project__title">Typing game</h3>
    </a>
</li>
 );
}
 
export default Project;