import React, { useState } from 'react'
import Container from './Container'
import classes from './Header.module.css'
import msg from '../../public/social/mail.svg'
import ph from '../../public/social/phone.svg'
import Image from 'next/image'
import search from '../../public/social/search.svg'

import fb from "../../public/social/fb.svg"
import insta from "../../public/social/insta.svg"
import linkenden from "../../public/social/linkenden.svg"
import yt from "../../public/social/yt.svg"
import logo from '../../public/social/logo.svg'
import Form from './SearchUI/Form'
import Navbar from './Nav/Navbar'

import nav_bars from '../../public/social/nav_bars.svg'
// import fb from "../../public/social/fb.svg"
const Header = () => {

  return (

    <div className={classes.main_header}>
        <div className={classes.header_up}>
            <div className={classes.left}>
                <div>
                    <Image src={msg} alt="msg" width={20} height={20}/>
                <span>
                demo@gssgroup.com
                </span>
                </div>
                <div>
                    <Image src={ph} alt="phone" width={20} height={20}/>
                    <span>
                    7894561236
                    </span>
                </div>
            </div>

            <div className={classes.right}>
                <span>Follow Us on: </span>
                <div className={classes.social}>
                    <Image src={insta} alt="phone" width={20} height={20}/>
                    <Image src={yt} alt="phone" width={20} height={20}/>
                    <Image src={fb} alt="phone" width={20} height={20}/>
                    <Image src={linkenden} alt="phone" width={20} height={20}/>
                
                </div>
                <span>Contact us</span>
            </div>
        </div>

        <div className={classes.header_down}>
                <div className={classes.search_logo}>
                    <Image src={search} alt="search" width={30} height={30}/>
                </div>
            <div className={classes.header_down_left}>

                <div className={classes.nav_bars}> 
                    <Image src={nav_bars} height={30} width={30} alt="bars" />
                </div>
                <div className={classes.logo}>
                    <Image src={logo} alt="logo" width={200} height={130}/>
                </div>
                <Form/>
            </div>
            <div className={classes.header_down_right}>
                <Navbar/>
            </div>
        </div>
    </div>
  )
}

export default Header