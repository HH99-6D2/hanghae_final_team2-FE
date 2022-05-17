import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "../elements";
const AddTheme = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2> 테마</h2>
      <Grid inlineStyles='border:1px solid'>
        <Slider {...settings}>
          <div width='200px'>
            <h3>내용물 1 이다</h3>
          </div>
          <div>
            <h3>내용물 2 이다</h3>
          </div>
          <div>
            <h3>내용물 3 이다</h3>
          </div>
        </Slider>
      </Grid>
    </>
  );
};

export default AddTheme;
