import styles from "./page.module.css";
import { Connection } from "../../components/Connection";
import { ColoursInteraction } from "../../components/ColoursInteraction";

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.description}>
        <p>
          AA Thirdweb Demo - Etherlink
        </p>
        <Connection />
      </div>
      <ColoursInteraction />
    </main>
  );
}
