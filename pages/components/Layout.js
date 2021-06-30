import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
export default function Layout({children}) {
    return (
        <div className='content'>
           <NavBar></NavBar>
           {children}
           <Footer></Footer> 
        </div>
    )
}
