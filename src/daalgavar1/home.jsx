import React from "react";
import Index from "./components";
import File from "./components/file";
import "./home.css"
const Home = () => {
    return (
        <div className="home">
            <Index/>
            <File/>
        </div>
    )
}
export default Home