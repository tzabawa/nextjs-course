import { Inter } from "next/font/google";
import styles from "@/styles/Page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Page Not Found</h1>
    </main>
  );
}
