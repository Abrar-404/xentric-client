import { useEffect, useState } from "react";
import CouponsCard from './CouponsCard';

const CouponList = () => {

  const [couponItem, setCouponItem] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/coupons')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCouponItem(data);
      });
  }, []);

  return (
    <div>
      {couponItem?.map(coup => (
        <CouponsCard key={coup?._id} coupon={coup}></CouponsCard>
      ))}
    </div>
  );
};

export default CouponList;