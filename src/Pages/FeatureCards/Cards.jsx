// eslint-disable-next-line react/prop-types
const Cards = ({ feature }) => {
  const { img, name } = feature || {};
  console.log(feature);
  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <img className="w-[400px] h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
