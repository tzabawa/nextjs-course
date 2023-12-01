import { Inter } from "next/font/google";
import styles from "@/styles/Page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>About Page</h1>
    </main>
  );
}
