import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="albufeira cup logo"/>
                <span>Albufeira Cup</span>
            </div>


            <ul className="nav-links">
                <li><NavLink to="/admin" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Equipas</NavLink></li>
                <li><NavLink to="/teams" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Jogos</NavLink></li>
                <li><NavLink to="/standings" className={({isActive}) => (isActive? "nav-link active" : "nav-link")}>Grupos</NavLink></li>
            </ul>
        </header>
    )
}