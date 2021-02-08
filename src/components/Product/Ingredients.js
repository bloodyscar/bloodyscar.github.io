import React from 'react'

import Fade from 'react-reveal'

function Ingredients() {
    return (
        <div className="container mx-auto">
            <Fade bottom delay={900}>
            {/* START Ingredients  */}
            <div className="mt-24">
                <h3 className="md:text-2xl font-semibold">Ingredients</h3>
                <p className="text-gray-400 my-2">• 2 individual packages graham crackers</p>
                <p className="text-gray-400 my-2">• 2 (3 gr) packages instant vanilla pudding mix</p>
                <p className="text-gray-400 my-2">• 3 cups of milk</p>
                <p className="text-gray-400 my-2">• 1 (8 gr) container frozen whipped topping, thawed</p>
                <p className="text-gray-400 my-2">• 1 (16 gr) package prepared chocolate frosting</p>
            </div>
            {/* END Ingredients  */}
            </Fade>
        </div>
    )
}

export default Ingredients
