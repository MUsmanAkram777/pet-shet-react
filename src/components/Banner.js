import React, { Component } from "react";
import Slider from "react-slick";
import { SliderImages } from '../data/SliderImages'

export default class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows:true
    };
    return (
        <div style={{width:'100%'}}>
            <Slider {...settings} >
                {
                    SliderImages.map( item => {
                        return(
                            <div className="petSlideImg">
                                <img src={item.img} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
  }
}