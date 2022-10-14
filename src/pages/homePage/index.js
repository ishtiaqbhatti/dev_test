import React from 'react'
import TopHeader from './topHeader'
import MainNav from './mainNav'
import BannerSection from './bannerSection'
import CarList from './carList'
import Footer from './footer'
const HomePage = () => {
    return (
        <div>
            <TopHeader />
            <MainNav />
            <BannerSection />
            <CarList />
            <Footer />
        </div>
    )
}

export default HomePage