import React from 'react'
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <div className='logo'>
            <h1>Logo</h1>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
         <Link href="/ninjalist"><a>Ninjas</a></Link>
       <Link href="/"><a>Order</a></Link>
     
        <Link href="/"><a>Services</a></Link>
        <Link href="/"><a>Pricing</a></Link>
        <Link href="/"><a>Areas</a></Link>
        <Link href="/"><a>Login</a></Link>
     
       
        </nav>
    )
}


