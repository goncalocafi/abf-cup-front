import { NavLink } from "react-router-dom"

export default function AdminTeams() {
    const team = {
            name: "Benfica",
            id: 1
        }
    

    return (
        <section className="admin-teams">
            <button className="add-team">Adicionar Equipa</button>
            <div className="teams-added"> 
                <NavLink to={`${team.id}`}>{team.name}</NavLink> 
            </div>
        </section>
    )
}