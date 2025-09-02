import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJogadores, criarJogadores } from "../../hooks/useJogador";
import { fetchEscaloes } from "../../hooks/useEscaloes";
import { fetchGrupos } from "../../hooks/useGrupos";
import { fetchEquipaById } from "../../hooks/useEquipas";
import { API_URL } from "../../config";

export default function AdminTeamsPlayer() {
  const { id } = useParams();
  const [jogadores, setJogadores] = useState([]);
  const [novos, setNovos] = useState([{ nome: "", numero: "" }]);

  const [escaloes, setEscaloes] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [escalaoId, setEscalaoId] = useState("");
  const [grupoId, setGrupoId] = useState("");
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [savingLink, setSavingLink] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoadingMeta(true);
      try {
        const [js, escs, grs, equipa] = await Promise.all([
          fetchJogadores(id),
          fetchEscaloes(),
          fetchGrupos(),
          fetchEquipaById(id),
        ]);

        setJogadores(js);
        setEscaloes(escs);
        setGrupos(grs);

        setEscalaoId(equipa?.escalao?.id != null ? String(equipa.escalao.id) : "");
        setGrupoId(equipa?.grupo?.id != null ? String(equipa.grupo.id) : "");
      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoadingMeta(false);
      }
    };
    load();
  }, [id]);

  async function guardarEscalao(nextId = escalaoId) {
    try {
      setSavingLink(true);
      const idNum = nextId ? Number(nextId) : null;
      const res = await fetch(`${API_URL}/equipas/${id}/escalao`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ escalaoId: idNum }),
      });
      if (!res.ok) throw new Error((await res.text()) || "Erro ao atualizar escalão");
    } catch (e) {
      alert(e.message);
    } finally {
      setSavingLink(false);
    }
  }
  async function removerEscalao() {
    setEscalaoId("");
    await guardarEscalao("");
  }

  async function guardarGrupo(nextId = grupoId) {
    try {
      setSavingLink(true);
      const idNum = nextId ? Number(nextId) : null;
      const res = await fetch(`${API_URL}/equipas/${id}/grupo`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grupoId: idNum }),
      });
      if (!res.ok) throw new Error((await res.text()) || "Erro ao atualizar grupo");
    } catch (e) {
      alert(e.message);
    } finally {
      setSavingLink(false);
    }
  }
  async function removerGrupo() {
    setGrupoId("");
    await guardarGrupo("");
  }

  function handleChangeNovo(idx, campo, valor) {
    setNovos((prev) => prev.map((obj, i) => (i === idx ? { ...obj, [campo]: valor } : obj)));
  }
  function addLinha() {
    setNovos((prev) => [...prev, { nome: "", numero: "" }]);
  }
  async function salvar() {
    try {
      const payload = novos
        .filter((j) => j.nome.trim())
        .map((j) => ({
          nome: j.nome.trim(),
          numero: j.numero === "" ? null : Number(j.numero),
        }));
      if (payload.length === 0) return;

      await criarJogadores(id, payload);
      const atualizados = await fetchJogadores(id);
      setJogadores(atualizados);
      setNovos([{ nome: "", numero: "" }]);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <section>
      <h2>Equipa {id} — Jogadores</h2>

      <div
        style={{
          display: "grid",
          gap: 12,
          marginBottom: 16,
          alignItems: "center",
          gridTemplateColumns: "1fr auto auto",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <label style={{ minWidth: 80 }}>Escalão:</label>
          <select
            value={escalaoId}
            onChange={(e) => setEscalaoId(e.target.value)}
            disabled={loadingMeta || savingLink}
          >
            <option value="">-- Sem escalão --</option>
            {escaloes.map((e) => (
              <option key={e.id} value={String(e.id)}>
                {e.nome}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => guardarEscalao()} disabled={loadingMeta || savingLink}>
          Guardar escalão
        </button>
        <button onClick={removerEscalao} disabled={loadingMeta || savingLink}>
          Remover escalão
        </button>

        {/* Grupo */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <label style={{ minWidth: 80 }}>Grupo:</label>
          <select
            value={grupoId}
            onChange={(e) => setGrupoId(e.target.value)}
            disabled={loadingMeta || savingLink}
          >
            <option value="">-- Sem grupo --</option>
            {grupos.map((g) => (
              <option key={g.id} value={String(g.id)}>
                {g.nome}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => guardarGrupo()} disabled={loadingMeta || savingLink}>
          Guardar grupo
        </button>
        <button onClick={removerGrupo} disabled={loadingMeta || savingLink}>
          Remover grupo
        </button>
      </div>

      <hr style={{ margin: "12px 0" }} />

      <button onClick={salvar}>Salvar novos jogadores</button>

      <h3>Existentes</h3>
      <ul>
        {jogadores.map((j) => (
          <li key={j.id}>
            {j.nome} ({j.numero ?? "sem número"})
          </li>
        ))}
      </ul>

      <h3>Novos</h3>
      {novos.map((j, i) => (
        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <input
            type="text"
            placeholder="Nome"
            value={j.nome}
            onChange={(e) => handleChangeNovo(i, "nome", e.target.value)}
          />
          <input
            type="number"
            placeholder="Número (opcional)"
            value={j.numero}
            onChange={(e) => handleChangeNovo(i, "numero", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addLinha}>+ Jogador</button>
    </section>
  );
}
