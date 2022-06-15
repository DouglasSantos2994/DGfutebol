import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div></div>
      <Footer />
    </div>
  );
}
