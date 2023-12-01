import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex justify-evenly text-white text-3xl mt-20">
        <h1>All Users</h1>
        <h1>Total Users {users?.length}</h1>
      </div>
    </div>
  );
};

export default AllUsers;
