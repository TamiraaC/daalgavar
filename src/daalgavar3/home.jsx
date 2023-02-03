import React from "react";
import Banner from "./component/slider/banner";
import Slider1 from "./component/slider/slider1";
import Slider2 from "./component/slider/slider2";
import './home.css'

const Home = () =>{
    return (
        <div>
            <Banner/>
            <Slider1/>
            <Slider2/>
        </div>
    )
}
export default Home