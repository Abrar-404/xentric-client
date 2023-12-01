import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async () => {
      console.log('asking or checking is admin', user);

      try {
        const res = await axiosSecure.get(`/user/admin/${user.email}`);
        return res.data?.admin;
      } catch (error) {
        console.error('Error fetching isAdmin:', error);
        return false;
      }
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
