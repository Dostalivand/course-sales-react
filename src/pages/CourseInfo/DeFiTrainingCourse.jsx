import React, { useState } from 'react';
import { SiConcourse } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import videoCourse from '../../Images/learning-video.mp4'
import Navbar from '../../Components/Navbar/Navbar'
import DescriptionCourseBox from '../../Components/DescriptionCourseBox/DescriptionCourseBox';
import Footer from '../../Components/Footer/Footer';
import TeacherPhoto from '../../Images/teacher-1.png'
import coursePhoto from '../../Images/course-photo-2.jpeg'

export default function BitcoinTrainingCourse() {

    const products = [
        {
            id: 1,
            title: 'آموزش بازارهای مالی',
            price: 7000000,
            image: '../../images/course-photo-2.jpeg',
        },
    ];

    // وضعیت سبد خرید و منو
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // تابع برای اضافه کردن محصول به سبد خرید
    const addToCart = (product) => {
        // بررسی می‌کنیم که آیا محصول قبلاً در سبد خرید هست یا نه
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex === -1) {
            // اگر محصول جدید بود، اضافه می‌کنیم
            setCart([...cart, { ...product, quantity: 1 }]);
        } else {
            // اگر محصول قبلاً بود، تعدادش رو افزایش می‌دیم
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            setCart(newCart);
        }
    };

    // تابع برای افزایش تعداد محصول در سبد خرید
    const increaseQuantity = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });
        setCart(newCart);
    };

    // تابع برای کاهش تعداد محصول در سبد خرید
    const decreaseQuantity = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
        setCart(newCart);
    };

    // تابع برای حذف محصول از سبد خرید
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // محاسبه جمع قیمت سبد خرید
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Navbar cart={cart} setCart={setCart} />
            <div className='bg-gray-100 dark:bg-zinc-700'>
                <div className='container px-4' dir='rtl'>
                    {products.map((product) => (
                        <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between gap-3 pt-28'>
                            <div className='w-full'>
                                <video
                                    className="w-full h-87 max-w-full rounded-lg shadow object-cover"
                                    poster={product.image}
                                    alt={product.title}
                                    controls
                                >
                                    <source src={videoCourse} type="video/mp4" />
                                    لطفا مرورگر خود را رفرش کنید.
                                </video>
                            </div>
                            <div className='w-full bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 rounded-lg p-3.5 shadow'>
                                <div key={product.id}>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base mb-2 text-zinc-700 dark:text-gray-200">درصد تکمیل دوره</span>
                                            <span className="text-base text-orange-400">35%</span>
                                        </div>
                                        <div className="w-full mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: '35%' }} />
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <div className='w-1/2'>
                                            <button
                                                type="button"
                                                onClick={() => addToCart(product)}
                                                className="text-white text-nowrap text-base w-full bg-orange-400 hover:bg-orange-500 transition-colors duration-300 focus:outline-none font-medium rounded-md px-5 py-2 text-center cursor-pointer me-2"
                                            >
                                                افزودن به سبد خرید
                                            </button>
                                        </div>
                                        <div className='flex justify-center items-center text-gray-900 bg-gray-300 dark:bg-gray-400 rounded-md w-1/2 p-2 gap-1'>
                                            <div className='text-gray-700 dark:text-gray-800 text-nowrap'>
                                                <p>{product.price.toLocaleString("fa-IR", "en-US")} تومان</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded p-2'>
                                        <div className='flex items-center gap-1'>
                                            <div className='text-orange-400'>
                                                <SiConcourse />
                                            </div>
                                            <p className='text-gray-700 dark:text-gray-200'>عنوان دوره : </p>
                                        </div>
                                        <div className='text-gray-700 dark:text-gray-200'>{product.title}</div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <div className='text-orange-400'>
                                                <PiStudentDuotone />
                                            </div>
                                            <p className='text-gray-700 dark:text-gray-200'>تعداد دانشجویان دوره : </p>
                                        </div>
                                        <div className='text-gray-700 dark:text-gray-200'>300</div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <div className='text-orange-400'>
                                                <MdOutlineAccessTime />
                                            </div>
                                            <p className='text-gray-700 dark:text-gray-200'>مدت زمان دوره : </p>
                                        </div>
                                        <div className='text-gray-700 dark:text-gray-200'>3 ساعت و 46 دقیقه</div>
                                    </div>
                                    <div className='flex justify-between items-center my-3 mb-0 bg-gray-200 dark:bg-gray-600 w-full rounded gap-1 p-2'>
                                        <div className='flex items-center gap-1'>
                                            <div className='text-orange-400'>
                                                <RxUpdate />
                                            </div>
                                            <p className='text-gray-700 dark:text-gray-200'>تاریخ انتشار دوره : </p>
                                        </div>
                                        <div className='text-gray-700 dark:text-gray-200'>1403/10/22</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <DescriptionCourseBox
                        courseTitle='آموزش و تحلیل بازارهای مالی'
                        coursePhoto={coursePhoto}
                        teacherPhoto={TeacherPhoto}
                        teacherName='علیرضا سعیدنیا'
                    />
                </div>
                <Footer />
            </div>
        </>
    )
}
