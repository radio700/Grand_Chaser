import { useState, useEffect } from "react";
import btnStyle from "./Button.module.css"

function Button({text,className}){
    /*
    * use state and Effect
    */

    useEffect(() =>{

    },[])

    /*
    * User Function
    */


    /*
    * HTML {javascript}
    */
    return(
        <div>
            <button 
                // className={`${btnStyle}.${className}`}
                className={btnStyle.primary}
                style={{
                    height : "30px",
                    width : "80px"
                }}
            >{text}</button>
        </div>
    )
}

export default Button;