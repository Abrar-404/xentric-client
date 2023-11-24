import Banner from '../Banner/Banner';
import CardLoader from '../FeatureCards/CardLoader';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="mt-20">
      <Banner></Banner>
      <CardLoader></CardLoader>
      <Footer></Footer>
    </div>
  );
};

export default Home;
