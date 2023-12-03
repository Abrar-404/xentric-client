import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Styles/slider.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const CarouselCard = () => {
  return (
    <div className="h-[440px] mt-20">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/F8sZytF/store-image.png"
          />{' '}
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <h1>{name}</h1>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/rm17pXN/img1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/Yc6qg1h/slider-img-2.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCard;

// import React from 'react';
// // Updated React Component
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import '../Styles/slider.css';

// const CarouselCard = ({ coupon }) => {
//   const { name } = coupon || {};

//   return (
//     <div className="h-[440px] mt-20">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="swiper-slide-content flex items-center justify-center h-full">
//             <p className="text-3xl content text-white">{name}</p>
//           </div>
//         </SwiperSlide>
//         {/* Add other slides similarly */}
//       </Swiper>
//     </div>
//   );
// };

// export default CarouselCard;
