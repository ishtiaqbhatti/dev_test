import React from 'react'
import Car from "../assets/images/car.png"
import Arrow from "../assets/images/angle.png"
import View from "../assets/images/view.png"

const CarCard = () => {
    return (
        <div className="w-100 rounded shadow-all mb-7">
            <div className="flex">
                <div className="w-4/6">
                    <div className="outer p-4 border-b border-white-300">
                        <div className="flex">
                            <img src={Car} className="mr-3" alt="" />
                            <div className="mt-7">
                                <h3 className='text-blue text-3xl font-bold'>Ford Fiesta</h3>
                                <p className='text-lg text-blue-300 font-semibold'>ECONOMIC</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="mr-4">
                                    <small className='font-normal text-sm text-natural-600'>
                                        Transmission
                                    </small>
                                    <p className='font-bold text-natural-800 text-lg'>
                                        Manuelni
                                    </p>
                                </div>
                                <div className="mr-4">
                                    <small className='font-normal text-sm text-natural-600'>
                                        Fuel
                                    </small>
                                    <p className='font-bold text-natural-800 text-lg'>
                                        7lt / 100km
                                    </p>
                                </div>
                                <div className="mr-4">
                                    <small className='font-normal text-sm text-natural-600'>
                                        Passengers
                                    </small>
                                    <p className='font-bold text-natural-800 text-lg'>
                                        5
                                    </p>
                                </div>
                            </div>
                            <button className='flex border-b bg-blue-50 py-2 px-4 border-white-300 rounded-lg shadow-md justify-center items-center'>
                                <span>  More details</span> <img src={Arrow} className="mt-2 ml-2" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 bg-blue-50 p-5 rounded-t -mr-2">
                    <div className="text-center">
                        <p className='font-medium text-blue-300 text-base'>16 days</p>
                        <h2 className='font-bold text-blue-600 text-4xl mt-6'>€ 9.500</h2>
                        <p className='font-medium text-blue-300 text-base'>
                            $ 80.00/ day
                        </p>
                        <div className="flex mt-10">
                            <button className='w-1/4'>
                                <img src={View} alt="" />
                            </button>
                            <button className='bg-blue-600 w-3/4 rounded text-white font-semibold text-base'>
                                Choose car
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CarCard