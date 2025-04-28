


import React from 'react';
import imageBack from "../assets/Frame 134.png";

const Hero = () => {
    return (
        <div
            className="flex justify-center items-center bg-white h-[90px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] custom-height"
            style={{
                backgroundImage: `url(${imageBack})`,
                backgroundSize: 'cover', // الصورة تغطي الشاشة بالكامل
                backgroundPosition: 'center', // الصورة في المنتصف
            }}
        >


            {/* إضافة كود لجعل الصورة تظهر بشكل كامل في الموبايل */}

        </div>
    );
};

export default Hero;
