

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const CategoriesSlider = ({ slides = [] , heightClass = "h-64" }) => {
    const uniqueId = Math.random().toString(36).substring(2, 9); 
    return (
        <div className="relative paddingY paddingX">

   
            <button className={`top-1/2 left-1 md:left-15 z-10 absolute text-gray-500 text-4xl -translate-y-1/2 swiper-button-prev-${uniqueId} transform`}>
                <IoChevronBackOutline size={40} color='#969494' className='cursor-pointer' />
            </button>
            <button className={`top-1/2 right-1 md:right-15 z-10 absolute text-gray-500 text-4xl -translate-y-1/2 swiper-button-next-${uniqueId} transform`}>
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
                    1024: { slidesPerView: 3 },
                }}
                className="px-4"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            className={`rounded-2xl w-full object-cover ${heightClass}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoriesSlider;
