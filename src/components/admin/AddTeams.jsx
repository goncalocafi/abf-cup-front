import React, { useState, useEffect, useRef } from "react"
import { criarEquipa, uploadLogoEquipa } from "../../hooks/useEquipas"
import { fetchEscaloes } from "../../hooks/useEscaloes"
import { fetchGrupos, criarGrupo } from "../../hooks/useGrupos";
import { criarEscalao } from "../../hooks/useEscaloes";

export default function AddTeams() {
  const [nome, setNome] = useState("")
  const [logoFile, setLogoFile] = useState(null)
  const [escaloes, setEscaloes] = useState([])
  const [escalaoId, setEscalaoId] = useState("")
  const fileRef = useRef(null)
  const [grupos, setGrupos] = useState([]);
  const [grupoId, setGrupoId] = useState("");

  useEffect(() => {
    const escaloesFetch = async () => {
        const data = await fetchEscaloes()
        setEscaloes(data)
    }
    escaloesFetch()
  }, [])

  useEffect(() => {
    (async () => {
      const [escs, grs] = await Promise.all([fetchEscaloes(), fetchGrupos()]);
      setEscaloes(escs);
      setGrupos(grs);
    })();
  }, []);

  async function handleNovoEscalao() {
    const nome = prompt("Nome do escalão (ex.: Sub-14):");
    if (!nome) return;
    await criarEscalao(nome.trim());
    const escs = await fetchEscaloes();
    setEscaloes(escs);
    const recem = escs.find(e => e.nome.toLowerCase() === nome.trim().toLowerCase());
    if (recem) setEscalaoId(String(recem.id));
  }

  async function handleNovoGrupo() {
    const nome = prompt("Nome do grupo (ex.: Grupo A):");
    if (!nome) return;
    await criarGrupo(nome.trim());
    const grs = await fetchGrupos();
    setGrupos(grs);
    const recem = grs.find(g => g.nome.toLowerCase() === nome.trim().toLowerCase());
    if (recem) setGrupoId(String(recem.id));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const equipaCriada = await criarEquipa({
          nome,
          escalaoId: escalaoId ? Number(escalaoId) : null,
          grupoId: grupoId ? Number(grupoId) : null,
          logoUrl: "",
        })  

        if (logoFile) {
          await uploadLogoEquipa(equipaCriada.id, logoFile)
        }   

        setNome("")
        setLogoFile(null)
        setEscalaoId("")
        fileRef.current.value = null    

    }   catch (error) {
      alert(error.message)
    }
  }

  const escaloesDisplay = escaloes.map((escalao) => (
    <option key={escalao.id} value={escalao.id}>{escalao.nome}</option>
  ))

  const gruposDisplay = grupos.map((grupo) => (
      <option key={grupo.id} value={grupo.id}>{grupo.nome}</option>
    ))

  return (
    <section className="add-team">
        <form onSubmit={handleSubmit}>
        <h2>Nova Equipa</h2>

        <input
            className="team-name"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome da equipa"
            required
        />

        <label htmlFor="imagem">Escolhe uma imagem:</label>
        <input
            className="img-input"
            type="file"
            id="imagem"
            accept="image/*"
            ref={fileRef}
            onChange={(e) => setLogoFile(e.target.files[0])}
        />

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select
            value={escalaoId}
            onChange={(e) => setEscalaoId(e.target.value)}
          >
            <option value="">-- Escolhe um escalão --</option>
            {escaloesDisplay}
          </select>
          <button type="button" onClick={handleNovoEscalao}>+ Novo</button>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select
            value={grupoId}
            onChange={(e) => setGrupoId(e.target.value)}
          >
            <option value="">-- Escolhe um grupo --</option>
            {gruposDisplay}
          </select>
          <button type="button" onClick={handleNovoGrupo}>+ Novo</button>
        </div>

        <button type="submit">Criar equipa</button>
        </form>
    </section>
  )
}
