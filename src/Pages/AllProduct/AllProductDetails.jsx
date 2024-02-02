import { Link, useLoaderData } from 'react-router-dom';
import '../../Components/Styles/allitemcard.css';
import '../../Components/Styles/itembutton.css';

const AllProductDetails = () => {
  const allItem = useLoaderData();
  const { img, name, description, more, _id, tag } = allItem || {};

  return (
    <div>
      <div className=" h-[100vh] ">
        <div>
          {/* <div className="card card-compact mt-20 shadow-xl">
            <figure>
              <div className=" relative">
                <img
                  className=" w-[400px] h-[300px] rounded-full transition-transform duration-300 transform hover:scale-110 hover:rotate-12"
                  src={img || allItem?.image}
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body space-y-5 text-center">
              <h2 className="text-white text-3xl mt-2 font-script">{name}</h2>
              <p className="text-white">{description}</p>
              <p className="text-white">Tags : {tag}</p>
              <p className="text-white">
                <span className="font-vermin">More Here :</span> {more}
              </p>
              <div className="card-actions flex gap-5 justify-center">
                <button className="btn button-85">Buy Now</button>
                <button className="btn button-85">Upvote</button>
                <button className="btn button-85">Report</button>
              </div>
              <div className="justify-center mt-10">
                <Link to={`/postReviewForm/${_id}`}>
                  <button className="btn w-[30%] button-85">Post Review</button>
                </Link>
              </div>
            </div>
          </div> */}

          <div class="cardBox flex justify-center mx-auto">
            <div class="allcard">
              {/* <div class="h4">Animated card</div> */}
              <img
                className="h4 w-full h-full"
                src={img || allItem?.image}
                alt=""
              />

              <div class="contentText">
                <div class="h3">{name}</div>
                <p className="description">Description : {description}</p>
                <div>
                  <p className="mt-10">Tag : {tag}</p>
                </div>
                <div>
                  <p className="mt-10">More here : {more}</p>
                </div>

                <div className="flex justify-evenly mx-auto mt-10 mb-10">
                  <Link to={`/postReviewForm/${_id}`}>
                    <button className="itemButton">Post Review</button>
                  </Link>
                  <button className="itemButton">Upvote</button>
                  <button className="itemButton">Report</button>
                </div>
                <button className="itemButton2 w-[300px]">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
