import React, { useState } from 'react'
import './ListFooter.css'


function ListFooter(props) {
    const[isOpen, setIsOpen] = useState(false)
    console.log(window)

    const handleFooter = () => {
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    return (
        <div className="md:w-1/4 relative mb-2 ml-2 mt-3">
            <div className="flex items-center justify-between" >
                <h5 className="text-lg font-semibold mb-2 relative text-white">{props.header}</h5>

                <svg onClick={handleFooter} className={`${isOpen ? 'transform rotate-180' : ''} md:hidden cursor-pointer`} width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9.75 7.5L18.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            
            <ul className={`${isOpen ? 'visible footer-menu active' : 'footer-menu'} md:visible  `}>
                <li>
                    <a href="#" className="hover:underline py-1 block text-white">{props.menu1}</a>
                </li>
                <li>
                    <a href="#" className="hover:underline py-1 block text-white">
                        {props.menu2}
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline py-1 block text-white">{props.menu3}</a>
                </li>
            </ul>
        </div>
    )
}

export default ListFooter
