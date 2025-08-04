import React, { useState, useEffect, useRef } from "react"
import { criarEquipa, uploadLogoEquipa } from "../../hooks/useEquipas"
import { fetchEscaloes } from "../../hooks/useEscaloes"

export default function AddTeams() {
  const [nome, setNome] = useState("")
  const [logoFile, setLogoFile] = useState(null)
  const [escaloes, setEscaloes] = useState([])
  const [escalaoSelecionado, setEscalaoSelecionado] = useState("")
  const fileRef = useRef(null)

  useEffect(() => {
    const escaloesFetch = async () => {
        const data = await fetchEscaloes()
        setEscaloes(data)
        if (data.length > 0) {
            setEscalaoSelecionado(data[0])
        }
    }
    escaloesFetch()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const equipaCriada = await criarEquipa({
          nome,
          escalao: escalaoSelecionado,
          logoUrl: "",
        })  

        if (logoFile) {
          await uploadLogoEquipa(equipaCriada.id, logoFile)
        }   

        setNome("")
        setLogoFile(null)
        setEscalaoSelecionado("")
        fileRef.current.value = null    

    }   catch (error) {
      alert(error.message)
    }
  }

  const escaloesDisplay = escaloes.map((escalao, index) => { 
    return (
          <option key={index} value={escalao}>
            {escalao}
          </option>
        )
    }
    )

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

        <select
            value={escalaoSelecionado}
            onChange={(e) => setEscalaoSelecionado(e.target.value)}
            required
        >
            {escaloesDisplay}
        </select>

        <button type="submit">Criar equipa</button>
        </form>
    </section>
  )
}
