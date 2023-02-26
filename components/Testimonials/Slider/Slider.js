import { SwiperSlide, Swiper } from "swiper/react";

import classes from "./Slider.module.css";
import React from "react";
import { Autoplay, EffectFade, Navigation , Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import 'swiper/css/pagination'
import Image from "next/image";
import Card from '../../UI/Card/Card'
import img from '../../../public/social/client.svg'
const data = [
  {
    id: "i1",
    name: "Ricky Master",
    post: "student",
    para: "Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia",
  },
  {
    id: "i2",
    name: "Ricky Master",
    post: "student",
    para: "Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia",
  },
  {
    id: "i3",
    name: "Ricky Master",
    post: "student",
    para: "Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia",
  },
  {
    id: "i4",
    name: "Ricky Master",
    post: "student",
    para: "Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia",
  },
  {
    id: "i5",
    name: "Ricky Master",
    post: "student",
    para: "Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia",
  },
];

const Slider = () => {
  return (
    <div className={classes.swiper_container}>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, EffectFade, Autoplay,Pagination]}
        navigation
        effect
        speed={800}
        loop
        autoplay={true}
        pagination
        grabCursor={true}
        breakpoints={
          {
            768:{
              slidesPerView:1,
              spaceBetween:5,
            },
            1000:{
              slidesPerView:2,
              spaceBetween:20,
            }
          }
        }
      >
        
        {data.map((item) => {
          return (
            <SwiperSlide className={classes.slide}>
              <Card className={classes.card_container}>
                <div className={classes.image}>
                  <Image src={img} width={90} height={90} alt="img" />
                </div>
                <span className={classes.name}>{item.name}</span>
                <span className={classes.post}>{item.post}</span>
                <p className={classes.para}>{item.para}</p>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
