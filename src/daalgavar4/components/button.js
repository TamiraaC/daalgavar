import React from "react";
import styles from './style.module.css'
import { getClasses } from './getClasses'
const Button = ({variant, text, img}) =>  {
        const buttonTypes = {
        black: "black",
        blue: 'blue',
        };
    return (
        <>
            <button className={getClasses(
                [styles.button, styles[`button-${buttonTypes[variant]}`]]
                )}
                >
                <div className="F">
                    <div className="l">
                    <img src={img} alt="" className={variant === "blue" ? styles.displaynone : styles.img}/>
                    </div>
                    <div>
                    <p>{text}</p>
                    </div>
                </div>
            </button>
        </>
    )
}
export default Button