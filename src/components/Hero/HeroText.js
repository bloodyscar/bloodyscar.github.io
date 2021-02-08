import React from 'react'
import Fade from 'react-reveal/Fade';


import SectionHero from './SectionHero'




function HeroText(props) {
    
    return (
        <>

            <SectionHero
                className={`container mx-auto w-full md:flex justify-between items-center md:mb-32`}
                classNameDiv={`mt-20 md:mt-0 w-full md:w-1/2 absolute z-20 text-center md:text-left md:relative md:pl-10 flex flex-col justify-center`}>
                <>
                <Fade left delay={300}>
                    <h1 className="md:text-5xl text-xl font-semibold leading-tight text-white md:text-black">
                        Learn every Recipe <br />
                        Food with us
                    </h1>
                    <p className="md:text-lg mt-3 text-white md:text-black">
                        When you create something that cooked by<br />
                        yourself, you will be proud
                    </p>
                    <div className="mt-6">
                        <a
                            href="#trending"
                            className="bg-green-800 hover:bg-green-700 py-3 px-6 rounded-xl text-white animate-bounce">
                                Explore Recipe
                        </a>
                    </div>
                </Fade>
                </>
            </SectionHero>
            

        </>
    )
}

export default HeroText;
