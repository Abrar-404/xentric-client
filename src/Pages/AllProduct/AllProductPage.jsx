import '../../Components/Styles/allproductcard.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllProductPage = ({ item }) => {
  const { name, img, price, _id } = item || {};

  return (
    <>
      <div>
        {/* <div className="card card-compact shadow-xl">
          <figure>
            <img
              className="w-[300px] h-[200px] rounded-full transform hover:rotate-45 transition duration-300 ease-in-out"
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <Link to={`/allItem/${_id}`}>
              <h2 className="card-title text-white font-share">{name}</h2>
              <h2 className="card-title text-white font-share">
                Price: ${price}
              </h2>
            </Link>
            <div className="card-actions justify-start">
              <button className="btn button-85">Upvote</button>
            </div>
            <div className="mt-10 w-full">
              <Link to={`/addProducts/${_id}`}>
                <button className="btn button-85 w-full">Add Products</button>
              </Link>
            </div>
          </div>
        </div> */}

        <div class="cardish">
          <img className="w-[350px] h-[300px]" src={img} alt="" />
          <div class="cardish__content">
            <Link to={`/allItem/${_id}`}>
              <p class="cardish__title">{name}</p>
              <p class="cardish__description">price ${price}</p>
            </Link>
            <Link to={`/addProducts/${_id}`}>
              <button className="btn">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
