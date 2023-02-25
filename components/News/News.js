import React from 'react'
import img from '../../public/social/news.png'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './News.module.css'
import Image from 'next/image'
import left from "../../public/social/left.svg"
import right from "../../public/social/right.svg"
const News = () => {


    const data = [
        {id:'n1', img:img, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.', date:'By Himanshu , 03/02/2022'},
        {id:'n2', img:img, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.', date:'By Himanshu , 03/02/2022'},
        {id:'n3', img:img, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.', date:'By Himanshu , 03/02/2022'},
        {id:'n4', img:img, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.', date:'By Himanshu , 03/02/2022'},
    ]
  return (
    <div className={classes.container}>
                <h1>Latest News</h1>
            <div className={classes.down}>

                <div className={classes.contain}>
                <div className={classes.arrow}>
                <Image style={{margin:'1rem auto'}} src={left} alt="left" width={30} height={30} />
                </div>
                    {data.map(item => {
                        return(

                            <Card className={classes.card}>
                            <div className={classes.img}>
                                <Image src={item.img} width={260} height={200} alt="img" />
                            </div>
                            <div className={classes.typo}>
                                <span>{item.title}</span>
                                <br></br>
                                <span>{item.date}</span>
                                <Button className={classes.btn}>Read More</Button>
                            </div>
                        </Card>
                            )
                    })}
                    <div className={classes.arrow}>
                    <Image style={{margin:'1rem auto'}} src={right} alt="left" width={30} height={30} />
                </div>

                </div>
                <Button className={classes.view_more}>View more</Button>
            </div>
    </div>
  )
}

export default News