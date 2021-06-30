import React from 'react'
export const getStaticPaths= async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();
    
    const paths=data.map((ninja)=>{
        return({
            params:{id:ninja.id.toString()}
        })
    })

    return({
       paths,
       fallback:false
    })


}

export const getStaticProps= async(context)=>{
    const id=context.params.id;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data=await res.json();
    return({
        props:{ninja:data}
    })
}
export default function Detail({ninja}) {
    return (
        <div>
           <h1>{ninja.name}</h1>
           <h4>{ninja.website}</h4>
           <h4>{ninja.address.city}</h4>
         
        </div>
    )
}
