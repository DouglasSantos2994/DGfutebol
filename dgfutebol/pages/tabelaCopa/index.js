
import React, { useState, useEffect } from "react";
import { Header } from "../../src/components/Header";
import axios from "axios";
import styles from"./styles.module.css"
import { SetaEsquerda } from "../../src/assets/icons/SetaEsquerda";
import { SetaDireita } from "../../src/assets/icons/SetaDireita";
import Oitavas from "../../src/components/Oitavas";
import CopaFase3 from "../../src/components/CopaFase3";
import CopaFase2 from "../../src/components/CopaFase2";
import CopaFase1 from "../../src/components/CopaFase1";
import { Footer } from "../../src/components/Footer";
export default function TabelaCsopa() {
  const [artilheiros, setArtilheiros] = useState();

  useEffect(() => {
    axios
      .get("https://api.api-futebol.com.br/v1/campeonatos/2/artilharia", {
        headers: {
          Authorization: "Bearer test_e63e0e74587d78aee846591638b3c7",
        },
      })
      .then(function (response) {
        setArtilheiros(response.data);
      });
  }, []);

  return (
    <div>

      <div>
        <Header />
        <img className={styles.imagem} src="copa.jpg" />
        <div>
          <button className={styles.botao} >
            <SetaEsquerda stroke="green" width={20} />
          </button>

          <p className={styles.quantidadeRodadas}>atual</p>
          <button className={styles.botao}     >
            <SetaDireita stroke="green" width={20} />
          </button>
        </div>
        <Oitavas />
        <CopaFase3 />
        <CopaFase2 />
        <CopaFase1 />
      </div>
      <div>
        <div>
          <div>
            <div>Ranking</div>
            <div>Gols</div>
          </div>
          {artilheiros &&
            Object.values(artilheiros).map((jogadores, index) => {
              return (
                <div>
                  <div>
                    <div >
                      <img width="20" src={jogadores.time.escudo} />
                      <p>{jogadores.atleta.nome_popular}</p>
                    </div>
                  </div>
                  <div>
                    <p >{jogadores.gols}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
