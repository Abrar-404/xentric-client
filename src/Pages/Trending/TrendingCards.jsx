import '../../Components/Styles/button.css';

// eslint-disable-next-line react/prop-types
const TrendingCards = ({ trending }) => {
  const { img, name } = trending || {};

  return (
    <div className="">
      <div className="card card-compact shadow-xl">
        <figure>
          <img
            className="w-[300px] h-[200px] rounded-full transform hover:rotate-45 transition duration-300 ease-in-out"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-share">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn button-85">Upvote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;