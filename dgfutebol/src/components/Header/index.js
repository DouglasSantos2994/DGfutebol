import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>     
          <a onClick={ () => window.location.href = "tabelabrasileirao"} className={styles.lista}>Brasileirão</a>
          <a onClick={ () => window.location.href = "/"} >
            <img className={styles.imagem}  width={80} src="oto trnp (1080 × 1080 px).png" />
          </a>
          <a onClick={ () => window.location.href = "tabelacopa"} className={styles.lista}>Copa do Brasil</a>
      </div>
    </div>
  );
};
