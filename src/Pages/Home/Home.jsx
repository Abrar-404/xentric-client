import Banner from '../Banner/Banner';
import CardLoader from '../FeatureCards/CardLoader';
import Footer from '../Footer/Footer';
import RelaxMain from '../Relax/RelaxMain';
import '../../Components/Styles/texteffect.css';
import CouponsCard from '../CouponList/CouponsCard';
// import CarouselCard from '../../Components/Slider/CarouselCard';

const Home = () => {
  return (
    <div className="mt-48">
      <Banner></Banner>
      <div className="text-center mt-48">
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-white font-vermin text-flicker-in-glow">
          Featured
        </h1>
        <CardLoader></CardLoader>
      </div>

      <div>
        <CouponsCard></CouponsCard>
      </div>

      <div className="text-center mt-48 mb-48">
        <h1 className="lg:text-6xl md:text-4xl text-3xl text-white font-vermin text-flicker-in-glow">
          Just Relax A Bit
        </h1>
        <RelaxMain></RelaxMain>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
