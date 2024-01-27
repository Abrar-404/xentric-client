import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../Components/Styles/slider.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

// const CouponsCard = ({ coup }) => {
//   const { name, date, description, discount } = coup || {};
//   return (
//     <div className="h-[440px] mt-20">
//       {/* <Swiper
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
//           <br />
//           <h1 className=" text-2xl text-white">
//             {' '}
//             Coupon Code : <span className="text-red-700 font-bold">{name}</span>
//           </h1>
//           <h1 className="  text-2xl text-white">
//             {' '}
//             Coupon Description :{' '}
//             <span className="text-red-700 font-bold">{description}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             {' '}
//             Expires In : <span className="text-red-700 font-bold">{date}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             Coupon Amount:{' '}
//             <span className="text-red-700 font-bold"> {discount}</span>
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide>
//           <br />
//           <h1 className=" text-2xl text-white">
//             {' '}
//             Coupon Code : <span className="text-red-700 font-bold">{name}</span>
//           </h1>
//           <h1 className="  text-2xl text-white">
//             {' '}
//             Coupon Description :{' '}
//             <span className="text-red-700 font-bold">{description}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             {' '}
//             Expires In : <span className="text-red-700 font-bold">{date}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             Coupon Amount:{' '}
//             <span className="text-red-700 font-bold"> {discount}</span>
//           </h1>
//         </SwiperSlide>
//         <SwiperSlide>
//           <br />
//           <h1 className=" text-2xl text-white">
//             {' '}
//             Coupon Code : <span className="text-red-700 font-bold">{name}</span>
//           </h1>
//           <h1 className="  text-2xl text-white">
//             {' '}
//             Coupon Description :{' '}
//             <span className="text-red-700 font-bold">{description}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             {' '}
//             Expires In : <span className="text-red-700 font-bold">{date}</span>
//           </h1>
//           <h1 className="text-2xl text-white">
//             Coupon Amount:{' '}
//             <span className="text-red-700 font-bold"> {discount}</span>
//           </h1>
//         </SwiperSlide>
//       </Swiper> */}
//     </div>
//   );
// };

// export default CouponsCard;

import '../../Components/Styles/couponcard.css';

const CouponsCard = ({ coup }) => {
  const { name, date, description, discount } = coup || {};

  return (
    <div className="">
      <div class="book flex flex-col">
        <div>
          <span className="font-azonix text-white font-bold md:text-sm lg:text-sm">
            Coupon Name :{' '}
          </span>
          <span className="textH md:text-sm text-sm font-extrabold font-azonix pl-5 lg:text-sm text-red-600">
            {' '}
            {name}
          </span>
        </div>
        <div>
          <span className="font-azonix text-white font-bold md:text-sm lg:text-sm">
            Expiry Date :{' '}
          </span>
          <span className="textH md:text-sm text-sm font-extrabold font-azonix pl-5 lg:text-sm text-red-600">
            {' '}
            {date}
          </span>
        </div>
        <div>
          <span className="font-azonix text-white font-bold md:text-sm lg:text-sm">
            Description :{' '}
          </span>
          <span className="textH md:text-sm text-sm font-extrabold font-azonix pl-5 lg:text-sm text-red-600">
            {' '}
            {description}
          </span>
        </div>
        <div>
          <span className="font-azonix text-white font-bold md:text-sm lg:text-sm">
            Discount Rate :{' '}
          </span>
          <span className="textH md:text-sm text-sm font-extrabold font-azonix pl-5 lg:text-sm text-red-600">
            {' '}
            {discount}
          </span>
        </div>

        <div class="coverCard">
          <img
            className=""
            src="https://i.ibb.co/kxXWCQk/output-onlinegiftools-4.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CouponsCard;
