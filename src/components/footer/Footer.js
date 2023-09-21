import"./style.css";

import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return ( 
           <footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <ul class="social">
                <li class="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                <li class="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
            </ul>
            <div class="copyright">
                <p>NEW ERA</p>
            </div>
        </div>
    </div>
</footer>
);
}
 
export default Footer;