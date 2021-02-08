import React from 'react'

import Card from './Card'
import Review from './Review'
import Directions from './Directions'
import Ingredients from './Ingredients'


function SectionProduct(props) {
    return (
        <>
        <section className="w-full container mx-auto block md:flex">
            {/* START Card  */}
                <Card />
            {/* END Card  */}
            <Review />
            
        </section>

        <Ingredients/>
        
        <Directions />

        </>
    )
}

export default SectionProduct
