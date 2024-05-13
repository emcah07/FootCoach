import React from 'react';
import logo from "../pics/FC_Bayern_München_logo_(2017).svg.png"
import './card.css'
import davies from "../pics/davies A.webp"


const Card = () => {
    return (
        <>
            <div className={"cardleft"}>
                <div className={"cardinside2"}>
                    <img src={davies} alt=""/>
                </div>
                <h4>
                    A. Davies
                </h4>
                <div className={"cardinside"}>
                    <img src={logo} alt=""/>
                    <img src={logo} alt=""/>
                    <img src={logo} alt=""/>
                </div>
                <div className="cardtype">
                    <div className={"cardinfo"}>
                        <h6>
                            Level
                        </h6>
                        <h4>
                            Lv.1 / 49
                        </h4>
                    </div>
                    <div className={"cardinfo"}>
                        <h6>
                            Stronger foot
                        </h6>
                        <h4>
                            Left
                        </h4>
                    </div>
                    <div className={"cardinfo"}>
                        <h6>
                            Weak foot usage
                        </h6>
                        <h4>
                            3 / 4
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;