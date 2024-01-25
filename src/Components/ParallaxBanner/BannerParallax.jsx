// import React from 'react';
// import { ParallaxProvider, Parallax } from 'react-skrollr';

import { ParallaxBanner } from 'react-scroll-parallax';

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

const BannerParallax = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          { image: 'https://i.ibb.co/hLjMTnV/pngwing-com.png', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
              </div>
            ),
          },
          {
            image:
              'https://i.ibb.co/TBf4yYp/Pngtree-cardboard-open-box-packaging-mockup-8812605.png',
            speed: -10,
          },
        ]}
        className="aspect-[2/1]"
      />
    </div>
  );
};

export default BannerParallax;
