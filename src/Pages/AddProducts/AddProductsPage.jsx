import { useContext } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const AddProductsPage = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const product = form.product.value;
    const image = form.image.value;
    const description = form.description.value;

    console.log(product, image, description);

    const addProductItem = {
      email: user.email,
      product,
      image,
      description,
    };

    axiosSecure.post('/myProducts', addProductItem).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` Product added to the cart.`,
          icon: 'success',
        });
      }
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
            <form onSubmit={handleAdd} className="card-body">
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
                  <span className="label-text  text-white">Product Image</span>
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
                  <span className="label-text text-white">External Links</span>
                </label>
                <a href="https://www.programming-hero.com">
                  For More : https://www.programming-hero.com
                </a>
              </div>

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

export default AddProductsPage;
