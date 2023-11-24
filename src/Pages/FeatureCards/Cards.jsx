import 'aos/dist/aos.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Cards = ({ feature }) => {
  const { user } = useContext(AuthContext);
  const { img, name } = feature || {};
  const navigate = useNavigate();

  const handleVote = () => {
    if (!user) {
      navigate('/login');
    }
  };

  return (
    <div>
      <div data-aos="zoom-in-right" className="card shadow-xl">
        <figure>
          <img className="w-[400px] h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <div className="card-actions justify-end">
            <button onClick={handleVote} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
