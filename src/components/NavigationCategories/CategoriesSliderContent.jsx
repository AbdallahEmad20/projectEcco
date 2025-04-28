import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa'; // لإظهار النجوم

const CategoriesSliderContent = ({ slides = [] }) => {
    const uniqueId = Math.random().toString(36).substring(2, 9);

    return (
        <div className="relative paddingY paddingX">
            <h2 className="pb-5 !font-bold text-[20px] md:text-[40px] text-center b-4 second-color">What Our Customers Say?</h2>
            <button className={`top-1/2 left-1  md:left-15 z-10 absolute text-gray-500 text-4xl translate-y-1/2 swiper-button-prev-${uniqueId} transform`}>
                <IoChevronBackOutline size={40} color='#969494' className='cursor-pointer' />
            </button>
            <button className={`top-1/2 right-1 md:right-15 z-10 absolute text-gray-500 text-4xl translate-y-1/2 swiper-button-next-${uniqueId} transform`}>
                <IoChevronForwardOutline size={40} color='#969494' className='cursor-pointer' />
            </button>

            <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: `.swiper-button-next-${uniqueId}`,
                    prevEl: `.swiper-button-prev-${uniqueId}`,
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="px-4"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex flex-col justify-center h-[200px] text-left">
                            <h3 className="mb-2 !font-bold text-[14px]">{slide.name}</h3>
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-[#F29F05]" />
                                ))}
                            </div>
                            <p className="text-[#444444] text-[15px] leading-[27px]">{slide.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoriesSliderContent;
