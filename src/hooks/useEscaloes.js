import { API_URL } from "../config";

export const fetchEscaloes = async () => {
  const res = await fetch(`${API_URL}/escaloes`);
  if (!res.ok) throw new Error("Erro ao carregar escaloes");
  return res.json();
};

export const criarEscalao = async (nome) => {
  const res = await fetch(`${API_URL}/escaloes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao criar escalão");
  }
  return res.json();
};

export const atualizarEscalao = async (id, nome) => {
  const res = await fetch(`${API_URL}/escaloes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao atualizar escalão");
  }
  return res.json();
};

export const apagarEscalao = async (id) => {
  const res = await fetch(`${API_URL}/escaloes/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao apagar escalão");
  }
};
