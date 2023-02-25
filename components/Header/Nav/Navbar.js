import React from 'react'
import Image from 'next/image'

import cart from "../../../public/social/cart.svg"
import classes from './NavBar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
    <nav className={classes.nav} >
        <ul className={classes.nav_flex}>
            <div>
                <Link href="/">
            <li>Training</li>
                

                </Link>
            </div>
                <Link href="/">
            <li>Consulting</li>

                </Link>
                <Link href="/">
            <li>Solutions</li>

                </Link>
                <Link href="/">
            <li>WebStore</li>

                </Link>
                <Link href="/">
            <li>Resources</li>

                </Link>
                <Link href="/">
            <li>About Us</li>

                </Link>
            <Link href="/">
            <Image src={cart} alt="cart" width={20} height={20} />
            </Link>
            <div className={classes.circle}>
                <h1>S</h1>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar



