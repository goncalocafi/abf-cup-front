import { API_URL } from "../config"

export const fetchEquipa = async () => {
    const res = await fetch(`${API_URL}/equipas`)

    if (!res.ok) {
        throw new Error('Erro ao carregar equipas')
    }

    const data = await res.json()
    return data
}

export const criarEquipa = async (equipa) => {
  const res = await fetch(`${API_URL}/equipas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipa),
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