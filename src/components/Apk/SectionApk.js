import React from 'react'
import Gps from '../../images/content/gps.svg'
import Apel from '../../images/content/apple.svg'
import App from '../../images/content/app.png'
import Fade from 'react-reveal/Fade';

function SectionApk() {
    return (
        <section className="w-full flex flex-col md:flex-row justify-center items-center md:px-16">
            <Fade left delay={300}>
            <div className="shadow-lg">
                <img className="w-full h-full object-cover object-center rounded-xl" src={App} alt="" />
            </div>
            </Fade>
            <div className="float md:px-32 text-center">
            <Fade right delay={300}>
                <h1 className="text-2xl">Download our app <br />
                and join the contest
                </h1>
                <p className="text-gray-400 font-xl">In order to improve our cooking skills, <br />
                we do need a food photography </p>
            </Fade>
                <div className="flex mt-6">
                <img className="w-full h-full object-center object-cover animate-bounce" style={{width: '168px', style: '50px'}} src={Apel} alt="" />
                <img className="w-full h-full object-center object-cover animate-bounce ml-6" style={{width: '168px', style: '50px'}} src={Gps} alt="" />
                </div>
            </div>
        </section>

    )
}

export default SectionApk
