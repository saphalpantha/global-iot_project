import React, { Fragment } from "react";
import img from "../../public/social/testimonial_logo.png";
import classes from "./Testimonials.module.css";
import Image from "next/image";
import left from "../../public/social/left_circle.svg";
import right from "../../public/social/right_circle.svg";
import Slider from "./Slider/Slider";
import { Button, Card } from "@mui/material";
import client_logo1 from "../../public/social/client_logo1.svg";
import client_logo2 from "../../public/social/client_logo2.svg";
import client_logo3 from "../../public/social/client_logo3.svg";
import client_logo4 from "../../public/social/client_logo4.svg";

const clients = [
  { id: "c1", img: client_logo1 },
  { id: "c2", img: client_logo2 },
  { id: "c3", img: client_logo3 },
  { id: "c4", img: client_logo4 },
];
const Testimonials = () => {
  return (
    <Fragment>
      <div className={classes.testimonials}>
        <div className={classes.image}>
          <div className={classes.img}>
          </div>
        </div>
        <div className={classes.upper}>
          <h1>What our customer say?</h1>
          <span>
            We belive in 100% client satisfaction and here is what they say
            about us.
          </span>
        </div>
      </div>
      <div className={classes.testimonials_contain}>
        <div className={classes.slider_container}>
          <Slider />
        </div>
        <div className={classes.btn}>
          <Button className={classes.viewmore}>View More</Button>
        </div>
        <div className={classes.lower}> 
        <h1>Our Major Clients</h1>
        <span>Our esteemed clients around the world.</span>

        </div>
        <div className={classes.clients}>
          {clients.map((item) => {
            return (
              <Card className={classes.card}> 
                <div>
                  <Image src={item.img} width={100} height={100} alt="img" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
