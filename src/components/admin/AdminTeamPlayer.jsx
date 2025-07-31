import { useParams } from "react-router-dom";

export default function AdminTeamsPlayer() {
    const id = useParams().id
    
    return (
        <section className="admin-players">
            {id}
        </section>
    )
}