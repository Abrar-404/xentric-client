import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateForm = () => {
  const update = useLoaderData();
  const { img, name, price, description } = update || {};
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mt-32 font-vermin">
          <span className="text-red-700">Update</span>{' '}
          <span className="text-white">Products</span>
        </h1>
        <div className="hero min-h-screen mt-10 bg-transparent">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
              <form className="card-body">
                <div className="form-control">
                  <div className="items-center"></div>
                  <div className="flex items-center gap-2 justify-evenly md:flex-row lg:flex-row flex-col">
                    <img
                      className="w-[80px] rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <div>
                      <h1>{user?.displayName}</h1>
                      <h1 className="text-xs">Email : {user?.email}</h1>
                    </div>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">Product Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered text-black"
                    required
                    name="product"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">
                      Product Image
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="E.g: https://i.ibb.co/8PXm9m2/1850380481.jpg"
                    className="input input-bordered text-black"
                    required
                    name="image"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered text-black"
                    required
                    name="description"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered text-black"
                    required
                    name="price"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">
                      External Links
                    </span>
                  </label>
                  <a href="https://www.programming-hero.com">
                    For More : https://www.programming-hero.com
                  </a>
                </div>

                <div className="form-control mt-6">
                  <button className="btn button-85">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
