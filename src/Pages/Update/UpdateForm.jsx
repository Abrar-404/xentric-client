import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './../../Components/Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from './../../Components/Hooks/useAxiosPublic';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const item = useLoaderData();
  console.log(item);
  const { name, price, description, _id } = item || {};
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async data => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data?.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const products = {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        image: res.data.display_url,
      };
      //
      const productRes = await axiosSecure.patch(
        `/myProducts/${_id}`,
        products
      );
      console.log(productRes);
      if (productRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log('with image url', res.data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                    defaultValue={name || item?.product}
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

                <div className="form-control w-full my-6">
                  <input
                    {...register('image', { required: true })}
                    type="file"
                    className="file-input w-full max-w-xs"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    defaultValue={description}
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
                    defaultValue={price}
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
