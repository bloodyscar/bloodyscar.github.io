import React from 'react'
import Fade from 'react-reveal/Fade';

import ImgHero from '../../images/content/hero.png'

function HeroImg() {
    return (
        <Fade right delay={300}>
        
        <div className="md:mt-20 w-full md:w-1/2 relative md:mr-10 shadow-xl rounded-xl hero-image overlay">
            <img
                className="w-full h-full object-center object-cover rounded-xl shadow-sm"
                src={ImgHero}/>
        </div>
        </Fade>
    )
}

export default HeroImg
