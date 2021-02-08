import React, { useEffect, useState } from 'react'

import MainImg from '../../images/content/preview.jpg'
import Preview2 from '../../images/content/preview2.jpg'
import Preview3 from '../../images/content/preview3.jpg'
import Preview4 from '../../images/content/preview4.jpg'
import Preview5 from '../../images/content/preview5.jpg'

const products = [
    {
        src: [MainImg, Preview2, Preview3, Preview4]
    }
]



function ItemCard(props) {
    const [idx, setIdx] = useState(MainImg);

    const handleTab = (img) => {
        setIdx(img)
        console.log(img)
    }

    return (
        <div className="w-full md:w-5/6 relative card justify-center">
            {
                products.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="relative justify-center w-full img-main" style={{height: "385px"}}>
                                <img className="w-full rounded-xl h-full object-cover object-center" src={idx} />
                            </div>
                            <div className="flex justify-evenly ml-3 md:ml-6 absolute w-11/12 bg-white card-preview -bottom-16 md:-bottom-16 shadow-lg rounded-xl">
                                {
                                    item.src.map((img, index) => {
                                        return (
                                            <div key={index} className="px-3 py-3 cursor-pointer" style={{width: "150px", height:"110px"}} onClick={() => handleTab(img)}>
                                                <img className="w-full h-full rounded-lg object-cover" src={img} />
                                            </div>
                                        )

                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ItemCard
