import axios from 'axios';
import { useEffect, useState } from 'react';
import TrendingCards from './TrendingCards';
import '../../Components/Styles/button48.css';
import { TbArrowGuide } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const TrendingCardLoader = () => {
  const [trendCards, setTrendCards] = useState([]);

  const url = 'http://localhost:5000/trendingCards';

  useEffect(() => {
    axios.get(url).then(res => {
      setTrendCards(res.data);
    });
  }, [url]);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 mt-20">
        {trendCards?.map(trending => (
          <TrendingCards
            key={trending?._id}
            trending={trending}
          ></TrendingCards>
        ))}
      </div>
      <Link to="/products">
        <div className="flex justify-center mt-10">
          <button className="button-57" role="button">
            <span>Show All Products</span>
            <span>
              <TbArrowGuide></TbArrowGuide>
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TrendingCardLoader;
