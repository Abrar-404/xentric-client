import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import '../../Components/Styles/cardflip.css';
import '../../Components/Styles/button.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Cards = ({ feature }) => {
  const { user } = useContext(AuthContext);
  const { img, name, _id, price } = feature || {};
  const navigate = useNavigate();
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    // Check if the user has voted in the local storage
    const hasVotedStorage = localStorage.getItem(`vote_${name}`);
    if (hasVotedStorage) {
      setHasVoted(true);
    }

    // Fetch the vote count from a backend server or another source
    // For now, let's assume it's 0
    setVoteCount(0);
  }, [name]);

  const handleVote = () => {
    if (!user) {
      navigate('/login');
    } else if (hasVoted) {
      setVoteCount(prevCount => prevCount + 1);
      // Update the vote count when the user clicks "Upvote"

      // Update local storage to indicate that the user has voted
      localStorage.setItem(`vote_${name}`, 'true');
      setHasVoted(true);
    } else {
      console.log('User has already voted.');
    }
  };

  return (
    <div>
      {/* <div data-aos="zoom-in-right" className="card shadow-xl">
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img className="rounded-full" src={img} alt="" />

            <Link to={`/featureCards/${_id}`}>
              <h3 className="glassBox__title">{name}</h3>
              <h3 className="mt-5 text-white">Price : {price}</h3>
            </Link>
          </div>
          <div className="mt-20 text-white">
            <button className="button-85" onClick={handleVote}>
              Upvote
            </button>
            <span className="ml-2">{voteCount} votes</span>
          </div>
        </div>
      </div> */}

      <div>
        <div data-aos="zoom-in-right" class="cardush shadow-xl">
          <img className="h-[200px]" src={img} alt="" />
          <div class="cardush__content">
            <Link to={`/featureCards/${_id}`}>
              <p class="cardush__title">{name}</p>
            </Link>
            <p class="cardush__description">Price : ${price}</p>

            <button onClick={handleVote} class="bittushh mt-5">
              Upvote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
