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
      <h1>
        {coupons?.map(itemCoupon => (
          <CouponsCard
            key={itemCoupon?._id}
            itemCoupon={itemCoupon}
          ></CouponsCard>
        ))}
      </h1>
    </div>
  );
};

export default CouponList;
