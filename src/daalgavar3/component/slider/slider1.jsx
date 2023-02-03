import React from "react";
import Slider from "react-slick";
import zurag1 from "../../assets/zurag1.webp"
import zurag2 from "../../assets/zurag2.webp"
import zurag3 from "../../assets/zurag3.webp"
import zurag4 from "../../assets/zurag4.webp"
import zurag5 from "../../assets/zurag5.webp"
import zurag6 from "../../assets/zurag6.webp"
import './slider1.css'
const Slider1 = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
    const data = [
        {
            key:1,
            title: "Өвлийн гутал",
            img: zurag1
        },
        {
            key:2,
            title: "Агааржуулагч",
            img: zurag2
        },
        {
            key:3,
            title: "Хүүхдийн хувцас",
            img: zurag3
        },
        {
            key:4,
            title: "Малгай & Ороолт",
            img: zurag4
        },
        {
            key:5,
            title: "Витамин",
            img: zurag5
        },
        {
            key:6,
            title: "Гадуур хувцас",
            img: zurag6
        },
        {
            key:1,
            title: "Өвлийн гутал",
            img: zurag1
        },
        {
            key:2,
            title: "Агааржуулагч",
            img: zurag2
        },
        {
            key:3,
            title: "Хүүхдийн хувцас",
            img: zurag3
        },
        {
            key:4,
            title: "Малгай & Ороолт",
            img: zurag4
        },
        {
            key:5,
            title: "Витамин",
            img: zurag5
        },
        {
            key:6,
            title: "Гадуур хувцас",
            img: zurag6
        },
    ]
    return (
        <div className="slider1">
            <div className="slider1text">
                <h2>
                    Улирлын онцлох
                </h2>
            </div>
            <div className="slider2">
                <Slider {...settings}>
                        {
                            data.map((row)=>(
                                <div key={row.key}>
                                    <img src={row.img} alt="/" />
                                    <h2>{row.title}</h2>
                                </div>
                            ))
                        }
                </Slider>
           </div>
        </div>
    )
}
export default Slider1