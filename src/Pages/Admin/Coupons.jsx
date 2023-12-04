// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
// import { AuthContext } from '../../Providers/AuthProvider';

// const Coupons = () => {
//   const { user } = useContext(AuthContext);

//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();

//   const handleAdd = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const date = form.date.value;
//     const discount = form.discount.value;
//     const description = form.description.value;

//     const addProductItem = {
//       email: user.email,
//       name,
//       date,
//       description,
//       discount: parseFloat(discount),
//     };

//     axiosSecure.post('/coupons', addProductItem).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Bingo!`,
//           text: ` Product added to the cart.`,
//           icon: 'success',
//         });
//         navigate('/');
//       }
//     });
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <h1 className="text-center text-3xl mt-32 font-vermin">
//             <span className="text-red-700">Add</span>{' '}
//             <span className="text-white">Coupons</span>
//           </h1>
//           <div className="hero min-h-screen mt-10 bg-transparent">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//               <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
//                 <form onSubmit={handleAdd} className="card-body">
//                   <div className="form-control">
//                     <div className="items-center"></div>
//                     <div className="flex items-center gap-2 justify-evenly md:flex-row lg:flex-row flex-col">
//                       <img
//                         className="w-[80px] rounded-full"
//                         src={user?.photoURL}
//                         alt=""
//                       />
//                       <div>
//                         <h1>{user?.displayName}</h1>
//                         <h1 className="text-xs">Email : {user?.email}</h1>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text text-white">Coupon Code</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Coupon code"
//                       className="input input-bordered text-black"
//                       required
//                       name="name"
//                     />
//                   </div>

//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text text-white">Expiry Date</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Expiry Date"
//                       className="input input-bordered text-black"
//                       required
//                       name="date"
//                     />
//                   </div>
//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text text-white">
//                         Coupon Code Description
//                       </span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="description of coupon"
//                       className="input input-bordered text-black"
//                       required
//                       name="description"
//                     />
//                   </div>

//                   <div className="form-control">
//                     <label className="label">
//                       <span className="label-text text-white">
//                         Discount Amount
//                       </span>
//                     </label>
//                     <input
//                       type="number"
//                       placeholder="Discount Amount"
//                       className="input input-bordered text-black"
//                       required
//                       name="discount"
//                     />
//                   </div>

//                   <div className="form-control mt-6">
//                     <button className="btn button-85">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="gap-10">
//         <button className="btn btn-primary">View Coupon</button> <br />
//         <button className="btn btn-primary">Delete Coupon</button>
//       </div>
//     </div>
//   );
// };

// export default Coupons;

import { useEffect, useState } from 'react';
import { FaEye, FaPen, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCarts from '../../Components/Hooks/useCarts';
import useAxiosSecure from './../../Components/Hooks/useAxiosSecure';
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
    axiosSecure.post('/allCoupon', item).then(res => {
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
                  <button className="text-xl text-white btn btn-ghost">
                    <FaPen></FaPen>
                  </button>
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

export default Coupons;
