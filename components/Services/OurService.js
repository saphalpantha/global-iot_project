import React from 'react'
import Card from '../UI/Card/Card'
import classes from './OurService.module.css'
import Image from 'next/image'
import ser0 from '../../public/social/ser0.svg'
import ser1 from '../../public/social/ser1.svg'
import ser2 from '../../public/social/ser2.svg'
import ser3 from '../../public/social/ser3.svg'
import Button from '../UI/Button/Button'

const data = [
    {
        id:'s1', img:ser0, title:'Training', para:'We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....'
    },
    {
        id:'s2', img:ser1, title:'Consulting', para:'We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....'
    },
    {
        id:'s3', img:ser2, title:'Web Store', para:'We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....'
    },
    {
        id:'s4', img:ser3, title:'Solutions', para:'We help you to gain the knowledge, skills and practical application of the subjects. Check certification courses and other programs....'
    },

]
const OurService = () => {
  return (
    <div className={classes.service_main}>
        <div className={classes.service_container}>
            <div className={classes.top}>
                <h1>Our Services</h1>
                <p>Making you industry ready is our responsiblity</p>
            </div>
                <div className={classes.component}>
                    {data.map(item => {
                        return(
                            <Card className={classes.service_card}>
                                <Card className={classes.img}>
                                        <Image src={item.img} alt="service_img" width={100} height={100}/>
                                </Card>
                                <div className={classes.service_contain}>
                                    <h1>{item.title}</h1>
                                    <p>{item.para}</p>
                                    <Button className={classes.button_service}>View Course</Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
        </div>
    </div>
  )
}

export default OurService