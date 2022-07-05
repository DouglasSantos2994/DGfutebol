import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SetaCima } from "../../src/assets/icons/SetaCima";
import { SetaBaixo } from "../../src/assets/icons/SetaBaixo";
import { Neutro } from "../../src/assets/icons/Neutro";
import { SetaEsquerda } from "../../src/assets/icons/SetaEsquerda";
import { SetaDireita } from "../../src/assets/icons/SetaDireita";
import { Header } from "../../src/components/Header";
import { Footer } from "../../src/components/Footer";
import { Contra } from "../../src/assets/icons/Contra";

export default function TabelaBrasileirao() {
  const mockArtilheiro = {

    "atleta": [
      {
        "classificacao": 1,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccdc1656.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/03/01/3abaa943f1546750dd057d6cb3559ce5_140x140.png",
        "nome": "Calleri",
        "posicao": "Atacante",
        "gols": 9,

      },

      {
        "classificacao": 1,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/20/5bb8f223990a3b79975f90d376fb341a_140x140.png",
        "nome": "Cano",
        "posicao": "Atacante",
        "gols": 9,

      },

      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999dc97b4e2.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/03/10/5215be2746c5556d28458274ecbe4b16_140x140.png",
        "nome": "Pedro Raul",
        "posicao": "Atacante",
        "gols": 7,
      },

      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca6bfd30.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2021/04/23/d9ed7fa34aa12e4ce8768c9c2a2b4560_140x140.png",
        "nome": "Hulk",
        "posicao": "Atacante",
        "gols": 7,

      },
      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c8488adb.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/08/c60eb6c17dd46f0a98ac8d236bddbbd7_140x140.png",
        "nome": " Bissoli",
        "posicao": "Atacante",
        "gols": 7,

      },

    ]
  }
  const [tabela, setTabela] = useState();
  const [artilheiros, setArtilheiros] = useState();
  const [marcador, setMarcador] = useState(15);
  const [rodada, setRodada] = useState();
  const [token, setToken] = useState("live_759e837c551b764406cb6c001e5b32");

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
          setToken("live_116459a098cbea8a35c760e13db4c5");
        }
      });
  }, [token]);


  useEffect(() => {
    axios
      .get(
        ` https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${marcador}`,
        {
          headers: {
            Authorization: "Bearer live_eec81143fd642c316c0b8343f9aa8d",
          },
        }
      )
      .then(function (response) {
        setRodada(response.data);
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
                <>
                  {campeonato.posicao % 2 === 0 &&

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
                  }
                  {campeonato.posicao % 2 !== 0 &&
                    <div className={styles.bodyPontuacao}>
                      <div className={styles.Pontuacaoclassificacao}>
                        <div className={styles.Classificacao}>
                          <div className={styles.timesImpar}>
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
                  }
                </>
              )
            })
          }
        </div>

        <div className={styles.rodadasTabela}>
          <div className={styles.tabelaRodadas}>
            <div className={styles.menuRodada}>
              <button
                className={styles.botao}
                disabled={marcador > 1 ? false : true}
                onClick={() => setMarcador(marcador - 1)}
              >
                <SetaEsquerda stroke="#fff" width={20} />
              </button>

              <span className={styles.quantidadeRodadas}>{rodada?.nome}</span>
              <button
               disabled={marcador >= 38 ? true : false}
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
            <div className={styles.ranking}>Ranking</div>
            <div className={styles.gols}>Gols</div>
          </div>

          {mockArtilheiro &&
            Object.values(mockArtilheiro.atleta).map((jogadores, index) => {
              return (
                <div key={index} className={styles.colocacao}>
                  <div className={styles.containerJogadores}>
                    <div className={styles.dadosJogadores}>
                      <p className={styles.rankingPosicao}>{jogadores.classificacao}</p>
                      <div className={styles.fotoJogador}>
                        <img className={styles.jogadoresArtilheiros} src={jogadores.jogador} />
                      </div>
                      <img width="30px" src={jogadores.escudo} />
                      <div className={styles.atleta}>
                        <p className={styles.nome}>{jogadores.nome}</p>
                        <p className={styles.posicao}>{jogadores.posicao}</p>
                      </div>
                    </div>
                    <div>
                      <p className={styles.quantidadeGols}>{jogadores.gols}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
