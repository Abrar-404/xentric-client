// import axios from 'axios';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './../../Components/Hooks/useAxiosSecure';
import useCarts from './../../Components/Hooks/useCarts';
const AddForm = () => {
  const items = useLoaderData();
  const { img, name, description, more, _id, price } = items || {};
  // console.log(items);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCarts();

  const handleAddItems = e => {
    e.preventDefault();
    const productItem = {
      productId: _id,
      email: user.email,
      name,
      img,
      description,
      more,
      price,
    };
    console.log(productItem);

    axiosSecure.post('/allItem', productItem).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` ${name} added to the cart.`,
          imageUrl: `${img}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
        refetch();
      }
    });

    // axiosSecure
    //   .post('/allItem', productItem)
    //   .then(res => {
    //     console.log('Response from /allItem:', res.data);

    //     if (res.data && res.data.insertedId) {
    //       Swal.fire({
    //         title: `Bingo!`,
    //         text: ` ${name} added to the cart.`,
    //         imageUrl: `${img}`,
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         imageAlt: 'Custom image',
    //       });
    //       refetch();
    //     } else {
    //       console.error('Invalid response format from /allItem:', res.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error from /allItem:', error);
    //   });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-transparent mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
            <form onSubmit={handleAddItems} className="card-body">
              <div className="form-control">
                <div className="flex items-center justify-evenly md:flex-row lg:flex-row flex-col">
                  <img
                    className="w-[80px] rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <div className="text-center md:text-start lg:text-start">
                    <h1 className="text-sm">{user?.displayName}</h1>
                    <h1 className="text-xs">Email: {user?.email}</h1>
                  </div>
                </div>
                <hr className="mt-10" />
                <div className="items-center mt-10">
                  <img
                    className="w-[200px] h-[100px] justify-center flex mx-auto mb-5 items-center rounded-lg"
                    src={img}
                    alt=""
                  />
                  <div className="mb-5 text-center font-vermin">
                    <h1>{name}</h1>
                  </div>
                  <div className="mb-5 text-center">{description}</div>
                  <div className="mb-5 text-center">Price : {price}</div>
                </div>
              </div>

              <div className="text-center"></div>

              <div>
                <h1 className="text-xs">
                  <span className="text-xl">More:</span> {more}
                </h1>
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

export default AddForm;
