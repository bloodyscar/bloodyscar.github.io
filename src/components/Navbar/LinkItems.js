import React from 'react'
import {Link} from 'react-router-dom'



function LinkItems(props) {
    return (
        <>
            <li className={props.classList}>
                <Link className={props.anchor} to={props.link}>{props.children}</Link>
            </li>
        </>
    )
}

export default LinkItems
