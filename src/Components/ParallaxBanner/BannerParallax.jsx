import { useEffect } from 'react';
import Swiper from 'swiper';
import '../Styles/parallax.css';

const BannerParallax = () => {
  useEffect(() => {
    let mySwiper; // Declare mySwiper outside the useEffect scope

    const initializeSwiper = () => {
      mySwiper = new Swiper('.swiper', {
        effect: 'cards',
        grabCursor: true,
        initialSlide: 2,
        speed: 500,
        loop: true,
        rotate: true,
        mousewheel: {
          invert: false,
        },
      });
    };

    initializeSwiper(); // Initialize Swiper when the component mounts

    // You can now access mySwiper as needed

    return () => {
      // Cleanup if needed
      if (mySwiper) {
        mySwiper = null;
      }
    };
  }, []);
  return (
    <div>
      <section className="section">
        <div class="content">
          <div class="info">
            <p>
              Choose Your desires <span class="movie-night">From Xentric</span>{' '}
              With all the latest, and high quality latest tech gadgets. We
              believe in quality. <br />
            </p>
            <img
              className="lg:w-[400px] lg:h-[150px] md:w-[400px] md:h-[150px] w-[200px] h-[60px]"
              src="https://i.ibb.co/1YCvN7J/logo.png"
              alt=""
            />
          </div>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <span>8.5</span>
                <h2>VR Goggles</h2>
              </div>

              <div class="swiper-slide">
                <span>9.5</span>
                <h2>Smart Watches</h2>
              </div>

              <div class="swiper-slide">
                <span>8.1</span>
                <h2>Nintendo</h2>
              </div>

              <div class="swiper-slide">
                <span>8.7</span>
                <h2>EMO - The Robot</h2>
              </div>

              <div class="swiper-slide">
                <span>8.6</span>
                <h2>Nexgen Drone</h2>
              </div>

              <div class="swiper-slide">
                <span>8.9</span>
                <h2>VR Goggles</h2>
              </div>

              <div class="swiper-slide">
                <span>8.6</span>
                <h2>Smart Watches</h2>
              </div>

              <div class="swiper-slide">
                <span>8.7</span>
                <h2>Nintendo</h2>
              </div>

              <div class="swiper-slide">
                <span>9.2</span>
                <h2>Emo - The Robot</h2>
              </div>
            </div>
          </div>
        </div>

        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default BannerParallax;
