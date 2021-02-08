import React from 'react'
import Fade from 'react-reveal'

import Cek from '../../images/content/cek.svg'

function Directions() {
    return (
        <>
            {/* START Directions  */}
            <Fade bottom delay={1200} >
            <hr className="mt-4" />
            <div className="bg-gray-100 py-3">
                <div className="container mx-auto">
                    <h3 className="md:text-2xl font-semibold">Directions</h3>
                    <div className="mt-2">
                        <div className="flex items-center">
                            <img src={Cek} /><h3 className="ml-2">Step 1</h3>
                        </div>
                        <div>
                            <p className="text-gray-500 mt-2">2 individual packages graham crackers</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="flex items-center">
                            <img src={Cek} /><h3 className="ml-2">Step 2</h3>
                        </div>
                        <div>
                            <p className="text-gray-500 mt-2">
                                In a large bowl, combine pudding mix and milk; stir well. Mix whipped topping into <br />
                            pudding mixture. Spread half of mixture over graham cracker layer. Top with <br />
                            another layer of graham crackers and the remaining pudding.
                        </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="flex items-center">
                            <img src={Cek} /><h3 className="ml-2">Step 3</h3>
                        </div>
                        <div>
                            <p className="text-gray-500 mt-2">
                                Top all with a final layer of graham crackers and frost with chocolate frosting. <br />
                            Refrigerate at least two hours before serving to allow the graham crackers to <br />
                            soften.
                        </p>
                        </div>
                    </div>



                </div>
            </div>
            <hr />
            </Fade>
            {/* END Directions  */}
        </>
    )
}

export default Directions
