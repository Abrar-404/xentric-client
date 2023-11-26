import img from '../../assets/banner.png';
import Motion from '../../Components/Animation/Motion';
import '../../Components/Styles/animista.css';
import '../../Components/Styles/texteffect.css';

const Banner = () => {
  return (
    <div>
      <div className="flex md:flex-row lg:flex-row flex-col items-center justify-evenly">
        <img
          className="w-[250px] h-[200px] md:w-[300px] md:h-[200px] lg:w-[600px] lg:h-[400px] slide-in-elliptic-top-fwd "
          src={img}
          alt=""
        />

        <div className="text-center md:text-start lg:text-start ">
          <h1 className="font-bold font-vermin text-flicker-in-glow lg:text-8xl md:text-5xl text-2xl heartbeat text-[#D51E77]">
            THINK
          </h1>{' '}
          <h1 className="font-bold font-mono text-flicker-in-glow lg:text-8xl md:text-5xl text-2xl heartbeat text-white">
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
