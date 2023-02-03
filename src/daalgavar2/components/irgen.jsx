import React from "react";
import './irgen.css'
const Irgen = (props) => {
    return (
        <div className="irgen">
            <div className="card">
                 <div className="CardContainer">
                     <div className="CardContainerCard">
                          <div className="CardCard1">
                              <div className="CardCard1img">
                                 <img src={props.img} alt="/"/>
                              </div>
                              <div className="CardCard1text">
                                   <h2>{props.title}</h2>
                                   <p>{props.display}</p>
                              </div>
                          </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Irgen