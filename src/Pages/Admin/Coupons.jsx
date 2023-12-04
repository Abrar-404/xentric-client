import { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const Coupons = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const discount = form.discount.value;
    const description = form.description.value;

    const addProductItem = {
      email: user.email,
      name,
      date,
      description,
      discount: parseFloat(discount),
    };

    axiosSecure.post('/coupons', addProductItem).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` Product added to the cart.`,
          icon: 'success',
        });
        navigate('/');
      }
    });
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text-center text-3xl mt-32 font-vermin">
            <span className="text-red-700">Add</span>{' '}
            <span className="text-white">Coupons</span>
          </h1>
          <div className="hero min-h-screen mt-10 bg-transparent">
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
                      <span className="label-text text-white">Coupon Code</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="input input-bordered text-black"
                      required
                      name="name"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Expiry Date</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Expiry Date"
                      className="input input-bordered text-black"
                      required
                      name="date"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Coupon Code Description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="description of coupon"
                      className="input input-bordered text-black"
                      required
                      name="description"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Discount Amount
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Discount Amount"
                      className="input input-bordered text-black"
                      required
                      name="discount"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn button-85">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
