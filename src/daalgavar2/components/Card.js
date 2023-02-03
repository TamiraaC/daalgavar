import React from "react";

 const Card = (props) => {
    return(
        <div>
          <h2>{props.title}</h2>
          <p>{props.display}</p>
          <img src={props.img} alt="/"/>
        </div>
    );
 };

 export default Card;