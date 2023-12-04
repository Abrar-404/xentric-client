import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../Components/Styles/slider.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const CouponsCard = ({ coup }) => {
  const { name, date, description, discount } = coup || {};
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
          <br />
          <h1 className=" text-2xl text-white">
            {' '}
            Coupon Code : <span className="text-red-700 font-bold">{name}</span>
          </h1>
          <h1 className="  text-2xl text-white">
            {' '}
            Coupon Description :{' '}
            <span className="text-red-700 font-bold">{description}</span>
          </h1>
          <h1 className="text-2xl text-white">
            {' '}
            Expires In : <span className="text-red-700 font-bold">{date}</span>
          </h1>
          <h1 className="text-2xl text-white">
            Coupon Amount:{' '}
            <span className="text-red-700 font-bold"> {discount}</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <br />
          <h1 className=" text-2xl text-white">
            {' '}
            Coupon Code : <span className="text-red-700 font-bold">{name}</span>
          </h1>
          <h1 className="  text-2xl text-white">
            {' '}
            Coupon Description :{' '}
            <span className="text-red-700 font-bold">{description}</span>
          </h1>
          <h1 className="text-2xl text-white">
            {' '}
            Expires In : <span className="text-red-700 font-bold">{date}</span>
          </h1>
          <h1 className="text-2xl text-white">
            Coupon Amount:{' '}
            <span className="text-red-700 font-bold"> {discount}</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <br />
          <h1 className=" text-2xl text-white">
            {' '}
            Coupon Code : <span className="text-red-700 font-bold">{name}</span>
          </h1>
          <h1 className="  text-2xl text-white">
            {' '}
            Coupon Description :{' '}
            <span className="text-red-700 font-bold">{description}</span>
          </h1>
          <h1 className="text-2xl text-white">
            {' '}
            Expires In : <span className="text-red-700 font-bold">{date}</span>
          </h1>
          <h1 className="text-2xl text-white">
            Coupon Amount:{' '}
            <span className="text-red-700 font-bold"> {discount}</span>
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CouponsCard;
