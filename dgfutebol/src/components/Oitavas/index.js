import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Oitavas() {
  const [tabelaCopa, setTabelaCopa] = useState();
  const [artilheiros, setArtilheiros] = useState();

  console.log("tabelaCopa", tabelaCopa);
  console.log("eai", artilheiros);

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/173", {
        headers: {
          Authorization: "Bearer live_92d015f433b8075aef6b1f9e21eb9c",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/artilharia", {
        headers: {
          Authorization: "Bearer test_1bee3137cfcf43e2da28fe5890954e",
        },
      })
      .then(function (response) {
        setArtilheiros(response.data);
      });
  }, []);

  return (
    <div>
      <div className={styles.tabela}>
        <h1>Oitavas de final</h1>
        {tabelaCopa &&
          Object.values(tabelaCopa).map((copaBrasil, index) => {
            return (
              <div key={index}>
                <div>

                  <img width="50" src={copaBrasil?.logo}
                  />
                </div>
              </div>
            );
          })}

      </div>

      <div className={styles.tabela}>
        <table>
          {tabelaCopa &&
            Object.values(tabelaCopa.chaves).map((copaBrasil, index) => {
              return (
                <div key={index}>
                  <tr >
                    <td>
                      <div className={styles.container}>
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
                            <p className={styles.textMandante}>
                              {copaBrasil?.partida_ida.time_mandante.nome_popular}
                            </p>

                            <img
                              width="20"
                              src={copaBrasil?.partida_ida.time_mandante.escudo}
                            />

                            <p className={styles.textMandante}>
                              {copaBrasil?.partida_ida.placar_mandante}
                            </p>
                          </div>

                          <div className={styles.localVisitante}>
                            <p className={styles.textVisitante}>
                              {copaBrasil?.partida_ida.placar_visitante}
                            </p>

                            <img
                              width="20"
                              src={copaBrasil?.partida_ida.time_visitante.escudo}
                            />

                            <p className={styles.textVisitante}>
                              {
                                copaBrasil?.partida_ida.time_visitante
                                  .nome_popular
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className={styles.container}>
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
                            <p className={styles.textMandante}>
                              {
                                copaBrasil?.partida_volta.time_mandante
                                  .nome_popular
                              }
                            </p>

                            <img
                              width="20"
                              src={copaBrasil?.partida_volta.time_mandante.escudo}
                            />

                            <p className={styles.textMandante}>
                              {copaBrasil?.partida_volta.placar_mandante}
                            </p>
                          </div>

                          <div className={styles.localVisitante}>
                            <p className={styles.textVisitante}>
                              {copaBrasil?.partida_volta.placar_visitante}
                            </p>

                            <img
                              width="20"
                              src={
                                copaBrasil?.partida_volta.time_visitante.escudo
                              }
                            />

                            <p className={styles.textVisitante}>
                              {
                                copaBrasil?.partida_volta.time_visitante
                                  .nome_popular
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </div>
              );
            })}
        </table>
      </div>
      <div>
        <table>
          <tr>
            <th>Ranking</th>
            <th>Gols</th>
          </tr>
          {artilheiros &&
            Object.values(artilheiros).map((jogadores, index) => {
              return (
                <tr>
                  <td>
                    <div className={styles.artilheiros}>
                      <img width="20" src={jogadores.time.escudo} />
                      <p>{jogadores.atleta.nome_popular}</p>
                    </div>
                  </td>
                  <td>
                    <p className={styles.gols}>{jogadores.gols}</p>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
