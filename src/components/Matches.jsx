import img from "../assets/logo.png"

export default function Matches() {
    return (
        <section className="matches">
            <div className="card">
                <h2 className="match-date">Domingo 12 junho</h2>
                <div className="match-score">
                    <div className="team home">
                        <h3>sporting</h3>
                        <img src={img} />
                    </div>

                    <div className="score">
                        <h3>0</h3>
                        <p>FIM</p>
                        <h3>0</h3>
                    </div>

                    <div className="team away">
                        <img src={img} />
                        <h3>Porto</h3>
                    </div>
                </div>
                <div className="match-info">
                    <p>Grupo A</p>
                    <p>Fase de grupos</p>
                </div>
            </div>
            <div className="card">
                <h2 className="match-date">Domingo 12 junho</h2>
                <div className="match-score">
                    <div className="team home">
                        <h3>sporting</h3>
                        <img src={img} />
                    </div>

                    <div className="score">
                        <h3>0</h3>
                        <p>FIM</p>
                        <h3>0</h3>
                    </div>

                    <div className="team away">
                        <img src={img} />
                        <h3>Porto</h3>
                    </div>
                </div>
                <div className="match-info">
                    <p>Grupo A</p>
                    <p>Fase de grupos</p>
                </div>
            </div>
            <div className="card">
                <div className="match-score">
                    <div className="team home">
                        <h3>sporting</h3>
                        <img src={img} />
                    </div>

                    <div className="score">
                        <h3>0</h3>
                        <p>FIM</p>
                        <h3>0</h3>
                    </div>

                    <div className="team away">
                        <img src={img} />
                        <h3>Porto</h3>
                    </div>
                </div>
                <div className="match-info">
                    <p>Grupo A</p>
                    <p>Fase de grupos</p>
                </div>
            </div>
        </section>
    )
}