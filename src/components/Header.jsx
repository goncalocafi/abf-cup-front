import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="albufeira cup logo"/>
                <span>Albufeira Cup</span>
            </div>


            <ul className="nav-links">
                <li><NavLink to="/" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Resultados/Calendário</NavLink></li>
                <li><NavLink to="/teams" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Equipas</NavLink></li>
                <li><NavLink to="/standings" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Classificação</NavLink></li>
                <li><a href="#contactos">Contactos</a></li>
            </ul>
        </header>

    )
}