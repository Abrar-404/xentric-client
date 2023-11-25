import axios from 'axios';
import { useEffect, useState } from 'react';
import TrendingCards from './TrendingCards';

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
    </div>
  );
};

export default TrendingCardLoader;
