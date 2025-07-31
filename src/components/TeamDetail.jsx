import { useParams } from "react-router-dom"

export default function TeamDetail(){

    const params = useParams()
    console.log(params.id)

    const teams = [
        { id: 1, nome: "Benfica", grupo: "A", imgUrl: "/assets/slb.png" },
        { id: 2, nome: "Sporting", grupo: "A", imgUrl: "/assets/sporting.png" },
        { id: 3, nome: "Porto", grupo: "B", imgUrl: "/assets/porto.png" },
        { id: 4, nome: "Imortal", grupo: "B", imgUrl: "/assets/imortal.png" }
    ];

    const obj = teams.filter(team => team.id == params.id)
    
    return (
        <section className="team-id">
            {obj[0].nome}
        </section>
    )
}