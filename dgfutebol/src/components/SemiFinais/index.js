import styles from "./styles.module.css";
import React from "react";
import { Contra } from "../../assets/icons/Contra";


export default function SemiFinais() {
    const mock = {

        "semi": [
            {
                "time": "Sorteio",
                "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/escudo_default_65x65.png",
            },

            {
                "time": "Sorteio",
                "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/escudo_default_65x65.png",
            },


        ]
    }

    return (
        <div >
            <div className={styles.tabela}>
                {mock &&
                    Object.values(mock.semi).map((copaBrasil, index) => {
                        return (
                            <div key={index} className={styles.container}>
                                <div>
                                    <div className={styles.idaVolta}>
                                        <div className={styles.tabelaFase3}>
                                            <div className={styles.jogosIda}>
                                                <div className={styles.local}>
                                                    <p className={styles.timeLocal}>{copaBrasil?.time}</p>
                                                    <img
                                                        width="50"
                                                        src={copaBrasil?.escudo}
                                                    />
                                                </div>
                                                <Contra width={16} />
                                                <div className={styles.local}>

                                                    <img
                                                        width="50"
                                                        src={copaBrasil?.escudo}
                                                    />
                                                    <p className={styles.timeFora}>{copaBrasil?.time}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.tabelaFase3}>
                                            <div className={styles.jogosIda}>
                                                <div className={styles.local}>
                                                    <p className={styles.timeLocal}>{copaBrasil?.time}</p>
                                                    <img
                                                        width="50"
                                                        src={copaBrasil?.escudo}
                                                    />
                                                </div>
                                                <Contra width={16}/>
                                                <div className={styles.local}>
                                                    <img
                                                        width="50"
                                                        src={copaBrasil?.escudo}
                                                    />
                                                    <p className={styles.timeFora}>{copaBrasil?.time}</p>
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