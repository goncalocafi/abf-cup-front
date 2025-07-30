import React from 'react';

export default function Standings() {
    const groups = [
    {
      nome: 'Grupo A',
      equipas: [
        { nome: 'Imortal', posicao: 3, pontos: 3, golosMarcados: 2, golosSofridos: 4 },
        { nome: 'Sporting', posicao: 1, pontos: 7, golosMarcados: 6, golosSofridos: 1 },
        { nome: 'Boavista', posicao: 2, pontos: 5, golosMarcados: 4, golosSofridos: 3 },
        { nome: 'Marítimo', posicao: 4, pontos: 1, golosMarcados: 2, golosSofridos: 6 }
      ]
    },
    {
      nome: 'Grupo B',
      equipas: [
        { nome: 'Farense', posicao: 1, pontos: 6, golosMarcados: 5, golosSofridos: 2 },
        { nome: 'Vitória SC', posicao: 2, pontos: 4, golosMarcados: 3, golosSofridos: 2 },
        { nome: 'Casa Pia', posicao: 3, pontos: 3, golosMarcados: 2, golosSofridos: 3 },
        { nome: 'Chaves', posicao: 4, pontos: 1, golosMarcados: 1, golosSofridos: 4 }
      ]
    },
    {
      nome: 'Grupo C',
      equipas: [
        { nome: 'Estoril', posicao: 2, pontos: 4, golosMarcados: 3, golosSofridos: 3 },
        { nome: 'Rio Ave', posicao: 3, pontos: 3, golosMarcados: 2, golosSofridos: 3 },
        { nome: 'Braga', posicao: 1, pontos: 7, golosMarcados: 6, golosSofridos: 2 },
        { nome: 'Moreirense', posicao: 4, pontos: 1, golosMarcados: 1, golosSofridos: 5 }
      ]
    },
    {
      nome: 'Grupo D',
      equipas: [
        { nome: 'Benfica', posicao: 1, pontos: 9, golosMarcados: 7, golosSofridos: 1 },
        { nome: 'Porto', posicao: 2, pontos: 6, golosMarcados: 5, golosSofridos: 3 },
        { nome: 'Gil Vicente', posicao: 3, pontos: 3, golosMarcados: 3, golosSofridos: 5 },
        { nome: 'Arouca', posicao: 4, pontos: 0, golosMarcados: 1, golosSofridos: 7 }
      ]
    }
  ];

  const groupsOrdenados = groups.map(group => {
    const ordered = group.equipas.sort((a, b) => b.pontos - a.pontos)
    return {
        ...group,
        equipas: ordered
    }
    })

   return (
    <>
      <section className="standings">
        <div className='quarters'>
          <div className='group'>
            <h3>Imortal</h3>
            <h3>Sporting</h3>
          </div>
          <div className='group'>
            <h3>Farense</h3>
            <h3>Vitória SC</h3>
          </div>
          <div className='group'>
            <h3>Estoril</h3>
            <h3>Rio Ave</h3>
          </div>
          <div className='group'>
            <h3>Benfica</h3>
            <h3>Porto</h3>
          </div>
        </div>
        <div className='quarters'>
          <div className='group'>
            <h3>Vencedor A</h3>
            <h3>Vencedor C</h3>
          </div>
          <div className='group'>
            <h3>Vencedor E</h3>
            <h3>Vencedor H</h3>
          </div>
        </div>
        <div className='quarters'>
          <div className='group'>
            <h3>Vencedor A</h3>
            <h3>Vencedor C</h3>
          </div>
        </div>
      </section>

      <section className="standings-tables">
        {groupsOrdenados.map((group, index) => (
          <div className="group-table" key={index}>
            {console.log(group)}
            <h3>{group.nome}</h3>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Posição</th>
                  <th>Pontos</th>
                  <th>GM</th>
                  <th>GS</th>
                </tr>
              </thead>
              <tbody>
                {group.equipas.map((equipa, i) => (
                  <tr key={i}>
                    <td>{equipa.nome}</td>
                    <td>{equipa.posicao}</td>
                    <td>{equipa.pontos}</td>
                    <td>{equipa.golosMarcados}</td>
                    <td>{equipa.golosSofridos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </>
  );
}
