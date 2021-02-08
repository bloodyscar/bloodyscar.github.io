import React from 'react'
import Fade from 'react-reveal'

import Button from '../../elements/Button'
import imgTesti from '../../images/content/testi.jpg'
import Star5 from '../../images/content/5star.svg'


function Review({className}) {
    return (
        <>
            <Fade right delay={500} >
            <div className="hidden lg:block w-full md:w-1/2 relative md:px-20">
                <div className="mt-20 md:mt-0">
                    <h2 className="md:text-3xl font-semibold text-lg">Reviews (1933)</h2>
                </div>
                <div className="bg-gray-600 px-6 py-6 md:px-10 md:py-10 mt-2 md:mt-12 rounded-lg">
                    <div className="flex items-center relative">
                        <div className="absolute z-10 md:bg-white rounded-full overflow-hidden" style={{ width: '84px', height: '84px' }} />
                        <div style={{ width: '80px', height: '80px' }} className="relative z-20 left-0.5">
                            <img className="w-full h-full rounded-full" src={imgTesti} />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-white text-lg">Jannet Charlotte</h3>
                            <p className="text-gray-400">Sushi Addict</p>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <img src={Star5} />
                        <p className="text-sm text-gray-300 pl-2">06/02/2021</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-white">"I have been making this exact recipe (minus the can frosting, see my frosting <br />
                        recipe below) for almost twenty years now. This is a great make ahead <br />
                        dessert to take for gatherings because you really do have to make this the <br />
                        night before or it won't taste . . .
                    </p>
                        <a href="#" className="text-blue-500">More review</a>
                    </div>
                </div>


            </div>
            </Fade>
        </>
    )
}

export default Review
