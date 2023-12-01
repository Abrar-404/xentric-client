import { useState } from 'react';
import TrendingCards from './TrendingCards';
import '../../Components/Styles/button48.css';
import { TbArrowGuide } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../Components/Hooks/useAxiosPublic';

const TrendingCardLoader = () => {
  const axiosPublic = useAxiosPublic();
  const [trendCards, setTrendCards] = useState([]);

  const { data: trendingCards = trendCards } = useQuery({
    queryKey: ['trendingCards'],
    queryFn: async () => {
      const res = await axiosPublic.get('/trendingCards');
      return setTrendCards(res.data);
    },
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 mt-20">
        {trendingCards?.map(trending => (
          <TrendingCards
            key={trending?._id}
            trending={trending}
          ></TrendingCards>
        ))}
      </div>
      <Link to="/allItem">
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
