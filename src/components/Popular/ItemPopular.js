import React from 'react'
import Fade from 'react-reveal/Fade';


function ItemPopular(props) {
    return (
        <div className="px-4 relative card">
            <Fade bottom delay={props.delayInMS}>
            <div className="rounded-xl overflow-hidden card-shadow" style={{ width: '287px', height: '386px' }}>
                <img src={props.img} alt="cangkir" className="w-full h-full object-cover object-center" />
            </div>
            <h5 className="text-lg font-semibold mt-4">{props.name}</h5>
            <img src={props.rate} style={{ width:"122px" , height:"22px"}}/>
            <a href="#details.html" className="stretched-link"> </a>
            </Fade>
        </div>

    )
}

export default ItemPopular
