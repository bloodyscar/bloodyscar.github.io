import React from 'react'
import imgTesti from '../../images/content/testi.jpg'
import Flip from 'react-reveal/Flip';

function SectionTestimoni() {
    return (
        <section className="w-full flex justify-center items-center py-24">
            <Flip left delay={300}>
            <div className="shadow-lg rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 duration-200">
                <div className="relative px-4 py-2 md:px-12 md:py-6">
                    
                    <h3 className="text-center z-20 relative text-lg md:text-3xl">Awalnya saya malu dengan mertua karena tidak <br /> bisa memasak, kini mereka lebih suka makan <br /> malam di rumah demi menyantap masakan <br /> yang saya buat sendiri</h3>

                    <svg className="absolute z-10 top-0 left-0" width={100} height={40} viewBox="0 0 164 102" fill="fillCurrent" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.38419e-07 58.8C2.38419e-07 54.2666 1.2 48.8 3.6 42.4C6.26667 36 9.73333 29.6 14 23.2C18.5333 16.8 23.6 11.4667 29.2 7.19998C34.8 2.93332 40.6667 0.799994 46.8 0.799994C52.1333 0.799994 56.6667 1.99999 60.4 4.4C64.1333 6.8 66 10.9333 66 16.8C66 22.6666 64 26.2667 60 27.6C56.2667 28.9333 53.0667 30.2666 50.4 31.6C46.9333 33.4667 44.1333 35.7333 42 38.4C40.1333 40.8 39.2 43.8667 39.2 47.6C39.2 50.2667 40.5333 52.8 43.2 55.2C46.1333 57.6 49.8667 58.8 54.4 58.8C56 58.8 57.8667 58.6667 60 58.4C62.1333 57.8666 64 57.0667 65.6 56C68.5333 57.0667 70.9333 58.6666 72.8 60.8C74.6667 62.9333 75.6 66.2667 75.6 70.8C75.6 76.6667 73.6 81.8667 69.6 86.4C65.6 90.9333 60.6667 94.5333 54.8 97.2C48.9333 99.8667 43.2 101.2 37.6 101.2C26.1333 101.2 16.9333 97.6 10 90.4C3.33333 83.2 2.38419e-07 72.6666 2.38419e-07 58.8ZM88.4 58.8C88.4 54.2666 89.6 48.8 92 42.4C94.6667 36 98.1333 29.6 102.4 23.2C106.933 16.8 112 11.4667 117.6 7.19998C123.2 2.93332 129.067 0.799994 135.2 0.799994C140.533 0.799994 145.067 1.99999 148.8 4.4C152.533 6.8 154.4 10.9333 154.4 16.8C154.4 22.6666 152.4 26.2667 148.4 27.6C144.667 28.9333 141.467 30.2666 138.8 31.6C135.333 33.4667 132.533 35.7333 130.4 38.4C128.533 40.8 127.6 43.8667 127.6 47.6C127.6 50.2667 128.933 52.8 131.6 55.2C134.533 57.6 138.267 58.8 142.8 58.8C144.4 58.8 146.267 58.6667 148.4 58.4C150.533 57.8666 152.4 57.0667 154 56C156.933 57.0667 159.333 58.6666 161.2 60.8C163.067 62.9333 164 66.2667 164 70.8C164 76.6667 162 81.8667 158 86.4C154 90.9333 149.067 94.5333 143.2 97.2C137.333 99.8667 131.6 101.2 126 101.2C114.533 101.2 105.333 97.6 98.4 90.4C91.7333 83.2 88.4 72.6666 88.4 58.8Z" fill="#F1F1F1" />
                    </svg>
                </div>
                <div className="md:mt-10 px-12 py-6 bg-gradient-to-br from-green-600 to-green-800 flex justify-between items-center">
                    <div className="flex items-center relative">
                        <div className="absolute z-10 md:bg-white rounded-full overflow-hidden" style={{ width: '84px', height: '84px' }} />
                        <div style={{ width: '80px', height: '80px' }} className="relative z-20 left-0.5">
                            <img className="w-full h-full rounded-full" src={imgTesti} />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-white text-lg">Jannet Charlotte</h3>
                            <p className="text-gray-400">Sushi Addict</p>
                        </div>
    
                    </div>
                    <div>
                        <svg className="opacity-50 hover:opacity-90 animate-bounce" width={60} height={50} viewBox="0 0 60 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <a href="https://twitter.com"><path d="M60 6.39262C57.7925 7.37262 55.42 8.03262 52.93 8.33012C55.4725 6.80762 57.425 4.39512 58.3425 1.52012C55.965 2.93012 53.33 3.95512 50.525 4.50762C48.2825 2.11512 45.08 0.620117 41.54 0.620117C33.5925 0.620117 27.7525 8.03512 29.5475 15.7326C19.32 15.2201 10.25 10.3201 4.1775 2.87262C0.9525 8.40512 2.505 15.6426 7.985 19.3076C5.97 19.2426 4.07 18.6901 2.4125 17.7676C2.2775 23.4701 6.365 28.8051 12.285 29.9926C10.5525 30.4626 8.655 30.5726 6.725 30.2026C8.29 35.0926 12.835 38.6501 18.225 38.7501C13.05 42.8076 6.53 44.6201 0 43.8501C5.4475 47.3426 11.92 49.3801 18.87 49.3801C41.725 49.3801 54.6375 30.0776 53.8575 12.7651C56.2625 11.0276 58.35 8.86012 60 6.39262V6.39262Z" fill="white" /></a>
                        </svg>
                    </div>
                </div>
            </div>
            </Flip>
        </section>

    )
}

export default SectionTestimoni
