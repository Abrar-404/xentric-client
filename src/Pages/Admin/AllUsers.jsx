import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        },
      });
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: 'Success!',
          text: `${user?.name} is an admin now`,
          icon: 'success',
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
        axiosSecure.delete(`/users/${id}`).then(res => {
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
      <div className="flex justify-evenly text-white text-3xl mt-20">
        <h1>All Users</h1>
        <h1>Total Users {users?.length}</h1>
      </div>

      <div className="mt-20">
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
                <th className="text-white">Manage Users</th>
              </tr>
            </thead>
            <tbody>
              {users?.map(user => (
                <tr key={user._id}>
                  <td>
                    <h1 className="text-white">Active</h1>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          <h1 className="text-white">{user.name}</h1>
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
                      onClick={() => handleDeleteUser(user?._id)}
                      className="btn btn-ghost text-red-700 text-2xl"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <th>
                    {user.role === 'admin' ? (
                      'Admin'
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn text-2xl text-white btn-ghost btn-xs"
                      >
                        <FaUsers />
                      </button>
                    )}
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

export default AllUsers;
