import styles from "./page.module.css";
import { TraditionalLogin } from "../../components/TraditionalLogin";
import { InAppLogin } from "../../components/InAppLogin";
import { AALogin } from "../../components/AALogin";
import { Select } from "@chakra-ui/react";
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
