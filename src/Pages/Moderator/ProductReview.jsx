import { FaBookmark, FaCheck, FaEye, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from './../../Components/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCarts from './../../Components/Hooks/useCarts';
import { Link } from 'react-router-dom';

const ProductReview = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();

  const handleMakeFeature = item => {
    axiosSecure.post('/featureCards', item).then(res => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: `Bingo!`,
          text: ` ${item?.name} is now featured.`,
          imageUrl: `${item?.img}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
      }
    });
  };

  const handleDeleteUser = id => {
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
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className=" text-white">Accept</th>
                <th className=" text-white">Product Name</th>
                <th className=" text-white">View Details</th>
                <th className=" text-white">Make Feature</th>
                <th className=" text-white">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map(item => (
                <tr key={item?._id}>
                  <th className="text-xl text-white">
                    <FaCheck></FaCheck>
                  </th>
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
                        <div className="font-bold text-white">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl text-white">
                    <Link to={`/allProducts/${item?._id}`}>
                      <FaEye></FaEye>
                    </Link>
                    <br />
                  </td>
                  <td className="text-xl text-white">
                    <button
                      onClick={() => handleMakeFeature(item)}
                      className="btn btn-ghost text-xl"
                    >
                      <FaBookmark></FaBookmark>
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(item?._id)}
                      className="btn btn-ghost text-red-700 text-2xl"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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

export default ProductReview;
