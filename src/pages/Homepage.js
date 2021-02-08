import React from 'react'
import HeroText from '../components/Hero/HeroText'
import TrendingSection from '../components/Trending/TrendingSection'
import PopularSection from '../components/Popular/PopularSection'
import SectionTestimoni from '../components/Testimoni/SectionTestimoni'
import SectionApk from '../components/Apk/SectionApk'
import SectionFooter from '../components/Footer/SectionFooter'


function Homepage(props) {
    return (
        <div>
            <HeroText />
            <TrendingSection />
            <PopularSection />
            <SectionTestimoni />
            <SectionApk />
            <SectionFooter />
            
        </div>
    )
}

export default Homepage
