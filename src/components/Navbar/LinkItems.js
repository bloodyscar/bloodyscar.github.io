import React from 'react'
import { NavLink } from 'react-router-dom'



function LinkItems(props) {
    return (
        <>
            <li className="hover:underline py-3">
                <NavLink exact className="px-6 text-white" to="/" >Home</NavLink>
            </li>
            <li className="hover:underline py-3">
                <NavLink className="px-6 text-white" to="/recipes" >Recipes</NavLink>
            </li>
            <li className="hover:underline py-3">
                <NavLink className="px-6 text-white" to="/foods">Food</NavLink>
            </li>
            <li className="hover:underline py-3">
                <NavLink className="px-6 text-white" to="/chef">Chef</NavLink>
            </li>

        </>
    )
}

export default LinkItems
