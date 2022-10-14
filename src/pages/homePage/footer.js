import Call from "../assets/images/call.png"
import Facebook from "../assets/images/facebook.png"
import IPhone from "../assets/images/iconPhone.png"
import Instagaram from "../assets/images/instagaram.png"
import Linkden from "../assets/images/linkden.png"
import Logo from '../assets/images/logo.png'
import Twitter from "../assets/images/twitter.png"
import Youtube from "../assets/images/youtube.png"

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-7">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                    <div className="">
                        <img src={Logo} />
                        <h3 className='text-dark text-xl font-semibold my-5'>
                            Best car dealer in Serbia
                        </h3>
                        <p className='text-dark text-base font-normal'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <ul className='mt-7'>
                            <li className='inline-block pr-7'>
                                <a href="">
                                    <img src={Youtube} />
                                </a>
                            </li>
                            <li className='inline-block pr-7'>
                                <a href="">
                                    <img src={Linkden} />
                                </a>
                            </li>
                            <li className='inline-block pr-7'>
                                <a href="">
                                    <img src={Twitter} />
                                </a>
                            </li>
                            <li className='inline-block pr-7'>
                                <a href="">
                                    <img src={Facebook} />
                                </a>
                            </li>
                            <li className='inline-block'>
                                <a href="">
                                    <img src={Instagaram} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h2 className='text-black text-xl font-bold'>
                            Quick Links
                        </h2>
                        <ul className='py-8'>
                            <li className='mb-3'>
                                <a href="">
                                    About us
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Contact us

                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Products

                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Login
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-black text-xl font-bold'>
                            Support
                        </h2>
                        <ul className='py-8'>
                            <li className='mb-3'>
                                <a href="">
                                    Affiliates
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Sitemap

                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Cancelation Policy


                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="">
                                    Legal Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className='text-black text-xl font-bold'>
                            Contact
                        </h2>
                        <ul className='py-8 ml-8 md:ml-0'>
                            <li className='mb-3 bg-silver rounded py-6 text-dark text-sm font-normal relative'>

                                <img src={IPhone} className="absolute -left-8 top-2" />
                                <span className='ml-7'>
                                    77 Highfield Road London
                                    N36 7SB</span>
                            </li>
                            <li className='mb-3 bg-silver rounded py-6 text-dark text-sm font-normal relative'>

                                <img src={Call} className="absolute -left-8 top-2" />
                                <span className='ml-7'>
                                    77 Highfield Road London
                                    N36 7SB</span>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer