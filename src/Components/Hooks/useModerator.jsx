import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
// import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useModerator = () => {
  // const { user, loading } = useAuth();
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isModerator, isPending: isModeratorLoading } = useQuery({
    queryKey: [user?.email, 'isModerator'],
    enabled: !loading,
    queryFn: async () => {
      // console.log('asking or checking is moderator', user);

      try {
        const res = await axiosSecure.get(`/user/moderator/${user.email}`);
        // console.log(res.data);
        return res.data?.moderator;
      } catch (error) {
        // console.error('Error fetching isAdmin:', error);
        return false;
      }
    },
  });

  return [isModerator, isModeratorLoading];
};

export default useModerator;
