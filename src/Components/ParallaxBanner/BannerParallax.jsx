// import React from 'react';
// import { ParallaxProvider, Parallax } from 'react-skrollr';

// const BannerParallax = () => {
//   const data = {
//     'data-top-top': 'transform: translateX(100%);',
//     'data-center-center': 'opacity: 1;transform: translateX(0%);',
//     'data-bottom-top': 'opacity: 0;',
//   };
//   return (
//     <div>
//       <ParallaxProvider
//         init={{
//           smoothScrollingDuration: 50,
//           smoothScrolling: true,
//           forceHeight: false,
//         }}
//       >
//         <Parallax data={data}>
//           <span className="bg-[#70EAFB] opacity-50 w-full py-5 px-[300px]">
//             Get The high quality techs.
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//         <Parallax data={data}>
//           <span className="bg-white">
//             <img
//               className="w-[400px] h-[80px]"
//               src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
//               alt=""
//             />
//           </span>
//         </Parallax>
//       </ParallaxProvider>
//     </div>
//   );
// };

// export default BannerParallax;

import { Parallax } from 'react-scroll-parallax';
import gear from '../../assets/gear.gif';
import '../Styles/geartext.css';

const BannerParallax = () => {
  return (
    <div className="">
      <div className="flex justify-between md:flex-row flex-row items-center lg:flex-row">
        <Parallax speed={-10}>
          <img
            className="md:w-[200px] md:h-[400px] lg:w-[300px] lg:h-[600px] w-[150px] h-[300px]"
            src={gear}
            alt=""
          />
        </Parallax>

        <Parallax speed={50}>
          <div className="lg:mr-96 md:mr-48 mr-12 mx-auto">
            <img
              data-aos="fade-left"
              className="md:w-[250px] md:h-[80px] lg:w-[250px] lg:h-[80px] w-[200px] h-[60px] lg:mr-20 md:mr-8 mr-12 mx-auto"
              src="https://i.ibb.co/1YCvN7J/logo.png"
              alt=""
            />
            <h1
              data-aos="fade-left"
              className="text-center mt-12 lg:text-4xl text-xl text-white font-bold font-script focus-in-expand"
            >
              Unleash Your Desires <br /> And grab your <br /> gadgets with the{' '}
              <br /> best quality
            </h1>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default BannerParallax;
