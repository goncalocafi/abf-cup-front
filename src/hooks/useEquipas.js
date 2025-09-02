import { API_URL } from "../config"

export const fetchEquipa = async () => {
    const res = await fetch(`${API_URL}/equipas`)

    if (!res.ok) {
        throw new Error('Erro ao carregar equipas')
    }

    const data = await res.json()
    return data
}

export const fetchEquipaById = async (id) => {
  const res = await fetch(`${API_URL}/equipas/${id}`);
  if (!res.ok) throw new Error("Erro ao carregar equipa");
  return await res.json();
};

export const criarEquipa = async ({ nome, logoUrl, escalaoId, grupoId }) => {
  const res = await fetch(`${API_URL}/equipas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, logoUrl, escalaoId, grupoId }),
  })

  if (!res.ok) throw new Error("Erro ao criar equipa")
  return await res.json()
}

export const uploadLogoEquipa = async (equipaId, file) => {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch(`${API_URL}/equipas/${equipaId}/upload-logo`, {
    method: "POST",
    body: formData,
  })

  if (!res.ok) throw new Error("Erro ao enviar imagem")
}