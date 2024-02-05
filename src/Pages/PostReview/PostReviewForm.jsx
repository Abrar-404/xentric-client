import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import '../../Components/Styles/button.css';

const PostReviewForm = () => {
  const postReview = useLoaderData();
  const { img, name } = postReview || {};
  const [rating, setRating] = useState(0);

  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full shadow-2xl  button-85">
            <form className="card-body">
              <div className="flex justify-center gap-20 items-center mx-auto md:flex-row flex-col lg:flex-row">
                <div>
                  <div className="form-control">
                    <div className="items-center">
                      <div className="mb-5 text-center font-vermin">
                        <h1 className="">{name}</h1>
                      </div>
                    </div>
                    <div className="">
                      <img
                        className="w-[80px] rounded-full"
                        src={user?.photoURL || user?.photo}
                        alt=""
                      />
                      <h1 className="mt-2 text-white font-tech text-left">
                        {user?.displayName}
                      </h1>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered input-secondary"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  text-white">
                        Description
                      </span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="description"
                      required
                      name="description"
                      className="textarea textarea-secondary"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bittushh">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReviewForm;
