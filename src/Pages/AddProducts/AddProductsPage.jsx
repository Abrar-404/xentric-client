import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Transition from '../../Components/Transitions/Transition';

const AddProductsPage = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);

  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;

    const addProductItem = {
      email: user.email,
      name,
      image,
      description,
      price: parseFloat(price),
      tags, // Include tags in the form data
    };

    axiosSecure.post('/myProducts', addProductItem).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` Product added to the cart.`,
          icon: 'success',
        });
        navigate('/myProducts');
      }
    });

    axiosSecure.post('/allItem', addProductItem).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` Product added to the cart.`,
          icon: 'success',
        });
        navigate('/allItem');
      }
    });
  };

  return (
    <div>
      <h1 className="lg:text-6xl md:text-4xl text-3xl mt-20 text-center text-white font-vermin text-flicker-in-glow">
        Add Products
      </h1>
      <div className="hero min-h-screen mt-10 bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full  shadow-2xl  button-85">
            <form onSubmit={handleAdd} className="card-body">
              <div className="form-control">
                <div className="items-center"></div>
                <div className="flex items-center gap-2 justify-evenly md:flex-row lg:flex-row flex-col">
                  <img
                    className="w-[80px] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <span className="text-white">
                    {' '}
                    | <br />
                    | <br />|
                  </span>
                  <div>
                    <h1 className="text-white font-bold font-tech">
                      {user?.displayName}
                    </h1>
                    <h1 className="text-xs text-white">
                      Email : {user?.email}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex mx-auto gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Product Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered text-black"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Product Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="E.g: https://i.ibb.co/8PXm9m2/1850380481.jpg"
                    className="input input-bordered text-black"
                    required
                    name="image"
                  />
                </div>
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

              {/* Tag Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Tags</span>
                </label>
                <TagsInput value={tags} onChange={tags => setTags(tags)} />
              </div>

              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text text-white">External Links</span>
                </label>
                <a href="https://www.programming-hero.com">
                  For More: https://www.programming-hero.com
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

export default Transition(AddProductsPage);
