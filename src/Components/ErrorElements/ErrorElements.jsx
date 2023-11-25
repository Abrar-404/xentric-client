import { Link } from 'react-router-dom';
import '../../Components/Styles/button49.css';
import '../../Components/Styles/texteffect.css';

const ErrorElements = () => {
  return (
    <div className="mx-auto h-screen">
      <img
        className="mx-auto h-[400px] w-[600px] lg:w-[400px] lg:h-[500px] md:w-[500px] md:h-[400px]"
        src="https://i.ibb.co/2tv3rMP/Error-Sans.webp"
        alt=""
      />

      <div className="justify-center flex">
        <h1 className="font-alien-italic text-flicker-in-glow text-red-600 md:text-6xl text-4xl lg:text-8xl">
          404 Error
        </h1>
      </div>
      <div className="mx-auto flex mt-2 justify-center">
        <Link to="/">
          <button
            role="button"
            className="btn w-[100%] button-49 bg-slate-500 text-white px-10"
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElements;
