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
  const { img, name } = feature || {};
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
      <div data-aos="zoom-in-right" className="card shadow-xl">
        <div className="glassBox">
          <div className="glassBox__imgBox">
            <img className="rounded-full" src={img} alt="" />

            <Link to="/products">
              <h3 className="glassBox__title">{name}</h3>
            </Link>
          </div>
          <div className="mt-20 text-white">
            <button className="button-85" onClick={handleVote}>
              Upvote
            </button>
            <span className="ml-2">{voteCount} votes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
