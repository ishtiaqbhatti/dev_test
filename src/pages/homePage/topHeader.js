import AngleDown from "../assets/images/angle.png"
import Mail from '../assets/images/mail.png'
import Phone from '../assets/images/phone.png'
import UserIcon from '../assets/images/user.png'

const TopHeader = () => {
    return (
        <div className='bg-blue-50'>
            <div className="container mx-auto p-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <a href="#" className='flex'>
                            <img src={Phone} className="h-4 mr-1 mt-1" alt="" />
                            <span className='w-32'>
                                011 122 1223
                            </span>
                        </a>
                        <a href="#" className='flex'>
                            <img src={Mail} className="h-4 mr-1 mt-1" alt="" />
                            <span className='w-32'>
                                011 122 1223
                            </span>
                        </a>
                    </div>
                    <div className="flex">
                        <a href="" className='flex'>
                            <img src={UserIcon} className="h-4 mt-1" alt="" />
                            <span className='w-32 ml-1'>Login/Register</span>
                        </a>
                        <div className="rounded-md shadow border border-natural-400 px-4">
                            <p className='flex'>
                                <span>
                                    Rs
                                </span>
                                <img src={AngleDown} className="h-2 w-3 mt-2 ml-1" alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader