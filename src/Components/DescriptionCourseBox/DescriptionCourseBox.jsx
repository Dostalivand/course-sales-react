import React from 'react'
import studentPhoto from '../../Images/student-icon.png'
import supportPhoto from '../../Images/support-phone.jpeg'
import { GrCirclePlay } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import CourseModal from '../CourseModal/CourseModal'


export default function DescriptionCourseBox({ courseTitle, teacherPhoto, teacherName, coursePhoto }) {
    return (
        <>
            <div className='w-full bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800 h-auto rounded-lg shadow p-3 mt-8'>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-3 mb-4 pr-2">
                        <img className="size-10 rounded-full" src={teacherPhoto} alt />
                        <div className="">
                            <div className='text-base Dana-Bold text-zinc-700 dark:text-gray-200'><span className='text-orange-400'>مدرس دوره :</span> {teacherName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-500">کارشناس ارشد بازارهای مالی</div>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="text-white cursor-pointer text-nowrap transition-colors duration-300 bg-orange-400 hover:bg-orange-500 font-medium rounded-lg text-base px-2 py-2 me-2 mb-2 shadow focus:outline-none">پروفایل مدرس</button>
                    </div>
                </div>
                <div className='text-justify text-base leading-8 text-zinc-700 dark:text-gray-200 p-2'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
            </div>
            <div div className='w-full gap-4 my-3 mb-8'>
                <div className='w-full'>
                    <div className="mb-4">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 text-base sm:text-base lg:text-lg xl:text-lg" role="presentation">
                                <button className="inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    <div className='flex items-center gap-1'>
                                        <div className="text-orange-400 text-xl">
                                            <MdDescription />
                                        </div>
                                        <span className='text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300'>توضیحات دوره</span>
                                    </div>
                                </button>
                            </li>
                            <li className="me-2 text-base sm:text-base lg:text-lg xl:text-lg" role="presentation">
                                <button className="inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                                    <div className='flex items-center gap-1'>
                                        <div className="text-orange-400 text-xl">
                                            <HiAcademicCap />
                                        </div>
                                        <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">جلسات دوره</span>
                                    </div>
                                </button>
                            </li>
                            <li className="me-2 text-base sm:text-base lg:text-lg xl:text-lg" role="presentation">
                                <button className="inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">
                                    <div className='flex items-center gap-1'>
                                        <div className="text-orange-400 text-xl">
                                            <HiChatBubbleLeftRight />
                                        </div>
                                        <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">نظرات دانشجویان</span>
                                    </div>
                                </button>
                            </li>
                            <li role="presentation" className='text-base sm:text-base lg:text-lg xl:text-lg'>
                                <button className="inline-block cursor-pointer p-4 border-b-2 rounded-t-lg transition-all duration-300 hover:border-orange-400 group" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                                    <div className='flex items-center gap-1'>
                                        <div className='text-orange-400 text-xl'>
                                            <BiSupport />
                                        </div>
                                        <span className="text-zinc-700 dark:text-gray-200 group-hover:text-orange-400 transition-all duration-300">پشتیبانی دوره</span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className="hidden p-4 rounded-lg shadow-lg text-zinc-700 dark:text-gray-200 bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='flex items-center gap-1.5'>
                                <span className='text-2xl text-orange-400'><HiDocumentText /></span>
                                <p className='text-xl Dana-Bold'>عنوان دوره : {courseTitle}</p>
                            </div>
                            <div className='mt-4 text-justify leading-8'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </div>
                            <div className='flex justify-center w-full h-auto sm:h-auto md:h-auto lg:w-full lg:h-120 xl:w-full xl:h-150 my-6'>
                                <img src={coursePhoto} className='rounded-lg' alt="" />
                            </div>
                            <div className='text-justify leading-8'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            {/* courses */}
                            <div id="accordion-open" data-accordion="open">
                                <div className='mb-4'>
                                    <h2 id="accordion-open-heading-1">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                                            <span className="flex items-center"><span className='text-base text-orange-400 Dana-Bold me-1'>فصل اول : </span> معرفی دوره و آشنایی</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                                        <div className="p-5 border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <div className='flex justify-between border-b-0'>
                                                {/* <div className='flex gap-2 items-center cursor-pointer text-zinc-700 dark:text-gray-200 transition-all duration-300 hover:text-orange-400 group'>
                                                    <p className='flex items-center justify-center bg-gray-200 dark:bg-gray-600 transition-all duration-300 group-hover:bg-orange-400 group-hover:text-white w-7 h-7 rounded'>1</p>
                                                    <p>ویدیوی معرفی دوره</p>
                                                </div> */}
                                                <CourseModal linkTitleCourse='ویدیوی معرفی دوره' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>13:9</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between mt-6'>
                                                <CourseModal linkTitleCourse='شناخت و عملکرد اولیه' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>15:39</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between mt-6'>
                                                <CourseModal linkTitleCourse='برنامه و تحلیل داده ها' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>28:45</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h2 id="accordion-open-heading-2">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                            <span className="flex items-center"><span className='text-base text-orange-400 Dana-Bold me-1'>فصل دوم : </span> مباحث نیمه حرفه ای و متوسط</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                                        <div className="p-5 border border-t-0 rounded-b-lg dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>09:13</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>12:15</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>16:36</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 id="accordion-open-heading-3">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 cursor-pointer" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                            <span className="flex items-center"><span className='text-orange-400 text-base Dana-Bold me-1'>فصل سوم : </span> مباحث پیشرفته و حرفه ایی</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                                        <div className="p-5 border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>09:13</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>09:13</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                            <hr className='my-5 text-gray-300 dark:text-gray-600' />
                                            <div className='flex justify-between border-b-0'>
                                                <CourseModal linkTitleCourse='لورم ایپسوم' />
                                                <div className='flex items-center gap-1 cursor-pointer text-zinc-700 dark:text-gray-200'>
                                                    <p className='text-lg'>09:13</p>
                                                    <div className='text-2xl text-orange-400'><GrCirclePlay /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden p-5 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <article>
                                <div className='flex justify-between'>

                                    <div className="flex items-center mb-4">
                                        <img className="w-10 h-10 me-4 rounded-full" src={studentPhoto} alt />
                                        <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-200'>مجید اسکندری <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">دانشجو دوره</time></p>
                                    </div>
                                    <button type="button" className="text-orange-400 hover:text-white border rounded-lg text-base px-3 py-0 text-center mb-5 dark:border-orange-400 hover:border-orange-500 dark:hover:text-white hover:bg-orange-500 transition-color duration-300 cursor-pointer">
                                        <div className='flex items-center gap-1'>
                                            <span>پاسخ</span>
                                            <span className='text-lg'><HiArrowUturnLeft /></span>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>تاریخ ارسال : <time dateTime="2017-03-03 19:00">اسفند 1403</time></p></footer>
                                <p className='text-justify text-base leading-8 text-zinc-700 dark:text-gray-200'>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                            </article>
                        </div>
                        <div className="hidden p-4 rounded-lg shadow-lg bg-white border border-gray-200 dark:bg-zinc-800 dark:border-zinc-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4'>
                                <div className='leading-8'>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100'>ارسال تیکت</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>از این طریق در سامانه تنها راه پشتیبانی رسمی برای دانشجویان می باشد. کلیه سوالات و مشکلات دانشجویان از طریق تیکت ارسالی آن ها، قابل بررسی خواهد بود.</p>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100 pt-4'>زمان پاسخگویی پشتیبانی</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>شما دانشجویان عزیز می توانید در هر زمان سوالات خود را به صورت تیکت برای دپارتمان مربوطه ارسال کنید. تیم پشتیبانی فنی طی مدت 1 الی 24 ساعت کاری، تیکت شما را پاسخ خواهند داد.</p>
                                    <p className='text-base Dana-Bold text-zinc-700 dark:text-gray-100 pt-4'>پاسخگویی از طریق واتس اپ</p>
                                    <p className='text-zinc-500 dark:text-gray-400 text-justify'>شما دانشجویان عزیز میتوانید از طریق واتس اپ مجموعه بصورت 24 ساعته پیغام خود را ارسال کنید تا پشتیبان دوره مربوطه در اسرع وقت به شما پاسخ خواهند داد.</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={supportPhoto} className='w-full h-full xl:w-280 xl:h-auto rounded-lg' alt="supportPhoto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
