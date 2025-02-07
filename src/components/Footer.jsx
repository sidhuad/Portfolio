import { FaGithub,FaTwitter,FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer(){
    return(
        <footer className="footer container p-5">
            <ul className="d-flex justify-content-center">
                <li className="nav-item p-2 mx-3"><a className="nav-link" href="https://github.com/sidhuad"><FaGithub size={50}/></a></li>
                <li className="nav-item p-2 mx-3"><a className="nav-link" href=""><FaTwitter size={50}/></a></li>
                <li className="nav-item p-2 mx-3"><a className="nav-link" href=""><FaLinkedin size={50}/></a></li>
            </ul>
        </footer>        
    )
}