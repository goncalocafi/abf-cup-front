import { NavLink } from "react-router-dom"
import { fetchEscaloes } from "../../hooks/useEscaloes"
import { useEffect, useState } from "react"
import { fetchEquipa } from "../../hooks/useEquipas"

export default function AdminTeams() {
  const [escaloes, setEscaloes] = useState([]);
  const [equipas, setEquipas] = useState([]);
  const [escalaoSelecionado, setEscalaoSelecionado] = useState("")

  useEffect(() => {
    const carregarDados = async () => {
      const escaloesData = await fetchEscaloes();
      const equipasData = await fetchEquipa();
      setEscaloes(escaloesData);
      setEquipas(equipasData);
    };
    carregarDados();
  }, []);

  const URL_IMG = import.meta.env.VITE_URL_BACKEND;

  const equipasFiltradas = escalaoSelecionado
    ? equipas.filter((equipa) => (equipa.escalao?.id ?? null) === Number(escalaoSelecionado))
    : equipas;

  const teamsDisplay = equipasFiltradas.map((equipa) => (
            <NavLink className={"equipa-card-link"} to={`${equipa.id}`}>
              <div className="equipa-card" key={equipa.id}>
                {equipa.logoUrl && (
                  <img
                    src={`${URL_IMG}${equipa.logoUrl}`}
                    alt={equipa.nome}
                  />
                )}
                <div className="teams-added-info">
                  <h3>{equipa.nome}</h3>
                  {equipa.escalao? <p>{equipa.escalao?.nome}</p> : <p>Escalão não definido</p>}
                </div>
              </div>
            </NavLink>
          ))
          
    const escaloesDisplay = escaloes.map((escalao) => (
      <option key={escalao.id} value={escalao.id}>{escalao.nome}</option>
    ))

  return (
    <section className="admin-teams">
        <div className="organize-btns">
            <select
                value={escalaoSelecionado}
                onChange={(e) => setEscalaoSelecionado(e.target.value)}
                required
            >
                <option value="">Todos os escalões</option>
                {escaloesDisplay}
            </select>
            <NavLink to={`addTeam`} className="add-team-btn">Adicionar Equipa</NavLink>
        </div>

      <div className="teams-added">
        {equipas.length === 0 ? (
          <p>Não há equipas adicionadas ainda.</p>
        ) : (
          teamsDisplay
        )}
      </div>
    </section>
  );
}