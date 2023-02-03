import React from "react";
import Slider from "react-slick";
import './banner.css'
import banner1 from "../../assets/banner2.webp"
import banner2 from "../../assets/banner1.webp"
import banner3 from "../../assets/banner3.webp"
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
      };
    const data = [
        {
            key:1,
            img: banner1
        },
        {
            key:2,
            img: banner2
        },
        {
            key:3,
            img: banner3
        },
    ]
    return (
        <div className="banner">
            <Slider>
                {
                    data.map((row)=>(
                        <div key={row.key}>
                            <img src={row.img} alt="/"/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
export default Banner