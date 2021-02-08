import React from 'react'

function breadcrumb() {
    return (
        <div className="bg-gray-50 py-3 md:my-10">
            <div className="container mx-auto flex">
                <a className="hover:underline" href="#"><h5 className="md:px-3 text-gray-400 text-sm md:text-lg">Home</h5></a>
                    <div className="px-2 md:px-3 text-gray-400">/</div>
                <a className="hover:underline" href="#"><h5 className="md:px-3 text-gray-400 text-sm md:text-lg">Recipes</h5></a>
                    <div className="px-2 md:px-3 text-gray-400">/</div>
                <a className="hover:underline" href="#"><h5 className="md:px-3 text-sm md:text-lg">Chocolate Eclair Dessert</h5></a>
            </div>
        </div>
    )
}

export default breadcrumb
