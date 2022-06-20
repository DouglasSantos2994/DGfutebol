import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SetaCima } from "../../src/assets/icons/SetaCima";


export default function TabelaBrasileirao() {
  const [tabela, setTabela] = useState();
  const [rodada, setRodada] = useState();
  const [artilheiros, setArtilheiros] = useState();
  const [marcador, setMarcador] = useState(1);
  const [numero, setNumero] = useState(1);

  console.log("marcador", tabela);
  // console.log("rodada", rodada);
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

  useEffect(() => {
    axios
      .get(` https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${marcador}`, {
        headers: {
          Authorization: "Bearer live_92d015f433b8075aef6b1f9e21eb9c",
        },
      })
      .then(function (response) {
        setRodada(response.data);
      });
  }, [marcador]);




  return (
    <div>
      <h1>Campeonato Brasileiro</h1>

      <table className={styles.boxTabela}>
        <tr className={styles.menu}>
          <th className={styles.headerTabela}>Classificação</th>
          <th className={styles.headerTabela}>P</th>
          <th className={styles.headerTabela}>J</th>
          <th className={styles.headerTabela}>V</th>
          <th className={styles.headerTabela}>E</th>
          <th className={styles.headerTabela}>D</th>
          <th className={styles.headerTabela}>Gp</th>
          <th className={styles.headerTabela}>GS</th>
          <th className={styles.headerTabela}>%</th>
        </tr>

        {tabela &&
          tabela.map((campeonato, index) => {

            const variacao = () => {
              if (campeonato.variacao_posicao === 0) {
                return <p className={styles.neutro}>{campeonato.variacao_posicao}</p>
              } else if (campeonato.variacao_posicao > 0) {
                return <p className={styles.positivo}>{campeonato.variacao_posicao} <SetaCima stroke="#06AA48" width={10} /></p>
              } else {
                return <p className={styles.negativo}>{campeonato.variacao_posicao}</p>
              }
            }
            return (

              <tr className={styles.ColunaTabela} >
                <div>
                  <td >{campeonato.posicao}
                    {campeonato.time.nome_popular}
                    {variacao()}
                  </td>
                </div>
                <td className={styles.ColunaTabela}>{campeonato.pontos}</td>
                <td className={styles.ColunaTabela}>{campeonato.jogos}</td>
                <td className={styles.ColunaTabela}>{campeonato.vitorias}</td>
                <td className={styles.ColunaTabela}>{campeonato.empates}</td>
                <td className={styles.ColunaTabela}>{campeonato.derrotas}</td>
                <td className={styles.ColunaTabela}>{campeonato.gols_pro}</td>
                <td className={styles.ColunaTabela}>{campeonato.gols_contra}</td>
                <td className={styles.ColunaTabela}>{campeonato.aproveitamento}</td>
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
                <div key={index}>
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
                </div>
              );
            })}
        </table>
      </div>

      <div>
        <table>

          {rodada &&
            Object.values(rodada.partidas).map((jogos, index) => {
              return (
                <div key={index}>
                  <tr>
                    <td>
                      <div className={styles.artilheiros}>

                        <p>{jogos.placar}</p>
                      </div>
                    </td>

                  </tr>
                </div>
              );
            })}
        </table>
        <button onClick={() => setMarcador(marcador + 1)}>Avançar</button>
        <button onClick={() => setMarcador(marcador - 1)}>Voltar</button>
      </div>
    </div >
  );
}
