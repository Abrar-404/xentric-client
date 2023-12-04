import { useLoaderData } from 'react-router-dom';

const CouponDetails = () => {
  const allItem = useLoaderData();
  const { code, description, amount, date } = allItem || {};

  return (
    <div>
      <div className=" h-[100vh] ">
        <div>
          <div className="card card-compact mt-20 shadow-xl">
            <figure>
              <div className=" relative">
                <img
                  className=" w-[400px] h-[300px] rounded-full transition-transform duration-300 transform hover:scale-110 hover:rotate-12"
                  src=""
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body space-y-5 text-center">
              <h2 className="text-white text-3xl mt-2 font-script">
                Coupon Code : {code}
              </h2>
              <p className="text-white">Coupon Description : {description}</p>
              <p className="text-white">Discount Amount : {amount}</p>
              <p className="text-white">
                <span className="font-vermin"></span>Expiry Date : {date}
              </p>
              {/* <div className="card-actions flex gap-5 justify-center">
                <button className="btn button-85">Buy Now</button>
                <button className="btn button-85">Upvote</button>
                <button className="btn button-85">Report</button>
              </div> */}
              {/* <div className="justify-center mt-10">
                <Link to={`/postReviewForm/${_id}`}>
                  <button className="btn w-[30%] button-85">Post Review</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetails;
