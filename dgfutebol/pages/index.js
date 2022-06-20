import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <h2>Confira os 3 gols mais bonitos do Campeonato Brasileiro </h2>
        <div className={styles.videos}>
          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/HL5gW6qoa8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/j2THgVhWBaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/re4L1OL87E0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </div>

      <div>
        <h2>Confira os 3 gols mais bonitos da Copa do  Brasil </h2>
        <div className={styles.videos}>
          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/YM8k_yOvCfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/zv6sdp_oHLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

          <div><iframe width="360" height="315" src="https://www.youtube.com/embed/5ZBmCS1Qd94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
