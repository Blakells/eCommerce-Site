import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'


const Nav = () => {
    return (
        <NavStyles>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/sell'>
                <a>Sell</a>
            </Link>
            <Link href='/items'>
                <a>items</a>
            </Link>
            <Link href='/signup'>
                <a>signup</a>
            </Link>
            <Link href='/orders'>
                <a>orders</a>
            </Link>
            <Link href='/me'>
                <a>me</a>
            </Link>
        </NavStyles>
    )
}

export default Nav
