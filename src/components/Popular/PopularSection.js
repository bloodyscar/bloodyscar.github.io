import React from 'react'
import Carousel1 from '../../images/content/carousel-1.jpg'
import Carousel2 from '../../images/content/carousel-2.jpg'
import Carousel3 from '../../images/content/carousel-3.jpg'
import Carousel4 from '../../images/content/carousel-4.jpg'
import Carousel5 from '../../images/content/carousel-5.jpg'
import Star from '../../images/content/star.png'


import ItemPopular from './ItemPopular'

const items = [
    {
        img: Carousel1,
        name: 'Strawberry Milkshake',
        rate: Star
    },
    {
        img: Carousel2,
        name: 'Icecream Golevato',
        rate: Star
    },
    {
        img: Carousel3,
        name: 'Waffle Peach Sugar',
        rate: Star
    },
    {
        img: Carousel4,
        name: 'Apple Pie Premium X Pro',
        rate: Star
    },
    {
        img: Carousel5,
        name: 'Cake Homemade',
        rate: Star
    },
    {
        img: Carousel5,
        name: 'Cake Homemade',
        rate: Star
    }
]
function PopularSection() {
    return (
        <>
        <section className="py-16 flex flex-col">
            <div className="container mx-auto mb-11">
                <h2 className="text-2xl md:text-3xl mx-3 font-semi-bold text-center">Popular Searches: Dessert</h2>
            </div>

            <div className="overflow-x-hidden px-4" id="carousel">
                <div className="container mx-auto"></div>
                <div className="flex -mx-4 flex-row relative">
                    {
                        items.map((item, index) => (
                            <ItemPopular key={index}  img={item.img} name={item.name} rate={item.rate} delayInMS={index * 300 }/>
                        ))
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default PopularSection;
