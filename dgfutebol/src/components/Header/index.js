import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <ul className={styles.menu}>
          <li onClick={ () => window.location.href = "tabelabrasileirao"} className={styles.lista}>Brasileirão</li>
          <li onClick={ () => window.location.href = "/"} className={styles.lista}>
            <img className={styles.imagem} src="oto trnp (1080 × 1080 px).png" />
          </li>
          <li onClick={ () => window.location.href = "tabelacopa"} className={styles.lista}>Copa do Brasil</li>
        </ul>
      </div>
    </div>
  );
};
