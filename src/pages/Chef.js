import React from 'react'
import Typical from 'react-typical'

function Chef() {
    return (
        <>
            <div className="flex justify-center items-center h-screen leading-tight">
                <h1 className="text-3xl md:text-6xl text-red-500 animate-bounce text-center ">Sorry, <br/> 
                    <Typical loop={Infinity}  steps={['404 NOT FOUND', 1000, '', 1000]} />
                </h1>
            </div>
        </>
    )
}

export default Chef
