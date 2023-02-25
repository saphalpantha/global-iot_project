import React from 'react'
import classes from './Footer.module.css'
import logo from '../../public/social/logo.svg'
import Image from 'next/image'
import Button from '../UI/Button/Button'

import fb from "../../public/social/fb.svg"
import insta from "../../public/social/insta.svg"
import linkenden from "../../public/social/linkenden.svg"
import yt from "../../public/social/yt.svg"
const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.footer_up}>
            <div className={classes.logo}>
                <Image src={logo} width={200} height={200} alt="logo" style={{fill:'white'}}/>
                <p>Voluptate nulla voluptate non et aute reprehenderit dolor aliquip irure pariatur nisi excepteur.</p>
            </div>
            <div className={classes.about}>
                <ul>
                <span>About Us</span>
                    <li>Company</li>
                    <li>Our Team</li>
                    <li>Our Partners</li>
                    <li>Our Customers</li>
                    <li>Our Carrier</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={classes.links}>
                <ul>
                <span>Links</span>
                    <li>Web Store</li>
                    <li>Privacy Policy</li>
                    <li>Trademarks and Copyright</li>
                    <li>Complaints & Appeal</li>
                    <li>Careers</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div className={classes.news_letter}>
                <div className={classes.letter}>
                    <span>Subscribe to our newsletter</span>
                    <input type="text" placeholder='Your email'/>
                    <Button className={classes.btn}>Subscribe</Button>
                    <span style={{marginTop:'1rem'}}>Follow us on</span>
                    <div className={classes.social}>
                        <div className={classes.style}>
                        <Image src={fb}  width={30} height={30} alt="img" />
                        </div>
                        <div className={classes.style}>
                        <Image src={insta}  width={30} height={30} alt="img" />
                        </div>
                        <div className={classes.style}>
                        <Image src={linkenden}  width={30} height={30} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className={classes.footer_down}>
            <span>©2022 All Rights reserved by Global Success Systems.</span>
        </div>
    </div>
  )
}

export default Footer