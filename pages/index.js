import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
   <div >
   <Head>
  <title>   Home</title>
   </Head>
    <h1 className={styles.title}>Welcome to Zapp Laundry</h1>
    <p className={styles.text}>

    ZAPP LAUNDRY is a Network of the very best Dry Cleaners. We provide the finest Dry Cleaning & Laundry service in the business combined with great customer service and super convenient collection and delivery at times that suit you.
    
    </p>

   </div>
  )
}
