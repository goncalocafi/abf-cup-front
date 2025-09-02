import { API_URL } from "../config";

export const fetchGrupos = async () => {
  const res = await fetch(`${API_URL}/grupos`);

  if (!res.ok) {
    throw new Error("Erro ao carregar grupos");
  }

  const data = await res.json();
  return data;
};

export const criarGrupo = async (nome) => {
  const res = await fetch(`${API_URL}/grupos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao criar grupo");
  }

  return await res.json();
};

export const atualizarGrupo = async (id, nome) => {
  const res = await fetch(`${API_URL}/grupos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao atualizar grupo");
  }

  return await res.json();
};

export const apagarGrupo = async (id) => {
  const res = await fetch(`${API_URL}/grupos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Erro ao apagar grupo");
  }
};
