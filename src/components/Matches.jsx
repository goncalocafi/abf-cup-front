import porto from "../assets/porto.png"
import slb from "../assets/slb.png"
import sporting from "../assets/sporting.png"
import imortal from "../assets/imortal.png"

export default function Matches() {
    return (
        <section className="matches">
            <h2 className="match-date">Domingo 12 junho</h2>
            <div className="card">
                <div className="match-score">
                    <div className="team home">
                        <h3>Imortal</h3>
                        <img src={imortal} />
                    </div>

                    <div className="score">
                        <h3>4</h3>
                        <p>FIM</p>
                        <h3>1</h3>
                    </div>

                    <div className="team away">
                        <img src={porto} />
                        <h3>Porto</h3>
                    </div>
                </div>
                <div className="match-info">
                    <p>Grupo A</p>
                    <p>Fase de grupos</p>
                </div>
            </div>
            <h2 className="match-date">Sábado 11 junho</h2>
            <div className="card">
                <div className="match-score">
                    <div className="team home">
                        <h3>Benfica</h3>
                        <img src={slb} />
                    </div>

                    <div className="score">
                        <h3>19</h3>
                        <p>FIM</p>
                        <h3>0</h3>
                    </div>

                    <div className="team away">
                        <img src={sporting} />
                        <h3>Sporting</h3>
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
                        <h3>Benfica</h3>
                        <img src={slb} />
                    </div>

                    <div className="score">
                        <h3>5</h3>
                        <p>FIM</p>
                        <h3>0</h3>
                    </div>

                    <div className="team away">
                        <img src={porto} />
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