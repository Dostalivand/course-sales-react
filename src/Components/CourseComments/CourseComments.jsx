import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader'
import CommentBox from '../CommentBox/CommentBox'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CourseComments() {

    return (
        <>
            <div className='px-4'>
                <SectionHeader
                    title='نظرات دانشجو های دوره'
                    btn='true'
                    btntitle='مشاهده نظرات'
                    icons={<HiChatBubbleLeftRight />}
                />
                <div className="container slider-container">
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            0: { slidesPerView: 1, centeredSlides: true}, 
                            340: { slidesPerView: 2, centeredSlides: true },
                            640: { slidesPerView: 2, centeredSlides: true },
                            768: { slidesPerView: 2 }, 
                            1024: { slidesPerView: 3 },
                        }}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'><CommentBox /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
