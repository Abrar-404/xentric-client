// import { Parallax } from 'react-scroll-parallax';
// import gear from '../../assets/gear.gif';
// import '../Styles/geartext.css';
import { useEffect } from 'react';

// const BannerParallax = () => {
//   return (
//     <div className="">
//       <div className="flex justify-between md:flex-row flex-row items-center lg:flex-row">
//         <Parallax speed={-10}>
//           <img
//             className="md:w-[200px] md:h-[400px] lg:w-[300px] lg:h-[600px] w-[150px] h-[300px]"
//             src={gear}
//             alt=""
//           />
//         </Parallax>

//         <Parallax speed={50}>
//           <div className="lg:mr-96 md:mr-48 mr-12 mx-auto">
//             <img
//               data-aos="fade-left"
//               className="md:w-[250px] md:h-[80px] lg:w-[250px] lg:h-[80px] w-[200px] h-[60px] lg:mr-20 md:mr-8 mr-12 mx-auto"
//               src="https://i.ibb.co/1YCvN7J/logo.png"
//               alt=""
//             />
//             <h1
//               data-aos="fade-left"
//               className="text-center mt-12 lg:text-4xl text-xl text-white font-bold font-script focus-in-expand"
//             >
//               Unleash Your Desires <br /> And grab your <br /> gadgets with the{' '}
//               <br /> best quality
//             </h1>
//           </div>
//         </Parallax>
//       </div>
//     </div>
//   );
// };

// export default BannerParallax;
import Swiper from 'swiper';
import AnimatedCursor from 'react-animated-cursor';
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
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          backgroundColor: 'white',
        }}
        outerStyle={{
          // border: '3px solid var(--cursor-color)',
          borderRadius: '3px solid',
          color: 'white',
        }}
      />
      <section className="section">
        <div class="content">
          <div class="info">
            <p>
              Join us for a fantastic{' '}
              <span class="movie-night">movie night</span> filled with popcorn,
              laughter, and great company! Whether you're a fan of thrilling
              action, heartwarming dramas, or side-splitting comedies, we've got
              a film lineup to cater to all tastes. Save the date and bring your
              favorite snacks to make it a memorable evening.
            </p>
            <button class="bhutu">Join</button>
          </div>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <span>8.5</span>
                <h2>The Queen's Gambit</h2>
              </div>

              <div class="swiper-slide">
                <span>9.5</span>
                <h2>Breaking Bad</h2>
              </div>

              <div class="swiper-slide">
                <span>8.1</span>
                <h2>Wednesday</h2>
              </div>

              <div class="swiper-slide">
                <span>8.7</span>
                <h2>Stranger Things</h2>
              </div>

              <div class="swiper-slide">
                <span>8.6</span>
                <h2>Anne with an E</h2>
              </div>

              <div class="swiper-slide">
                <span>8.9</span>
                <h2>Friends</h2>
              </div>

              <div class="swiper-slide">
                <span>8.6</span>
                <h2>The Crown</h2>
              </div>

              <div class="swiper-slide">
                <span>8.7</span>
                <h2>House M.D.</h2>
              </div>

              <div class="swiper-slide">
                <span>9.2</span>
                <h2>Game of Thrones</h2>
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
