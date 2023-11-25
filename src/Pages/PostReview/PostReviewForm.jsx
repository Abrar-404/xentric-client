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
          <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
            <form className="card-body">
              <div className="form-control">
                <div className="items-center">
                  <img
                    className="w-[200px] h-[100px] justify-center flex mx-auto mb-5 items-center rounded-lg"
                    src={img}
                    alt=""
                  />
                  <div className="mb-5 text-center font-vermin">
                    <h1>{name}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-evenly md:flex-row lg:flex-row flex-col">
                  <img
                    className="w-[80px] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <h1>{user?.displayName}</h1>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  required
                  name="description"
                />
              </div>

              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
              <div className="form-control mt-6">
                <button className="btn button-85">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReviewForm;
