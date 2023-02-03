import React from "react";
import Slider from "react-slick";
import zurag1 from "../../assets/zurag.jpeg"
import zurag2 from "../../assets/zurag7.jpeg"
import zurag3 from "../../assets/zurag8.jpg"
import zurag4 from "../../assets/zurag9.jpeg"
import zurag5 from "../../assets/zurag10.jpeg"
import zurag6 from "../../assets/zurag11.jpeg"
import zurag7 from "../../assets/zurag12.jpeg"
import zurag8 from "../../assets/zurag13.jpeg"
import zurag9 from "../../assets/zurag14.jpg"
import zurag10 from "../../assets/zurag15.jpg"
import './slider2.css'
const Slider2 = () => {
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
            title: "THE TRUCKER JACKET",
            diplay: "Цамц",
            little: "239,500 ₮",
            img: zurag1
        },
        {
            key:2,
            title: "SHIRT ARTHUR",
            diplay: "Хэтэвч",
            little: "149,900 ₮",
            img: zurag2
        },
        {
            key:3,
            title: "M BELT",
            diplay: "Цамц",
            little: "149,900 ₮",
            img: zurag3
        },
        {
            key:4,
            title: "Slim fit thousand striped ",
            diplay: "Үнэртэй ус (Eau de parfums)",
            little: "149,900 ₮",
            img: zurag4
        },
        {
            key:5,
            title: "SHIRT ARTHUR",
            diplay: "Товчтой цамц",
            little: "149,900 ₮",
            img: zurag5
        },
        {
            key:6,
            title: "SHIRT ARTHUR",
            diplay: "Чөлөөт загварлаг хүрэм, куртка",
            little: "149,900 ₮",
            img: zurag6
        },
        {
            key:7,
            title: "SHIRT ARTHUR",
            diplay: "Хантааз",
            little: "149,900 ₮",
            img: zurag7
        },
        {
            key:8,
            title: "SHIRT ARTHUR",
            diplay: "Бугуйн цаг",
            little: "149,900 ₮",
            img: zurag8
        },
        {
            key:9,
            title: "SHIRT ARTHUR",
            diplay: "Вакс",
            little: "149,900 ₮",
            img: zurag9
        },
        {
            key:10,
            title: "SHIRT ARTHUR",
            diplay: "Цамц",
            little: "149,900 ₮",
            img: zurag10
        },
        
    ]
    return (
        <div className="slider2">
            <div className="slider2text">
                <h2>
                    Улирлын онцлох эрэгтэй
                </h2>
            </div>
            <div className="slider3">
                <Slider {...settings}>
                        {
                            data.map((row)=>(
                                <div key={row.key}>
                                    <img src={row.img} alt="/" />
                                    <h2>{row.title}</h2>
                                    <h5>{row.diplay}</h5>
                                    <span>{row.little}</span>
                                </div>
                            ))
                        }
                </Slider>
           </div>
           <div className="slider4">
             <button>Бүгдийг үзэх</button>
           </div>
        </div>
    )
}
export default Slider2