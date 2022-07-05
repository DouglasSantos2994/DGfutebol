import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function CopaFase1() {
  const [tabelaCopa, setTabelaCopa] = useState();

 

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/170", {
        headers: {
          Authorization: "Bearer live_1ee925728c4e0a9daa1e5578344261",
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
              <div key={index} className={styles.tabelaFase1}>
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
                              <img
                                width="70"
                                src={copaBrasil?.partida_ida.time_mandante.escudo}
                              />
                            </div>

                            <div className={styles.placares}>
                           
                              <p className={styles.textMandante}>
                                {copaBrasil?.partida_ida.placar}
                              </p>
                           
                            </div>
                            <div className={styles.textEstadio}>
                              <img
                                width="70"
                                src={
                                  copaBrasil?.partida_ida.time_visitante.escudo
                                }
                              />
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
