// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
// import { AuthContext } from '../../Providers/AuthProvider';

// const AddProductsPage = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();

//   const handleAdd = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const image = form.image.value;
//     const description = form.description.value;
//     const price = form.price.value;

//     console.log(name, image, description);

//     const addProductItem = {
//       email: user.email,
//       name,
//       image,
//       description,
//       price: parseFloat(price),
//     };

//     axiosSecure.post('/myProducts', addProductItem).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Bingo!`,
//           text: ` Product added to the cart.`,
//           icon: 'success',
//         });
//         navigate('/myProducts');
//       }
//     });

//     axiosSecure.post('/allItem', addProductItem).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Bingo!`,
//           text: ` Product added to the cart.`,
//           icon: 'success',
//         });
//         navigate('/allItem');
//       }
//     });
//   };

//   return (
//     <div>
//       <h1 className="text-center text-3xl mt-32 font-vermin">
//         <span className="text-red-700">Add</span>{' '}
//         <span className="text-white">Products</span>
//       </h1>
//       <div className="hero min-h-screen mt-10 bg-transparent">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
//             <form onSubmit={handleAdd} className="card-body">
//               <div className="form-control">
//                 <div className="items-center"></div>
//                 <div className="flex items-center gap-2 justify-evenly md:flex-row lg:flex-row flex-col">
//                   <img
//                     className="w-[80px] rounded-full"
//                     src={user?.photoURL}
//                     alt=""
//                   />
//                   <div>
//                     <h1>{user?.displayName}</h1>
//                     <h1 className="text-xs">Email : {user?.email}</h1>
//                   </div>
//                 </div>
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-white">Product Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Product Name"
//                   className="input input-bordered text-black"
//                   required
//                   name="name"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-white">Product Image</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="E.g: https://i.ibb.co/8PXm9m2/1850380481.jpg"
//                   className="input input-bordered text-black"
//                   required
//                   name="image"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Description</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   className="input input-bordered text-black"
//                   required
//                   name="description"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Price</span>
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="Price"
//                   className="input input-bordered text-black"
//                   required
//                   name="price"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">External Links</span>
//                 </label>
//                 <a href="https://www.programming-hero.com">
//                   For More : https://www.programming-hero.com
//                 </a>
//               </div>

//               <div className="form-control mt-6">
//                 <button className="btn button-85">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProductsPage;

// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
// import { AuthContext } from '../../Providers/AuthProvider';

// const AddProductsPage = () => {
//   const { user } = useContext(AuthContext);
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();

//   const [tags, setTags] = useState([]);
//   const [newTag, setNewTag] = useState('');

//   const handleAdd = e => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const image = form.image.value;
//     const description = form.description.value;
//     const price = form.price.value;

//     const addProductItem = {
//       email: user.email,
//       name,
//       image,
//       description,
//       price: parseFloat(price),
//       tags, // Include tags in the form data
//     };

//     axiosSecure.post('/myProducts', addProductItem).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Bingo!`,
//           text: ` Product added to the cart.`,
//           icon: 'success',
//         });
//         navigate('/myProducts');
//       }
//     });

//     axiosSecure.post('/allItem', addProductItem).then(res => {
//       console.log(res.data);
//       if (res.data.insertedId) {
//         Swal.fire({
//           title: `Bingo!`,
//           text: ` Product added to the cart.`,
//           icon: 'success',
//         });
//         navigate('/allItem');
//       }
//     });
//   };

//   const handleAddTag = () => {
//     if (newTag.trim() !== '' && !tags.includes(newTag)) {
//       setTags([...tags, newTag]);
//       setNewTag('');
//     }
//   };

//   const handleRemoveTag = tagToRemove => {
//     setTags(tags.filter(tag => tag !== tagToRemove));
//   };

//   return (
//     <div>
//       <h1 className="text-center text-3xl mt-32 font-vermin">
//         <span className="text-red-700">Add</span>{' '}
//         <span className="text-white">Products</span>
//       </h1>
//       <div className="hero min-h-screen mt-10 bg-transparent">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl  button-85">
//             <form onSubmit={handleAdd} className="card-body">
//               <div className="form-control">
//                 <div className="items-center"></div>
//                 <div className="flex items-center gap-2 justify-evenly md:flex-row lg:flex-row flex-col">
//                   <img
//                     className="w-[80px] rounded-full"
//                     src={user?.photoURL}
//                     alt=""
//                   />
//                   <div>
//                     <h1>{user?.displayName}</h1>
//                     <h1 className="text-xs">Email : {user?.email}</h1>
//                   </div>
//                 </div>
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-white">Product Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Product Name"
//                   className="input input-bordered text-black"
//                   required
//                   name="name"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-white">Product Image</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="E.g: https://i.ibb.co/8PXm9m2/1850380481.jpg"
//                   className="input input-bordered text-black"
//                   required
//                   name="image"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Description</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   className="input input-bordered text-black"
//                   required
//                   name="description"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Price</span>
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="Price"
//                   className="input input-bordered text-black"
//                   required
//                   name="price"
//                 />
//               </div>

//               {/* Tag Input */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text  text-white">Tags</span>
//                 </label>
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Enter a tag"
//                     className="input input-bordered text-black"
//                     value={newTag}
//                     onChange={e => setNewTag(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     onClick={handleAddTag}
//                     className="btn button-85 ml-2"
//                   >
//                     Add Tag
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap mt-2">
//                   {tags.map(tag => (
//                     <span key={tag} className="tag">
//                       {tag}
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveTag(tag)}
//                         className="ml-1 text-xs"
//                       >
//                         Remove
//                       </button>
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">External Links</span>
//                 </label>
//                 <a href="https://www.programming-hero.com">
//                   For More: https://www.programming-hero.com
//                 </a>
//               </div>

//               <div className="form-control mt-6">
//                 <button className="btn button-85">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProductsPage;

import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

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
      <h1 className="text-center text-3xl mt-32 font-vermin">
        <span className="text-red-700">Add</span>{' '}
        <span className="text-white">Products</span>
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

              <div className="form-control">
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

export default AddProductsPage;
