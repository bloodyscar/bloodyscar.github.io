import React from 'react';
import Fade from 'react-reveal/Fade';




function ItemTrending(props) {
    return (
        <>
        <div className="card md:w-1/4 px-4 py-6 md:py-0">
        <Fade bottom delay={props.delayInMS} >
            <div className="w-full">
                <a href="/recipes"><img
                    src={props.img}
                    className="w-full h-full object-center object-cover rounded-xl hover:shadow-lg transition duration-300"/></a>
            </div>
            <div className="flex flex-col text-center">
                <h5 className="text-gray-400 mt-2 text-sm">
                    By <span className="font-semibold">{props.name}</span>
                </h5>
                <h3 className="text-2xl mt-2">{props.menu}</h3>
                <p className="text-gray-400">
                    {props.detail}
                </p>
            </div>
            </Fade>
        </div>
        </>
    )
}

export default ItemTrending;
