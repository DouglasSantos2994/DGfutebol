import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>DG Futebol</h1>
      <img
        className={styles.imagem}
        src="https://w7.pngwing.com/pngs/101/336/png-transparent-cd-guadalajara-estadio-pedro-escartin-c-d-guadalajara-cd-toledo-deportivo-de-la-coruna-football-emblem-logo-sports.png"
      />
    </div>
  );
};
