// import png from "./../img/projects/png1.png"
// import png from "./../img/projects/png2.png"


const Projects = () => {
    return ( 
    <main className="section">
    <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
            <li className="project">
                <a href="./project-page.html">
                    <img src="png" alt="Project img" className="project__img" />
                    <h3 className="project__title">Typing game</h3>
                </a>
            </li>
            <li className="project">
                <a href="./project-page.html">
                    <img src="png" alt="Project img" className="project__img" />
                    <h3 className="project__title">Typing game</h3>
                </a>
            </li>

        </ul>
    </div>
</main> 
);
}
 
export default Projects;