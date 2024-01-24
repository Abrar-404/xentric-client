import React from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr';

const BannerParallax = () => {
  const data = {
    'data-top-top': 'transform: translateX(100%);',
    'data-center-center': 'opacity: 1;transform: translateX(0%);',
    'data-bottom-top': 'opacity: 0;',
  };
  return (
    <div>
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 50,
          smoothScrolling: true,
          forceHeight: false,
        }}
      >
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
        <Parallax data={data}>
          <span className="bg-white">
            <img
              className="w-[400px] h-[80px]"
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.1140716153.1694434861&semt=ais"
              alt=""
            />
          </span>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default BannerParallax;
