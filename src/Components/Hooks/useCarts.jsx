// Modified useCarts hook to conditionally fetch data based on user role
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import useModerator from './useModerator';

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const Moderator = useModerator();
  const isModerator = Moderator[0] || false;

  // Check if the user is a moderator
  // const isModerator = user?.role === 'moderator';
  // console.log(isModerator);

  // tanstack query
  const { refetch, data: cart = [] } = useQuery({
    queryKey: isModerator ? ['cart'] : ['cart', user?.email],
    queryFn: async () => {
      if (isModerator) {
        // console.log(isModerator);
        // Fetch all products for moderators
        const res = await axiosSecure.get(`/allProducts`);
        return res.data;
      } else {
        // Fetch only user-specific products for regular users
        const res = await axiosSecure.get(`/myProducts/?email=${user?.email}`);
        return res.data;
      }
    },
  });

  return [cart, refetch];
};

export default useCarts;
