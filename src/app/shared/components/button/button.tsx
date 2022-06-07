
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import './button.css'
export const ButtonComponent = () => {
    const [flip, set] = useState(false);
    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        reset: true,
        reverse: flip,
        delay: 300,
        onRest: () => set(!flip)
    })
    return (
        
        <button className="button-hiro">
            <span className="base-font">Open productions</span>
            <div className="circle-button-hiro">
                <span>4</span>
            </div>
        </button> 
        
        
    )
}