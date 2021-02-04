import React from 'react'
import ItemTrending from './ItemTrending'
import Flip from 'react-reveal/Flip';

import Trending1 from '../../images/content/trending-1.jpg'
import Trending2 from '../../images/content/trending-2.jpg'
import Trending3 from '../../images/content/trending-3.jpg'
import Trending4 from '../../images/content/trending-4.jpg'

const items = [
    {
        img: Trending1,
        name: 'Amarta Christie',
        menu: 'Alasan King Crab',
        detail: 'Alaskan King Crab steamed briefly and served with melted butter.'
    },
    {
        img: Trending2,
        name: 'Maria Mere',
        menu: 'Ratatouille',
        detail: 'Well-known as vegetable stew hailing from Provence, a region in France.'
    },
    {
        img: Trending3,
        name: 'Leslie Karen',
        menu: 'Turkey Salad',
        detail: 'Delicious in a sandwich or served on a lettuce leaf.'
    },
    {
        img: Trending4,
        name: 'Zhafer Pedro',
        menu: 'Lasagna Authentic',
        detail: 'Jell-O and green salads featuring tart, delicious cranberries.'
    }
]






function TrendingSection(props) {
    return (
        <section className="container mx-auto mt-16 mb-10 relative" id="trending">
            <div className="md:py-12">
            <Flip left delay={500}>
                <h1 className="text-3xl font-semi-bold text-center">What we're <br className="md:hidden" /> cooking now</h1>
            </Flip>
            </div>
            <div className="w-full flex flex-wrap relative">
                {
                    
                    items.map((item, index) => (
                        
                        <ItemTrending key={index} img={item.img} name={item.name} menu={item.menu} detail={item.detail} delayInMS={index * 500}/>
                    ))
                    
                }
            </div>
        </section>
    )
}

export default TrendingSection
