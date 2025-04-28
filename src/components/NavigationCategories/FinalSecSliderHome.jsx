import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageSlide1 from "../../assets/blog14.webp.png"
import imageSlide2 from "../../assets/Container.png"
import imageSlide3 from "../../assets/blog16.webp.png"

export default function GuidesAndArticles() {
    const articles = [
        {
            title: "The number of new cars sold over 20 years",
            image: imageSlide1,
        },
        {
            title: "The number of new cars sold over 20 years",
            image: imageSlide2,
        },
        {
            title: "The number of new cars sold over 20 years",
            image: imageSlide3,
        },
        {
            title: "The number of new cars sold over 20 years",
            image: imageSlide1,
        },
        {
            title: "The number of new cars sold over 20 years",
            image: imageSlide2,
        },
    ];

    return (
        <div className="md:gap-8 space-y-[30px] md:space-y-0 grid grid-cols-12 paddingX paddingY">

            {/* Left side - Text and Button */}
            <div className="col-span-12 md:col-span-3">
                <h2 className="!font-bold text-[24px] leading-[32px]">Guides and articles</h2>
                <p className="mt-5 !font-normal text-[#9A9A9A] text-[14px] leading-[22px]">
                    Articles and Guides that are written with the help of mechanics to ensure you have all the knowledge you need to make the correct purchase here at Mabe.
                </p>
                <button className="!mt-[20px] px-6 py-2 border-2 border-black rounded font-black text-black transition cursor-pointer">
                    Read more
                </button>
            </div>

            {/* Right side - Swiper Slider */}
            <div className="col-span-12 md:col-span-9">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="p-4 !font-bold text-[14px] text-left">{article.title}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}
