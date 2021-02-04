import React from 'react'
import HeroImg from './HeroImg';



function Section(props) {
    return (
        <section className={props.className}>
            <div className={props.classNameDiv}>
                {props.children}
            </div>
            <HeroImg />
        </section>
    )
}

export default Section
