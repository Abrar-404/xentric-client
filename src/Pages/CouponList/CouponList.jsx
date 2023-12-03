import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import CouponsCard from './CouponsCard';

const CouponList = () => {

  const axiosSecure = useAxiosSecure();

  const { data: coupons = [] } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const res = await axiosSecure.get('/coupons', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      return res.data;
    },
  });

  return (
    <div>
      {coupons?.map(coup => (
        <CouponsCard key={coup?._id} coup={coup}></CouponsCard>
      ))}
    </div>
  );
};

export default CouponList;
