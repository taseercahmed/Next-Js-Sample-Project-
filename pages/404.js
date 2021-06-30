import React from 'react'
import Link from 'next/link'

export default function ErrorPage() {
    return (
        <div className='not-found'>
            <h1>Oooops...</h1>
            <h2>Page cannot be found</h2>
            <p>Go to Back <Link href='/'><a>Homepage</a></Link></p>
        </div>
    )
}
