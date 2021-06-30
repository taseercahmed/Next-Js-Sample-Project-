import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Ninjasstyle.module.css'

export const getStaticProps= async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();
    return({
        props:{ninjslist:data}
    })
}
export default function ninjalist({ninjslist}) {
    return (
        <div>
           {
            ninjslist.map((itm)=>{
                  return(
                      <Link href={"/ninjalist/"+itm.id}
                      key={itm.id}>
                            <a className={styles.single}>
                            <h2>{itm.name}</h2>
                            </a>
                      </Link>
                  )  
               })
           }  
        </div>
    )
}
