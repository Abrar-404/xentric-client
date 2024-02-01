import { useEffect, useState } from 'react';
import { FaEye, FaPen, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCarts from '../../Components/Hooks/useCarts';
import useAxiosSecure from './../../Components/Hooks/useAxiosSecure';
import Transition from './../../Components/Transitions/Transition';
const Coupons = () => {
  const [itemCoup, setItemCoup] = useState([]);
  const [, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch('https://server-site-rho-silk.vercel.app/allCoupon')
      .then(res => res.json())
      .then(data => {
        setItemCoup(data);
      });
  }, []);

  const handleMakeFeature = item => {
    axiosSecure.post('/coupons', item).then(res => {
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
        axiosSecure.delete(`/allCoupon/${id}`).then(res => {
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white font-bold">
              <th>Edit</th>
              <th className="text-white font-bold">Coupon Code</th>
              <th className="text-white font-bold">Expiry Date</th>
              <th className="text-white font-bold">Description</th>
              <th className="text-white font-bold">Amount</th>
              <th className="text-white font-bold">View</th>
              <th className="text-white font-bold">Add</th>
              <th className="text-white font-bold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {itemCoup?.map(item => (
              <tr key={item?._id}>
                <th className="">
                  <Link to={`/updateCoupon/${item?._id}`}>
                    <button className="text-xl text-white btn btn-ghost">
                      <FaPen></FaPen>
                    </button>
                  </Link>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold">{item?.code}</div>
                    </div>
                  </div>
                </td>
                <td className="text-white font-bold">{item?.date}</td>
                <td className="text-white font-bold">{item?.description}</td>
                <th>
                  <h1 className="text-white font-bold">{item?.amount}</h1>
                </th>
                <th>
                  <Link to={`/allCoupon/${item?._id}`}>
                    <button className="btn btn-ghost btn-xs text-white text-xl">
                      <FaEye></FaEye>
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleMakeFeature(item)}
                    className="btn btn-ghost btn-xs text-white text-xl"
                  >
                    <FaPlus></FaPlus>
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-ghost btn-xs text-red-700 text-xl"
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
  );
};

export default Transition(Coupons);
