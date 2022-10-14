import React from 'react'
import LogoCar from "../assets/images/logo_car.png"

const MainNav = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex py-3 mt-2">
                        <img src={LogoCar} className="h-8 w-13 mr-2 mt-2" alt="" />
                        <p className='font-bold text-black'>Rent a car <br /> Service</p>
                    </div>
                    <div className="flex">
                        <ul >
                            <li className='inline-block px-3 py-8 text-base text-natural-600 border-b-4 border-blue'>
                                <a href="">
                                    HOME
                                </a>
                            </li>
                            <li className='inline-block px-3 py-8 text-base text-natural-600'>
                                <a href="">
                                    ABOUT
                                </a>
                            </li >
                            <li className='inline-block px-3 py-8 text-base text-natural-600'>
                                <a href="">
                                    CAR LISTING
                                </a>
                            </li>
                            <li className='inline-block px-3 py-8 text-base text-natural-600'>
                                <a href="">
                                    LOCATIONS
                                </a>
                            </li>
                            <li className='inline-block px-3 py-8 text-base text-natural-600'>
                                <a href="">
                                    CONTACT
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav