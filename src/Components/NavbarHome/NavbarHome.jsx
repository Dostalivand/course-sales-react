import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import cryptoLogo from "../../Images/crypto-logo.png"
import { Link } from "react-router-dom";


export default function NavbarHome() {
    return (
        <>
            <nav className="fixed top-0 w-full z-100 bg-gray-50 shadow-lg border-gray-500 dark:bg-zinc-800" dir='rtl'>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={cryptoLogo} className="size-11 hidden lg:block" alt="Logo" />
                        <span className="self-center text-2xl lg:text-2xl md:text-lg Moraba-Medium text-zinc-600 dark:text-gray-200">آکادمی ارزهای دیجیتال</span>
                    </Link>
                    <div className="flex md:order-2 items-center gap-x-2 h-13">
                        {/* Mobile Search Button */}
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        {/* Theme Toggle Btn */}
                        <div className='hidden md:block'>
                            <div className="switch-theme lg:flex size-13 flex items-center justify-center only-icon rounded-2xl bg-gray-200 text-slate-500 dark:bg-white/5 dark:text-white">
                                <div className="text-2xl">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                        {/* Cart */}
                        <div>
                            <div className="relative group hidden md:block" id="cart">
                                <button type="button" className="cart size-13 flex items-center justify-center only-icon rounded-2xl bg-gray-200 text-slate-500 dark:bg-white/5 dark:text-white cursor-pointer" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                                    <div className='text-2xl'>
                                        <LuShoppingCart />
                                    </div>
                                </button>
                            </div>
                            {/* drawer component */}
                            <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-gray-50 w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
                                <div className='flex justify-between items-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 p-4'>
                                    <div className='flex items-center gap-1 text-gray-700 dark:text-gray-300'>
                                        <span className='text-orange-400'><HiMiniShoppingBag /></span>
                                        <span>سبد خرید من</span>
                                    </div>
                                    <div>
                                        <span> 0 دوره</span>
                                    </div>
                                </div>
                                <p className='text-center mt-10 py-5 rounded-2xl bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 mx-3'>سبد خریدت خالیه !</p>
                            </div>
                        </div>
                        {/* User Profile */}
                        <div className="relative group hidden md:block" id="user-profile">
                            <Link
                                to="/login"
                                className="user-profile size-13 flex items-center justify-center only-icon rounded-2xl bg-gray-200 text-slate-500 dark:bg-white/5 dark:text-white cursor-pointer"
                            >
                                <div className="text-2xl">
                                    <FaRegUser />
                                </div>
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="size-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-0" placeholder="چیو میخوای یاد بگیری؟" />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                            <li className='flex items-center cursor-pointer text-zinc-700 hover:text-orange-400 transition-colors duration-300 dark:text-gray-200 dark:hover:text-orange-300 gap-1'>
                                <Link to="/" className="block py-2 px-1 text-base rounded-sm md:bg-transparent md:p-0 ">صفحه اصلی</Link>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 cursor-pointer text-zinc-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 transition-colors duration-300 md:p-0 md:w-auto dark:text-gray-200 dark:hover:text-orenge-300 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">دسته بندی دوره ها <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                </svg></button>
                                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to="/crypto-education/bitcoin-training-course" className="block px-4 py-2 text-sm transition-all duration-300 ease-linear hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600">دوره آموزش بیت کوین</Link>
                                        </li>
                                        <li>
                                            <Link to="/crypto-education/altcoin-training-course" className="block px-4 py-2 text-sm transition-all duration-300 ease-linear hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600">دوره آموزش آلت کوین ها</Link>
                                        </li>
                                        <li>
                                            <Link to="/crypto-education/DeFi-training-course" className="block px-4 py-2 text-sm transition-all duration-300 ease-linear hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600">دوره تحلیل بازارهای مالی</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/crypto-education" className="block py-2 px-3 text-base text-zinc-700 hover:text-orange-400 md:p-0 dark:text-gray-100 transition-color duration-300 dark:hover:bg-gray-700 dark:hover:text-orenge-300 md:dark:hover:bg-transparent">همه دوره ها</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
