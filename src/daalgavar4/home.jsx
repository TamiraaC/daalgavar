import React from "react";
import Button from "./components/button";
import img1 from "./assets/tamiraa3.jpg";
import img2 from "./assets/tamiraa4.jpg";
import img3 from "./assets/tamiraa3.jpg"
import Youtube from "./components/youtube";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="aa">
        <div className="C">
          <Button img={img2} />
        </div>
        <Button variant="black" text="ХАХАХАХ" img={img1} />
        <Button variant="black" text="ХАХАХАХ" img={img2} />
        <Button variant="black" text="ХАХАХАХ" img={img3} />
        <Button variant="black" text="ХАХАХАХ" img={img1} />
        <Button variant="black" text="ХАХХАХА" img={img2} />
      </div>
      <div className="gg">
        <div className="dd">
          <Button variant="blue" text="НҮҮР ХУУДАС" img={img1} />
          <Button variant="blue" text="ГАРЧИГ" img={img1} />
          <Button variant="blue" text="ХӨӨРХӨН" img={img1} />
          <Button variant="blue" text="ХХАХАХ" img={img1} />
        </div>
        <div>
          <Youtube />
        </div>
      </div>
    </>
  );
};
export default Home;
