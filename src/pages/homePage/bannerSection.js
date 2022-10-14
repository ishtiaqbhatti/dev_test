import React from 'react'
import Edit from "../assets/images/edit_icon.png"

const BannerSection = () => {
    return (
        <div>
            <div className='bg-blue py-4'>
                <div className="container mx-auto p-4">
                    <div className="flex">
                        <div className="w-2/5 mr-2 h-40 p-4 bg-white-100 rounded-md shadow">
                            <div className="flex justify-between">
                                <p className='font-semibold text-base text-blue-400'> <span className='rounded-md shadow border border-natural-400 py-1 px-2 mr-2 font-semibold text-base bg-sliver-dark'>1</span>
                                    Rent location
                                </p>
                                <img src={Edit} alt="" />
                            </div>
                            <div className="flex mt-7">
                                <div className="w-6/12">
                                    <small className='font-normal text-xs text-blue-400'>
                                        Pickup
                                    </small>
                                    <p className='font-bold text-base text-blue-800'>
                                        Beograd, Aerodrom
                                    </p>
                                    <p className='font-normal text-sm text-blue-800'>
                                        2022-09-03 - 06:15
                                    </p>
                                </div>
                                <div className="w-6/12">
                                    <small className='font-normal text-xs text-blue-400'>
                                        Pickup
                                    </small>
                                    <p className='font-bold text-base text-blue-800'>
                                        Beograd, Aerodrom
                                    </p>
                                    <p className='font-normal text-sm text-blue-800'>
                                        2022-09-03 - 06:15
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="w-1/4 mr-2 h-40 p-4 bg-white-100 rounded-md shadow">
                            <div className="flex justify-between">
                                <p className='font-semibold text-base text-blue-400'> <span className='rounded-md shadow border border-natural-400 py-1 px-2 mr-2 font-semibold text-base bg-sliver-dark'>2</span>
                                    Vehicle
                                </p>

                            </div>
                            <div className=" mt-16">
                                <small className='font-normal text-md text-blue-400'>
                                    You haven’t choosen a vehicle yet.
                                </small>
                            </div>

                        </div>

                        <div className="w-1/5 mr-2 h-40 p-4 bg-blue-600 dropShadow-1xl rounded-md shadow">
                            <div className="flex justify-between">
                                <p className='font-semibold text-base text-white'> <span className='rounded-md shadow border border-natural-400 py-1 px-2 mr-2 font-semibold text-base bg-sliver-dark'>3</span>
                                    Protection, extras
                                </p>

                            </div>
                            <div className=" mt-16">
                                <small className='font-normal text-md text-white'>
                                    This option will be available once you choose a car.
                                </small>
                            </div>

                        </div>
                        <div className="w-1/5 mr-2 h-40 p-4 bg-blue-600 dropShadow-1xl rounded-md shadow">
                            <div className="flex justify-between">
                                <p className='font-semibold text-base text-white'> <span className='rounded-md shadow border border-natural-400 py-1 px-2 mr-2 font-semibold text-base bg-sliver-dark'>4</span>
                                    Review
                                </p>

                            </div>
                            <div className=" mt-16">
                                <small className='font-normal text-md text-white'>
                                    Order preview
                                </small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection