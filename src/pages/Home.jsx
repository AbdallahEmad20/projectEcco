import React from 'react'
import Hero from './Hero'
import imagehome1 from "../assets/Home Page-Final Direction 2.png"
import imageHome2 from "../assets/Home Page-Final Direction 2-1.png"
import imageHome3 from "../assets/8a19642cf3c347aa6c450c0b63d2e9dbdf6481fb.png"
import imageHome4 from "../assets/5c3380788a69307922b37294bafee2e4c8a24b68.png"
import symbol from "../assets/Symbol.png"
import symbolIcon from "../assets/wpf_sent.png"



import CategoriesSlider from '../components/NavigationCategories/CategoriesSlider'
import imageSlider from "../assets/Home Page-Final Direction 2 (1).png"
import imageSlider2 from "../assets/Home Page-Final Direction 3.png"
import CategoriesSliderContent from '../components/NavigationCategories/CategoriesSliderContent'

import GuidesAndArticles from '../components/NavigationCategories/FinalSecSliderHome'
const Home = () => {
  const someSlides = [
    { id: 1, image: imageSlider },
    { id: 2, image: imageSlider },
    { id: 3, image: imageSlider },
    { id: 4, image: imageSlider },
    { id: 5, image: imageSlider },

  ];


  const someSlides2 = [
    { id: 1, image: imageSlider2 },
    { id: 2, image: imageSlider2 },
    { id: 3, image: imageSlider2},
    { id: 4, image: imageSlider2 },
    { id: 5, image: imageSlider2 },

  ];

  const reviews = [
    { id: 1, name: "Alex Smith", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },
    { id: 2, name: "John Doe", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },
    { id: 3, name: "Mo Adel", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },
    { id: 4, name: "islam Reda", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },
    { id: 5, name: "islam Reda", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },
    { id: 6, name: "islam Reda", review: "  Mobex delivered on their promiseof quality and affordability.I got anair filter for my SUV, and it fit perfectly." },

  ];


  return (
    <>
      <Hero />
      <div className=''>
        <div className="paddingX paddingY">
          <div className="md:gap-8 grid grid-cols-1 lg:grid-cols-12">

            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h2 className="mb-4 md:w-[491px] !font-bold text-[24px] md:text-[40px] leading-[140%] second-color">
                Your One-Stop Shop For Auto Parts In the UAE
              </h2>
              <p className="mb-4 !font-medium text-[18px] md:text-[24px] second-color textHeight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-[14px] md:text-[24px] second-color textHeight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
              </p>
            </div>

            {/* Image Section */}
            <div className="place-items-center grid col-span-12 lg:col-span-6">
              <img src={imagehome1} alt="photoHome1" className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>


        {/*  start  sec2 */}

        <div className="paddingX paddingY">
          <div className="md:gap-8 grid grid-cols-1 lg:grid-cols-12">

            {/* Image (Steps) Section */}
            <div className="place-items-center grid col-span-12 lg:col-span-6">
              <img src={imageHome2} alt="stepsImage" className="md:w-[75%] h-200px object-contain" />
            </div>

            {/* Text Section */}
            <div className="col-span-12 lg:col-span-6">
              <h2 className="mb-4 md:w-[491px] !font-bold text-[24px] md:text-[40px] leading-[140%] second-color">
                How this work
              </h2>
              <p className="mb-4 !font-medium text-[18px] md:text-[24px] second-color textHeight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="!font-normal text-[14px] md:text-[24px] second-color textHeight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
              </p>
            </div>

          </div>
        </div>

        
        {/* end sec2 */}

        {/* start sec3 */}
        <div className=''>
          <h2 className="mb-2 !font-bold text-[20px] md:text-[40px] text-center second-color">Categories</h2>
          <CategoriesSlider slides={someSlides}  />
        </div>
{/*  End Sec3 */}
        
        {/*  Start Sec4 */}
        <div
          className="h-[200px] md:h-[370px] paddingX paddingY"
        
        >
          <img src={ imageHome3} className='w-full h-full' />
        </div>
        {/*  End Sec 4 */}

        <CategoriesSlider slides={someSlides2}  />

        
        {/*  Start Sec6 */}
        <div
          className="h-[200px] md:h-[370px] paddingX paddingY"
        
        >
          <img src={imageHome4} className='w-full h-full' />
        </div>
        {/*  End Sec 6 */}

        {/*  stattt sec 7 */}
        <CategoriesSliderContent slides={reviews} />
        {/*  End sec 7 */}


        
        <div className="flex md:flex-row flex-col justify-between items-center gap-6 bg-[#EC221F] shadow-lg mx-5 md:mx-24 my-[20px] md:my-[40px] p-6 md:p-10 rounded-lg text-white paddingX paddingY">

          <div className="flex items-start gap-4 text-left md:text-left">
            <div className="text-4xl">
              <img src={symbol}  className='w-[100px] md:w-[50px]' />
            </div>
            <div>
              <h2 className="mb-1 !font-bold text-lg md:text-2xl">
                Get the Latest Deals & Updates.
              </h2>
              <p className="md:w-[80%] text-sm md:text-base">
                Stay in the loop! Subscribe to our newsletter to receive the latest deals,
                discounts, announcements, and expert tips on maintaining your car.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow bg-white px-4 py-2 pr-10 border-2 border-white focus:outline-none w-full h-full overflow-hidden text-black placeholder-gray-400"
            />
            <img
              src={symbolIcon}
              width={20}
              height={20}
              className="top-1/2 right-3 absolute text-gray-400 -translate-y-1/2 transform"
            />
          </div>
        </div>



        <div className="finalDiv">

          <GuidesAndArticles/>
        </div>

      </div>
    </>
  )
}

export default Home