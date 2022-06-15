import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TabelaBrasileirao() {
  const [tabela, setTabela] = useState();
  const [rodada, setRodada] = useState();
  const [artilheiros, setArtilheiros] = useState();
  console.log("rodada", artilheiros);
  const [token, setToken] = useState("test_1bee3137cfcf43e2da28fe5890954e");

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setTabela(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 429) {
          setToken("live_aa9f90bc0f61eae47b3e3a4a73ef29");
        }
      });
  }, [token]);

  useEffect(() => {
    axios
      .get(" https://api.api-futebol.com.br/v1/campeonatos/10/artilharia", {
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
      <h1>Campeonato Brasileiro</h1>

      <table>
        <tr>
          <th>Classificação</th>
          <th>P</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>Gp</th>
          <th>GS</th>
          <th>%</th>
        </tr>

        {tabela &&
          tabela.map((campeonato, index) => {
            return (
              <tr key={index}>
                <td>
                  {campeonato.posicao} {campeonato.time.nome_popular}
                </td>
                <td>{campeonato.pontos}</td>
                <td>{campeonato.jogos}</td>
                <td>{campeonato.vitorias}</td>
                <td>{campeonato.empates}</td>
                <td>{campeonato.derrotas}</td>
                <td>{campeonato.gols_pro}</td>
                <td>{campeonato.gols_contra}</td>
                <td>{campeonato.aproveitamento}</td>
              </tr>
            );
          })}
      </table>
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
