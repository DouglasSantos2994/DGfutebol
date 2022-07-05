import React, { useState, useEffect } from "react";
import { Header } from "../../src/components/Header";
import axios from "axios";
import styles from "./styles.module.css"
import { SetaEsquerda } from "../../src/assets/icons/SetaEsquerda";
import { SetaDireita } from "../../src/assets/icons/SetaDireita";
import QuartasFinais from "../../src/components/QuartasFinais/indesx";
import SemiFinais from "../../src/components/SemiFinais";
import Finais from "../../src/Finais";
import Oitavas from "../../src/components/Oitavas";
import CopaFase3 from "../../src/components/CopaFase3";
import CopaFase2 from "../../src/components/CopaFase2";
import CopaFase1 from "../../src/components/CopaFase1";
import { Footer } from "../../src/components/Footer";

export default function TabelaCsopa() {

  const mock = {

    "atleta": [
      {
        "classificacao": 1,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cb17a444.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/05/6c349bafc66d9d87bed8232921b6f174_140x140.png",
        "nome": "Edu",
        "posicao": "Atacante",
        "gols": 4,

      },

      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/27/9ac23014ff9196c4c2a10d652798dcfa_140x140.png",
        "nome": "Giuliano",
        "posicao": "Meia Central",
        "gols": 3,
      },

      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999e2864a27.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/13/59faf7245c4ab4b19c4800e95b221dbb_140x140.png",
        "nome": "Vitor Roque",
        "posicao": "Atacante",
        "gols": 3,

      },
      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ddaa261b.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/05/12/514852e8af608e6e0f477fec94225240_140x140.png",
        "nome": " Yago Pikachu",
        "posicao": "Meia Central",
        "gols": 3,

      },

      {
        "classificacao": 2,
        "escudo": "https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg",
        "jogador": "https://s.glbimg.com/es/sde/f/2022/04/20/5bb8f223990a3b79975f90d376fb341a_140x140.png",
        "nome": "Cano",
        "posicao": "Atacante",
        "gols": 3,

      },


    ]
  }

  
  const [tabelaCopa, setTabelaCopa] = useState();
  const [marcador, setMarcador] = useState(173);




  useEffect(() => {
    axios
      .get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases/${marcador}`, {
        headers: {
          Authorization: "Bearer live_2d4a60b7de9658ff275cf97b418852",
        },
      })
      .then(function (response) {
        setTabelaCopa(response.data);
      });
  }, [marcador]);

  



  return (
    <div>

      <div>
        <Header />
        <img className={styles.imagem} src="copa.jpg" />
        <div className={styles.todasTabelas} >
          <div className={styles.botaoCopa}>

            <button className={styles.botao} disabled={marcador > 170 ? false : true}
              onClick={() => setMarcador(marcador - 1)}
            >
              <SetaEsquerda stroke="white" width={25} />
            </button>
            <p className={styles.quantidadeRodadas}>{tabelaCopa?.nome}</p>

            <button className={styles.botao}
              onClick={() => setMarcador(marcador + 1)}
              disabled={marcador < 177 ? false : true}>
              <SetaDireita stroke="white" width={25} />
            </button>

          </div>

          {marcador === 176 && <Finais />}
          {marcador === 175 && <SemiFinais />}
          {marcador === 174 && <QuartasFinais />}
          {marcador === 173 && <Oitavas />}
          {marcador === 172 && <CopaFase3 />}
          {marcador === 171 && <CopaFase2 />}
          {marcador === 170 && <CopaFase1 />}
        </div>

        <div className={styles.boxTabelaArtilheiro}>
          <div className={styles.tabelaArtilheiro}>
            <div className={styles.menu}>
              <div className={styles.ranking}>Ranking</div>
              <div className={styles.gols}>Gols</div>
            </div>
            {mock &&
              Object.values(mock.atleta).map((jogadores, index) => {
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
      </div>


      <Footer />
    </div>
  );
}
