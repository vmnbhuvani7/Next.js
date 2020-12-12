import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <>
            <a style={{ marginRight: 15 }}> <Link href="/About">About</Link></a>
            <a style={{ marginRight: 15 }}><Link href="/Contact_us">Contact_us</Link></a>
        </>
    )
}

export default Nav
