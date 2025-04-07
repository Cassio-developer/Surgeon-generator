import Image from "next/image";
import styles from "./page.module.css";
import  PageGerador from '@/app/pageGerador';

export default function Home() {
  return (
  <>
       <main style={{ padding: 32 }}>
          <PageGerador />
        </main>
  </>
  )

}
