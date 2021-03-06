import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SetaCima } from "../src/assets/icons/SetaCima";
import { SetaBaixo } from "../src/assets/icons/SetaBaixo";
import { Neutro } from "../src/assets/icons/Neutro";
import styles from "../styles/Home.module.css";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



export default function Home() {

  const [tabela, setTabela] = useState();
  const [tabelaCopa, setTabelaCopa] = useState();
  const [token, setToken] = useState("live_116459a098cbea8a35c760e13db4c5");


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
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/fases/173", {
        headers: {
          Authorization: "Bearer live_116459a098cbea8a35c760e13db4c5",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, []);

  const items = [
    {
      name: "homebrasileiro.jpg",
      link: "/tabelabrasileirao"
    },
    {
      name: "homecopa.jpg",
      link: "/tabelacopa"
    },

  ]


  return (
    <div >
      <Header />
      <Carousel>
        {
          items.map((item) => <img className={styles.imagem} src={item.name} onClick={() => window.location.href=`${item.link}`} />)
        }
      </Carousel>
      <div className={styles.containerHome}>
        <div className={styles.brasileirao}>
          <div>
            <h1>Confira os 3 gols mais bonitos do Campeonato Brasileiro </h1>
            <div className={styles.videos}>
              <div className={styles.videos1}>
                <iframe
                  width="308"
                  height="245"
                  src="https://www.youtube.com/embed/HL5gW6qoa8U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.videos1}>
                <iframe
                  width="308"
                  height="245"
                  src="https://www.youtube.com/embed/j2THgVhWBaM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div >
                <iframe
                  width="308"
                  height="245"
                  src="https://www.youtube.com/embed/re4L1OL87E0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div onClick={() => window.location.href="/tabelabrasileirao"} className={styles.tabelaContainer}>
            <h1>Campeonato Brasileiro</h1>
            <div className={styles.boxTabelaPontuacao} >
              <p className={styles.classificacaoMenu}>Classifica????o</p>
              <p className={styles.headerTabela}>P</p>
            </div>

            {tabela &&
              tabela.slice(0, 4).map((campeonato) => {

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
                  }
                  else {
                    campeonato.posicao > 16
                    return (
                      <div className={styles.blue}>
                        <p className={styles.blue}>
                          {campeonato.posicao}
                        </p>
                      </div>
                    );
                  }
                };

                return (

                  <div >
                    <div className={styles.times}>
                      <div className={styles.timesClassificacao}>
                        <p>
                          {posicoes()} </p>
                        <p className={styles.textoTimes}>
                          {campeonato.time.nome_popular}
                        </p>
                        <p>
                          {variacao()}
                        </p>
                      </div>
                      <div>
                        <p className={styles.pontos} >{campeonato.pontos}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div   onClick={() => window.location.href="/tabelacopa"} className={styles.brasileirao}>
          <div>
            <h1>Confira os 3 gols mais bonitos da Copa do Brasil </h1>
            <div className={styles.videos}>
              <div className={styles.videos1}>
                <iframe
                  width="300"
                  height="272"
                  src="https://www.youtube.com/embed/YM8k_yOvCfA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className={styles.videos1}>
                <iframe
                  width="300"
                  height="273"
                  src="https://www.youtube.com/embed/zv6sdp_oHLs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div>
                <iframe
                  width="320"
                  height="275"
                  src="https://www.youtube.com/embed/5ZBmCS1Qd94"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

            </div>
          </div>

          <div className={styles.tabela}>
            <h1>Copa do Brasil</h1>
            <div className={styles.copaTabela}>
              <div className={styles.rodadaAtual} >
                Oitavas
              </div>
              {tabelaCopa &&
                Object.values(tabelaCopa.chaves).slice(0, 2).map((copaBrasil, index) => {
                  return (
                    <div key={index} className={styles.containerCopa}>
                      <div>
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
                                width="30"
                                src={copaBrasil?.partida_volta.time_mandante.escudo}
                              />
                            </div>
                            <p className={styles.textVisitante}>
                              {copaBrasil?.partida_volta.placar}
                            </p>
                            <div className={styles.localVisitante}>
                              <img
                                width="30"
                                src={copaBrasil?.partida_volta.time_visitante.escudo}
                              />
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
      </div>
      <Footer />
    </div>
  );
}
