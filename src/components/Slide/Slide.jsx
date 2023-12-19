/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Children } from "react";
import "./Slide.scss";
import Slider from "react-slick";

const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
      <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
      {children}
       </Slider>
      </div>
    </div>
  );
};

export default Slide;