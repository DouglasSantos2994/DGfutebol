import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CopaFase3() {
  const [tabelaCopa, setTabelaCopa] = useState();

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/172", {
        headers: {
          Authorization: "Bearer live_80222ded76dc4a8805ebb0c3f6c5a7 ",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, []);

  return (
    <div>
      <div className={styles.tabela}>
        {tabelaCopa &&
          Object.values(tabelaCopa.chaves).map((copaBrasil, index) => {
            return (
              <div key={index} className={styles.container}>
                <div>
                  <div className={styles.idaVolta}>
                    <div className={styles.tabelaFase3}>
                      <div className={styles.data}>
                        <p className={styles.text}>
                          {copaBrasil?.partida_ida.data_realizacao}
                        </p>
                        <p className={styles.textEstadio}>
                          {copaBrasil?.partida_ida.estadio.nome_popular}
                        </p>

                        <p className={styles.text}>
                          {copaBrasil?.partida_ida.hora_realizacao}
                        </p>
                      </div>

                      <div className={styles.jogosIda}>
                        <div className={styles.local}>
                          <img
                            width="70"
                            src={copaBrasil?.partida_ida.time_mandante.escudo}
                          />
                        </div>
                        <p className={styles.textVisitante}>
                          {copaBrasil?.partida_ida.placar}
                        </p>
                        <div className={styles.localVisitante}>
                          <img
                            width="70"
                            src={copaBrasil?.partida_ida.time_visitante.escudo}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.tabelaFase3}>
                      <div className={styles.data}>
                        <p className={styles.text}>
                          {copaBrasil?.partida_volta.data_realizacao}
                        </p>
                        <p className={styles.text}>
                          {copaBrasil?.partida_volta.estadio.nome_popular}
                        </p>
                        <p className={styles.text}>
                          {copaBrasil?.partida_volta.hora_realizacao}
                        </p>
                      </div>

                      <div className={styles.jogosIda}>
                        <div className={styles.local}>
                          <img
                            width="70"
                            src={copaBrasil?.partida_volta.time_mandante.escudo}
                          />
                        </div>
                        <p className={styles.textVisitante}>
                          {copaBrasil?.partida_volta.placar}
                        </p>
                        <div className={styles.localVisitante}>
                          <img
                            width="70"
                            src={copaBrasil?.partida_volta.time_visitante.escudo}
                          />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
