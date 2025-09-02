import { API_URL } from "../config"

export const fetchJogadores = async (equipaId) => {
  const res = await fetch(`${API_URL}/equipas/${equipaId}/jogadores`)
  if (!res.ok) {
    throw new Error("Erro ao carregar jogadores")
  }
  return await res.json()
}

export const criarJogadores = async (equipaId, jogadores) => {
  const res = await fetch(`${API_URL}/equipas/${equipaId}/jogadores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jogadores),
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt || "Erro ao criar jogadores")
  }
  return await res.json()
}

export const atualizarJogador = async (equipaId, jogadorId, jogador) => {
  const res = await fetch(`${API_URL}/equipas/${equipaId}/jogadores/${jogadorId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jogador),
  })
  if (!res.ok) throw new Error("Erro ao atualizar jogador")
  return await res.json()
}

export const apagarJogador = async (equipaId, jogadorId) => {
  const res = await fetch(`${API_URL}/equipas/${equipaId}/jogadores/${jogadorId}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Erro ao apagar jogador")
}
