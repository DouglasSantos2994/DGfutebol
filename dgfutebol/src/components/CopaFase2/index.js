import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CopaFase2() {
  const [tabelaCopa, setTabelaCopa] = useState();

  console.log("hdhddgdgdg", tabelaCopa);

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/171", {
        headers: {
          Authorization: "Bearer live_ddb6c70e5602ed31085242c6aef6be",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Fase2 - Mata mata </h1>
      <div className={styles.tabela}>
        {tabelaCopa &&
          Object.values(tabelaCopa.chaves).map((copaBrasil, index) => {
            return (
              <div key={index} className={styles.tabelaFase2}>
                <div>
                  <div>
                    <div>
                      <div>
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
                            <div className={styles.textEstadio}>
                              {/* <p className={styles.textMandante}>
                              {
                                copaBrasil?.partida_ida.time_mandante
                                  .nome_popular
                              }
                            </p> */}

                              <img
                                width="70"
                                src={copaBrasil?.partida_ida.time_mandante.escudo}
                              />
                            </div>

                            <div className={styles.placares}>
                              {/* <p className={styles.textMandante}>
                              {copaBrasil?.partida_ida.placar_mandante}
                            </p> */}
                              <p className={styles.textMandante}>
                                {copaBrasil?.partida_ida.placar}
                              </p>
                              {/* <Contra width={10} /> */}
                              {/* <p className={styles.textVisitante}>
                              {copaBrasil?.partida_ida.placar_visitante}
                            </p> */}
                            </div>
                            <div className={styles.textEstadio}>
                              <img
                                width="70"
                                src={
                                  copaBrasil?.partida_ida.time_visitante.escudo
                                }
                              />

                              {/* <p className={styles.textVisitante}>
                              {
                                copaBrasil?.partida_ida.time_visitante
                                  .nome_popular
                              }
                            </p> */}
                            </div>
                          </div>
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
