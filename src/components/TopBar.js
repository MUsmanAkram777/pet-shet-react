import React from 'react'
import Slider from "react-slick";
import {TopBarText} from '../data/TopBarText'
import parse from 'html-react-parser';

export default function TopBar() {
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000
      };
    return (
        <div style={{width:'100%'}}>
        <Slider {...settings} >
            {
                TopBarText.map( item => {
                    return(
                        <div>
                            <div className="topBar" 
                                style={{backgroundColor:item.backgroundColor,color:item.color}}  
                            >
                                {parse(item.text)}
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
    )
}
