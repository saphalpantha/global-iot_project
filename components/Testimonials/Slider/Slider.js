import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';
import classes from './Slider.module.css';
import { Card } from '@mui/material';
import img from '../../../public/social/client.svg';

import Image from 'next/image';
import { Fragment } from 'react';

const data = [
  {
    id: 'i1',
    name: 'Ricky Master',
    post: 'student',
    para:
      'Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia',
  },
  {
    id: 'i2',
    name: 'Ricky Master',
    post: 'student',
    para:
      'Velit sunt mollit Lorem cillum dolor consequat veniam adipisicing officia',
  },
];


function imgUrl() {
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <Card className={classes.card}>
            <div className={classes.image}>
              <Image src={img} width={90} height={90} alt="img" />
            </div>
            <span className={classes.name}>{item.name}</span>
            <span className={classes.post}>{item.post}</span>
            <p className={classes.para}>{item.para}</p>
          </Card>
        );
      })}
    </Fragment>
  );
}

function createSlide() {
  return (
    <SwiperSlide>
      <div className={classes.slider}>{imgUrl()}</div>
    </SwiperSlide>
  );
}

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      // spaceBetween={20}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,

        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
          spaceBetween:10,
        },
      }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
};

export default Slider;

