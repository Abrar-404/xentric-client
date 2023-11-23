import img from '../../assets/banner.png';
import Motion from '../../Components/Animation/Motion';
import '../../Components/Styles/animista.css';

const Banner = () => {
  return (
    <div>
      <div className="flex md:flex-row lg:flex-row flex-col items-center justify-evenly">
        <img
          className="w-[250px] h-[200px] md:w-[300px] md:h-[200px] lg:w-[600px] lg:h-[400px] slide-in-elliptic-top-fwd "
          src={img}
          alt=""
        />

        <div className="text-center md:text-start lg:text-start heartbeat">
          <h1 className="font-bold font-tech lg:text-8xl md:text-5xl text-2xl text-[#D51E77]">
            THINK
          </h1>{' '}
          <h1 className="font-bold font-mono lg:text-8xl md:text-5xl text-2xl text-white">
            DIFFERENTLY
          </h1>{' '}
          <br />
          <Motion></Motion>
        </div>
      </div>
    </div>
  );
};

export default Banner;
