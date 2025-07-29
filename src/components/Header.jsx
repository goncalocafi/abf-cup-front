import logo from "../assets/logo.png"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="align">
                    <img src={logo} alt="albufeira cup logo"/>
                    <span>Albufeira Cup</span>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#inicio">Resultados/Calendário</a></li>
                    <li><a href="#equipas">Equipas</a></li>
                    <li><a href="#resultados">Classificação</a></li>
                    <li><a href="#contactos">Contactos</a></li>
                </ul>

                <button
                className="menu-toggle"
                onClick={() => setMenuOpen((prev) => !prev)}
                >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </nav>
        </header>
    )
}