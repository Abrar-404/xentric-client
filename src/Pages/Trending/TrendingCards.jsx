import { Link } from 'react-router-dom';
import '../../Components/Styles/button.css';

// eslint-disable-next-line react/prop-types
const TrendingCards = ({ trending }) => {
  const { img, name, _id } = trending || {};

  return (
    <div className="">
      <div>
        <div className="card card-compact shadow-xl">
          <figure>
            <img
              className="w-[300px] h-[200px] rounded-full transform hover:rotate-45 transition duration-300 ease-in-out"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <Link to={`/trendingCards/${_id}`}>
              <h2 className="card-title text-white font-share">{name}</h2>
            </Link>
            <div className="card-actions justify-start">
              <button className="btn button-85">Upvote</button>
            </div>
            <div className="mt-10 w-full">
              <Link to={`/addProductsForm/${_id}`}>
                <button className="btn button-85 w-full">Add Products</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
