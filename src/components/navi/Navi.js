import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import "./style.css";

const Navi = () => {
    return (  
 <nav className="nav">
    <div className="container">
        <div class="nav-row">
            <a href="./index.html" class="logo"><strong>Freelancer</strong> portfolio</a>

            <button class="dark-mode-btn">
                <img src={sun} alt="Light mode" class="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" class="dark-mode-btn__icon" />
            </button>

            <ul class="nav-list">
                <li class="nav-list__item"><a href="./index.html" class="nav-list__link nav-list__link--active">Home</a></li>
                <li class="nav-list__item"><a href="./projects.html" class="nav-list__link">Projects</a></li>
                <li class="nav-list__item"><a href="./contacts.html" class="nav-list__link">Contacts</a></li>
            </ul>
        </div>
    </div>
</nav>
 );
}
 
export default Navi;