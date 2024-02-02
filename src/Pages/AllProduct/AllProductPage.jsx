import '../../Components/Styles/allproductcard.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllProductPage = ({ item }) => {
  const { name, img, price, _id } = item || {};

  return (
    <>
      <div>
        <div class="cardish mx-auto gap-10">
          <img className="w-[350px] h-[300px]" src={img} alt="" />
          <div class="cardish__content">
            <Link to={`/allItem/${_id}`}>
              <p class="cardish__title text-center mt-10">{name}</p>
              <p class="cardish__description mt-5 text-center">
                price ${price}
              </p>
            </Link>
            <div>
              <Link to={`/addProducts/${_id}`}>
                <button className="btn">Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
