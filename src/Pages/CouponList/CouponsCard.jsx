const CouponsCard = ({ itemCoupon }) => {
  console.log('Coupon:', itemCoupon);
  const { name } = itemCoupon || {};
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default CouponsCard;
