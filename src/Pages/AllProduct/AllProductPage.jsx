import '../../Components/Styles/allproductcard.css';
import { Link } from 'react-router-dom';
import '../../Components/Styles/productsbutton.css';

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
            <div className="mt-5 flex justify-center">
              <Link to={`/addProducts/${_id}`}>
                <button class="buttuuu">
                  <span>Add to cart</span>
                  <svg
                    className="z-50 svgicon"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <defs> </defs>{' '}
                      <g id="cart">
                        {' '}
                        <circle
                          r="1.91"
                          cy="20.59"
                          cx="10.07"
                          class="cls-1"
                        ></circle>{' '}
                        <circle
                          r="1.91"
                          cy="20.59"
                          cx="18.66"
                          class="cls-1"
                        ></circle>{' '}
                        <path
                          d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                          class="cls-1"
                        ></path>{' '}
                        <polyline
                          points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                          class="cls-1"
                        ></polyline>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
