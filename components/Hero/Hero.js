import React from 'react'
import Image from 'next/image'
import hero from '../../public/social/background.png'
import classes from './Hero.module.css'
import Button from '../UI/Button/Button'
import tagline from '../../public/social/tagline.svg'
import hero_img from '../../public/social/hero_img.svg'

const Hero = () => {
  return (
    <div className={classes.hero}>
        {/* <Image src={hero} width={500} height={500} /> */}
        <div className={classes.hero_left}>
            <div>
            <h1>Improve your <span>business performance </span> by empowering your people</h1>
                
            </div>
            <div>
            <p>Get curated courses and dedicated consultation for your employees at one place.</p>
            </div>
            <div className={classes.hero_image}>
                <Image src={hero_img} className={classes.hero_img} width={450} height={450} alt="img" />
            </div>
            <div className={classes.btns}>
                <div className={classes.course}>
                    <Button className={classes.co}>View Courses</Button>
                </div>
                <div className={classes.works}>
                    <Button className={classes.wo}>How It Works?</Button>
                </div>
            </div>

                <div className={classes.tag}>
                    <div className={classes.tagcontent}>
                        <div className={classes.span}>
                            <span>Are you ready for VUCA Environment ?</span>
                            <span>Why IT Capability Assessment?</span>
                        </div>
                        <div className={classes.badge}>
                            <span>View Article</span>
                            <span>View Article</span>
                        </div>
                    </div>
                    <Image src={tagline} className={classes.tagline} width={60} height={60} />
                </div>
        </div>
        <div className={classes.hero_right}>

        </div>
    </div>
  )
}

export default Hero