import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SetaCima } from "../../src/assets/icons/SetaCima";
import { SetaBaixo } from "../../src/assets/icons/SetaBaixo";
import { Neutro } from "../../src/assets/icons/Neutro";
import { SetaEsquerda } from "../../src/assets/icons/SetaEsquerda";
import { SetaDireita } from "../../src/assets/icons/SetaDireita";
import { Header } from "../../src/components/Header";
import { Contra } from "../../src/assets/icons/Contra";

export default function TabelaBrasileirao() {
  const [tabela, setTabela] = useState();

  const [artilheiros, setArtilheiros] = useState();
  const [marcador, setMarcador] = useState(1);
  const mock = {
    "nome": "1ª Rodada",
    "slug": "1a-rodada",
    "rodada": 1,
    "status": "encerrada",
    "proxima_rodada": {
      "nome": "2ª Rodada",
      "slug": "2a-rodada",
      "rodada": 2,
      "status": "encerrada"
    },
    "rodada_anterior": null,
    "_link": "/v1/campeonatos/10/rodadas/1",
    "partidas": [
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      },
      {
        "partida_id": 4844,
        "campeonato": {
          "campeonato_id": 10,
          "nome": "Campeonato Brasileiro",
          "slug": "campeonato-brasileiro"
        },
        "placar": "Fluminense 0x0 Santos",
        "time_mandante": {
          "time_id": 26,
          "nome_popular": "Fluminense",
          "sigla": "FLU",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
        },
        "time_visitante": {
          "time_id": 63,
          "nome_popular": "Santos",
          "sigla": "SAN",
          "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg"
        },
        "placar_mandante": 0,
        "placar_visitante": 0,
        "status": "finalizado",
        "slug": "fluminense-santos-4844",
        "data_realizacao": "09/04/2022",
        "hora_realizacao": "16:30",
        "data_realizacao_iso": "2022-04-09T16:30:00-0300",
        "estadio": {
          "estadio_id": 19,
          "nome_popular": "Maracanã"
        },
        "_link": "/v1/partidas/4844"
      }
    ]
  }
  const [rodada, setRodada] = useState(mock);
  console.log("tabela", tabela);
  console.log("rodada", rodada);
  const [token, setToken] = useState("test_e63e0e74587d78aee846591638b3c7");

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
          setToken("test_e63e0e74587d78aee846591638b3c7");
        }
      });
  }, [token]);

  useEffect(() => {
    axios
      .get(" https://api.api-futebol.com.br/v1/campeonatos/10/artilharia", {
        headers: {
          Authorization: "Bearer test_e63e0e74587d78aee846591638b3c7",
        },
      })
      .then(function (response) {
        setArtilheiros(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        ` https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${marcador}`,
        {
          headers: {
            Authorization: "Bearer test_e63e0e74587d78aee846591638b3c7",
          },
        }
      )
      .then(function (response) {
        setRodada(mock);
      });
  }, [marcador]);


  return (
    <div>
      <Header />

      <img className={styles.imagem} src="campeonatobrasileiro.jpg" />

      <div className={styles.tabelaRodada}>

        <div className={styles.tabelaContainer}>
          <div className={styles.boxTabelaPontuacao} >
            <div className={styles.boxTabelaPontuacao}>
              <p className={styles.classificacaoMenu}>Classificação</p>
              <div className={styles.boxTabelaPontuacao}>
                <p className={styles.headerTabela}>P</p>
                <p className={styles.headerTabela}>J</p>
                <p className={styles.headerTabela}>V</p>
                <p className={styles.headerTabela}>E</p>
                <p className={styles.headerTabela}>D</p>
                <p className={styles.headerTabela}>GP</p>
                <p className={styles.headerTabela}>GS</p>
                <p className={styles.headerTabela}>%</p>
              </div>
            </div>
          </div>
          {tabela &&
            tabela.map((campeonato) => {

              const variacao = () => {
                if (campeonato.variacao_posicao === 0) {
                  return (
                    <div className={styles.variacao}>
                      <p className={styles.variacaoTexto}>
                        {campeonato.variacao_posicao}
                      </p>
                      <p>
                        <Neutro stroke="darkgray" width={10} />
                      </p>
                    </div>
                  );
                } else if (campeonato.variacao_posicao > 0) {
                  return (
                    <div className={styles.variacao}>
                      <p className={styles.variacaoTexto}>
                        {campeonato.variacao_posicao}
                      </p>
                      <p>
                        <SetaCima stroke="#06AA48" width={10} />
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.variacao}>
                      <p className={styles.variacaoTexto}>
                        {campeonato.variacao_posicao}
                      </p>
                      <p>
                        <SetaBaixo stroke="red" width={10} />
                      </p>
                    </div>
                  );
                }
              };

              const posicoes = () => {
                if (campeonato.posicao > 0 && campeonato.posicao < 5) {
                  return (
                    <div className={styles.blue}>
                      <p className={styles.blue}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                } else if (campeonato.posicao > 4 && campeonato.posicao < 7) {
                  return (
                    <div className={styles.aqua}>
                      <p className={styles.aqua}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                }
                else if (campeonato.posicao > 4 && campeonato.posicao < 7) {
                  return (
                    <div className={styles.aqua}>
                      <p className={styles.aqua}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                }
                else if (campeonato.posicao > 6 && campeonato.posicao < 13) {
                  return (
                    <div className={styles.green}>
                      <p className={styles.green}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                }
                else if (campeonato.posicao > 12 && campeonato.posicao < 17) {
                  return (
                    <div className={styles.grey}>
                      <p className={styles.grey}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                }
                else {
                  campeonato.posicao > 16
                  return (
                    <div className={styles.red}>
                      <p className={styles.red}>
                        {campeonato.posicao}
                      </p>
                    </div>
                  );
                }
              };

              return (

                <div className={styles.bodyPontuacao}>
                  <div className={styles.Pontuacaoclassificacao}>
                    <div className={styles.Classificacao}>
                      <div className={styles.times}>
                        <div className={styles.timesClassificacao}>
                          <p>
                            {posicoes()} </p>
                          <p className={styles.times1}>
                            {campeonato.time.nome_popular}
                          </p>
                          <p>
                            {variacao()}
                          </p>
                        </div>
                        <div>
                          <p >{campeonato.pontos}</p>
                        </div>
                        <div>
                          <p >{campeonato.jogos}</p>
                        </div>
                        <div>
                          <p >{campeonato.vitorias}</p>
                        </div>
                        <div>
                          <p >{campeonato.empates}</p>
                        </div>
                        <div>
                          <p >{campeonato.derrotas}</p>
                        </div>
                        <div>
                          <p >{campeonato.gols_pro}</p>
                        </div>
                        <div>
                          <p >
                            {campeonato.gols_contra}
                          </p>
                        </div>
                        <div>
                          <p >
                            {campeonato.aproveitamento}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>

        <div className={styles.rodadasTabela}>
          <div className={styles.tabelaRodadas}>
            <div className={styles.menuRodada}>


















































            
                  <button
                    className={styles.botao}
                    onClick={() => setMarcador(marcador - 1)}
                  >
                    <SetaEsquerda sdivoke="#fff" width={20} />
                  </button>

                  <span className={styles.quantidadeRodadas}>Rodadas</span>
                  <button
                    className={styles.botao}
                    onClick={() => setMarcador(marcador + 1)}
                  >
                    <SetaDireita stroke="#fff" width={20} />
                  </button>
            
            </div>

            {rodada &&
              Object.values(rodada.partidas).map((jogos, index) => {
                return (
                  <div key={index}>
                    <div className={styles.rodadasTime}>
                      <div className={styles.rodadaJogo}>
                        <div className={styles.artilheiros}>
                          <p className={styles.dataRodada}>
                            {jogos.data_realizacao}
                          </p>
                          <p className={styles.dataRodada}>
                            {jogos.estadio.nome_popular}
                          </p>
                          <p className={styles.dataRodada}>
                            {jogos.hora_realizacao}
                          </p>
                        </div>
                        <div className={styles.estadio}>
                          <div className={styles.estadio}>
                            <p>{jogos.time_mandante.sigla}</p>
                            <img
                              className={styles.escudo}
                              src={jogos.time_mandante.escudo}
                            />
                            <p className={styles.placarMandante}>
                              {jogos.placar_mandante}
                            </p>
                            <Contra width={10} />
                            <p className={styles.placarVisitante}>
                              {jogos.placar_visitante}
                            </p>

                            <img
                              className={styles.escudo}
                              src={jogos.time_visitante.escudo}
                            />
                            <p className={styles.dataRodada}>
                              {jogos.time_visitante.sigla}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.tabelaLegenda}>
        <div className={styles.legendas}>
          <div className={styles.legendaIcon}>
            <Neutro stroke="green" width={10} />
            <p className={styles.status}>sul-americana</p>
          </div>
          <div className={styles.legendaIcon}>
            <Neutro stroke="red" width={10} />
            <p className={styles.status}>rebaixados</p>
          </div>
          <div className={styles.legendaIcon}>
            <Neutro stroke="blue" width={10} />
            <p className={styles.status}>libertadores</p>
          </div>
          <div className={styles.legendaIcon}>
            <Neutro stroke="aqua" width={10} />
            <p className={styles.status}>pré-libertadores</p>
          </div>
          <div className={styles.legendaIcon}>
            <SetaCima stroke="#06AA48" width={10} />
            <p className={styles.status}>subiu</p>
          </div>
          <div className={styles.legendaIcon}>
            <SetaBaixo stroke="red" width={10} />
            <p className={styles.status}>caiu</p>
          </div>
          <div className={styles.legendaIcon}>
            <Neutro stroke="grey" width={10} />
            <p className={styles.status}>manteve</p>
          </div>
        </div>
      </div>


      <div className={styles.boxTabelaArtilheiro}>
        <div className={styles.tabelaArtilheiro}>
          <div className={styles.menu}>
            <div>Ranking</div>
            <div>Gols</div>
          </div>

          {artilheiros &&
            Object.values(artilheiros).slice(0,3).map((jogadores, index) => {
             
              return (
                <div key={index}>
                  <div>
                    <div className={styles.Artilheiros}>
                      <div>
                        <div className={styles.artilheiros}>
                          <img
                            className={styles.escudo}
                            src={jogadores.time.escudo}
                          />
                          <p className={styles.jogadores}>
                            {jogadores.atleta.nome_popular}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className={styles.gols}>{jogadores.gols}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
