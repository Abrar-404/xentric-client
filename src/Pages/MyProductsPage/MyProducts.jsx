import useCarts from './../../Components/Hooks/useCarts';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyProducts = () => {
  const [cart, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      color: 'white',
      background: '#121041',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/myProducts/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-col mx-auto justify-evenly mb-20 mt-20 gap-5">
        <h1 className="lg:text-3xl md:text-3xl text-xl text-white">
          Items : {cart?.length}
        </h1>
        <h1 className="lg:text-3xl md:text-3xl text-xl text-white">
          Total Price : ${totalPrice}
        </h1>
        <div>
          {cart?.length ? (
            <Link to="/payment">
              <button className="btn btn-secondary">Pay Now</button>
            </Link>
          ) : (
            <button disabled className="btn btn-secondary">Pay Now</button>
          )}
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <h1 className="text-white">Status</h1>
                </th>
                <th className="text-white">
                  <h1 className="text-white">Product Name</h1>
                </th>
                <th className="text-white">Votes</th>
                <th className="text-white">Delete</th>
                <th className="text-white">Update</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map(item => (
                <tr key={item._id}>
                  <td>
                    <h1 className="text-white">Active</h1>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.img || item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          {item?.name ? (
                            <h1 className="font-bold text-white">
                              {item?.name}
                            </h1>
                          ) : (
                            item?.product
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-white">
                    3
                    <br />
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-ghost text-red-700 text-2xl"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <th>
                    <Link to={`/updateProducts/${item._id}`}>
                      <button className="btn text-2xl text-white btn-ghost btn-xs">
                        <FaEdit />
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
