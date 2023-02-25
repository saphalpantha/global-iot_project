import React from 'react'
import Image from 'next/image'
import img from "../../public/social/whyus.png"
import classes from "./Us.module.css"
import Card from '../UI/Card/Card'

import us1 from "../../public/social/us1.svg"
import us2 from "../../public/social/us2.svg"
import us3 from "../../public/social/us3.svg"
const Us = () => {
    const data = [
        {id:'a1' , img:us1, title:'Real World Professionals',para:"Our Trainers, Consultants and Auditors are with an average 15+ years of practical and global experience." ,link:"View our team"},
        {id:'a2' , img:us2, title:'Real World Professionals',para:"Our Trainers, Consultants and Auditors are with an average 15+ years of practical and global experience." ,link:"View our team"},
        {id:'a3' , img:us3, title:'Real World Professionals',para:"Our Trainers, Consultants and Auditors are with an average 15+ years of practical and global experience." ,link:"View our team"},
    ]
  return (
    <div className={classes.us_container}>
            <div className={classes.up}>
                    <h1>Why Us</h1>
                    <span>Global Success Systems Advantage</span>
            </div>
            <div className={classes.down}>
                    <div className={classes.us_card}>
                            {data.map(item => {
                                return(
                                    <Card className={classes.component}>
                                        <Card className={classes.img} >
                                            <Image src={item.img} width={150} height={150}  alt="img" />
                                        </Card>
                                        <div className={classes.content}>
                                        <h1>{item.title}</h1>
                                        <p>{item.para}</p>
                                        <span>{item.link}</span>
                                        </div>
                                    </Card>
                                )
                            }) }
                    </div>
                    <div className={classes.image}>
                        <Image src={img} alt="us" width={140} height={140}  />
                    </div>
            </div>
    </div>
  )
}




export default Us