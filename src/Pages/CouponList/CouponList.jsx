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
    <div>
      <h1 className="text-6xl text-flicker-in-glow font-vermin text-white text-center ">
        Coupons
      </h1>
      <div className="mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        {coupons?.map(coup => (
          <CouponsCard key={coup?._id} coup={coup}></CouponsCard>
        ))}
      </div>
    </div>
  );
};

export default CouponList;
