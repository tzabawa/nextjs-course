import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "@/styles/Page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function User() {
  const router = useRouter();

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>User:{router.query.name} Page</h1>
    </main>
  );
}
