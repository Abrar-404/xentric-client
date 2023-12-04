import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import CouponsCard from './CouponsCard';
import '../../Components/Styles/texteffect.css';

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
    <div className="mt-48">
      <h1 className="text-6xl text-flicker-in-glow font-vermin text-white text-center">
        Coupons
      </h1>
      {coupons?.map(coup => (
        <CouponsCard key={coup?._id} coup={coup}></CouponsCard>
      ))}
    </div>
  );
};

export default CouponList;
