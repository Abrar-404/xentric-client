const CouponsCard = ({ coup }) => {
  const { name } = coup || {};

  return (
    <div>
      <h1 className="text-3xl text-white">{name}</h1>
    </div>
  );
};

export default CouponsCard;
