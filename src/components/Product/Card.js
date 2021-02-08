import React from 'react'
import ItemCard from './ItemCard'
import Star5 from '../../images/content/5star.svg'
import Review from './Review'
import Fade from 'react-reveal'

function Card() {
    return (
        <>
        <Fade left delay={500}>
        <div className="w-full md:w-1/2 relative">
            <h1 className="text-xl md:text-3xl font-semibold">Chocolate Eclair Dessert</h1>
            <div className="flex items-center mt-2">
                <img src={Star5} />
                <p className="text-gray-400 md:ml-2 text-sm text-sm">&nbsp; 1,574 Ratings </p>
                <p className="text-gray-400 md:ml-2 text-sm hidden md:block">&#124; by Adit Hernowo &#124;</p>
                <p className="text-gray-400 md:ml-2 text-sm hidden md:block">Level: Expert</p>
            </div>
            <div className="my-3">
                <svg className="absolute -z-5" width="65" height="42" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.8 26.2C0.8 23.4 1.33333 20.5333 2.4 17.6C3.6 14.6667 5.2 11.8667 7.2 9.19999C9.2 6.53333 11.4 4.39999 13.8 2.79999C16.2 1.06666 18.6 0.199989 21 0.199989C22.8667 0.199989 24.4 0.666657 25.6 1.59999C26.9333 2.39999 27.6 3.79999 27.6 5.79999C27.6 8.19999 26.7333 9.59999 25 9.99999C23.4 10.4 21.8 11.0667 20.2 12C18.4667 12.9333 17.0667 14.2667 16 16C15.0667 17.6 14.6 19.3333 14.6 21.2C14.6 22.6667 15.0667 23.9333 16 25C17.0667 25.9333 18.4 26.4 20 26.4C20.9333 26.4 21.8667 26.2667 22.8 26C23.8667 25.7333 24.7333 25.3333 25.4 24.8C26.4667 25.4667 27.2667 26.2667 27.8 27.2C28.4667 28.1333 28.8 29.3333 28.8 30.8C28.6667 32.8 27.8667 34.6 26.4 36.2C25.0667 37.8 23.3333 39.0667 21.2 40C19.0667 40.9333 16.9333 41.4 14.8 41.4C10.6667 41.4 7.26667 40.1333 4.6 37.6C2.06667 34.9333 0.8 31.1333 0.8 26.2ZM36.8 26.2C36.8 23.4 37.3333 20.5333 38.4 17.6C39.6 14.6667 41.2 11.8667 43.2 9.19999C45.2 6.53333 47.4 4.39999 49.8 2.79999C52.2 1.06666 54.6 0.199989 57 0.199989C58.8667 0.199989 60.4 0.666657 61.6 1.59999C62.9333 2.39999 63.6 3.79999 63.6 5.79999C63.6 8.19999 62.7333 9.59999 61 9.99999C59.4 10.4 57.8 11.0667 56.2 12C54.4667 12.9333 53.0667 14.2667 52 16C51.0667 17.6 50.6 19.3333 50.6 21.2C50.6 22.6667 51.0667 23.9333 52 25C53.0667 25.9333 54.4 26.4 56 26.4C56.9333 26.4 57.8667 26.2667 58.8 26C59.8667 25.7333 60.7333 25.3333 61.4 24.8C62.4667 25.4667 63.2667 26.2667 63.8 27.2C64.4667 28.1333 64.8 29.3333 64.8 30.8C64.6667 32.8 63.8667 34.6 62.4 36.2C61.0667 37.8 59.3333 39.0667 57.2 40C55.0667 40.9333 52.9333 41.4 50.8 41.4C46.6667 41.4 43.2667 40.1333 40.6 37.6C38.0667 34.9333 36.8 31.1333 36.8 26.2Z" fill="#E2E2E2" />
                </svg>

                <h3 className="relative z-10 md:text-lg py-3">This is a no-bake pudding dessert that's so quick and easy to make everyone <br />
                        loves it. I always keep the ingredients on hand in case I need a quick dessert. <br />
                        It's best if it sits overnight before serving.</h3>
            </div>
            <ItemCard />
        </div>
        </Fade>
        </>
    )
}

export default Card
