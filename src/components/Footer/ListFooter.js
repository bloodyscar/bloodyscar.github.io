import React from 'react'

function ListFooter(props) {
    return (
        <div class="md:w-1/4 relative mb-2 ml-2 mt-3">
            <h5 class="text-lg font-semibold mb-2 relative text-white">{props.header}</h5>
            <ul class="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                    <a href="#" class="hover:underline py-1 block text-white">{props.menu1}</a>
                </li>
                <li>
                    <a href="#" class="hover:underline py-1 block text-white">
                        {props.menu2}
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline py-1 block text-white">{props.menu3}</a>
                </li>
            </ul>
        </div>
    )
}

export default ListFooter
