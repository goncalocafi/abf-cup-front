import React from "react";
import slbImg from "../assets/slb.png";
import sportingImg from "../assets/sporting.png";
import portoImg from "../assets/porto.png";
import imortalImg from "../assets/imortal.png";
import { NavLink } from "react-router-dom";

export default function Teams() {
    const teams = [
        { id: 1, nome: "Benfica", grupo: "A", img: slbImg },
        { id: 2, nome: "Sporting", grupo: "A", img: sportingImg },
        { id: 3, nome: "Porto", grupo: "B", img: portoImg },
        { id: 4, nome: "Imortal", grupo: "B", img: imortalImg }
    ];

    return (
        <section className="tournament-teams">
            <h2>Equipas Participantes</h2>
                {teams.map((equipa) => (
                    <NavLink to={`${equipa.id}`}>
                        <div className="teams-list" key={equipa.id}>
                            <img src={equipa.img} />
                            <p>{equipa.nome} - Grupo {equipa.grupo}</p>
                        </div>
                    </ NavLink>
                ))}
        </section>
    );
}
