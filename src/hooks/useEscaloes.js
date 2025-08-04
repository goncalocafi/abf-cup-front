import { API_URL } from "../config";

export const fetchEscaloes = async () => {
    const res = await fetch(`${API_URL}/escaloes`)
    
    if (!res.ok) {
        throw new Error('Erro ao carregar escaloes');
    }

    const data = await res.json()
    return data
}