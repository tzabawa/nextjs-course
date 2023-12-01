import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "@/styles/Page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Product() {
  const router = useRouter();
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Product Page - {router.query.productId}</h1>
    </main>
  );
}
