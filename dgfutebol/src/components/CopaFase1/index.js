import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CopaFase1() {
  const [tabelaCopa, setTabelaCopa] = useState();

  console.log("hdhddgdgdg", tabelaCopa);

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/170", {
        headers: {
          Authorization: "Bearer live_aa9f90bc0f61eae47b3e3a4a73ef29",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Fase1 - Mata mata </h1>
      <div className={styles.tabela}>
        <table>
          {tabelaCopa &&
            Object.values(tabelaCopa.chaves).map((copaBrasil, index) => {
              return (
                <tr key={index}>
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
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}
