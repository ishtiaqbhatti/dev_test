import CarCard from '../global/carCard'

const CarList = () => {
    return (
        <div>
            <div className="bg-white-200 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <h2 className='text-natural-800 text-4xl font-bold'>
                            Choose your vehicle
                        </h2>
                        <p className='mt-2 text-natural-400 font-normal text-xl'>
                            Showing <span className='font-semibold'>8</span> from total of <span className='font-semibold'>40</span>
                        </p>z
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-7">
                <div className="flex">
                    <div className="w-9/12 p-2">
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>
                    <div className="w-3/12">
                        <div className="w-100 rounded-lg h-48 p-3 shadow-md">
                            <h2 className='text-2xl font-bold text-blue'>
                                Sidebar content goes
                                here
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList