import { Link } from 'react-router-dom';
import '../../Components/Styles/button49.css';
import '../../Components/Styles/texteffect.css';

const ErrorElements = () => {
  const background = {
    backgroundImage: `url(https://i.ibb.co/Hny4hgt/45473.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
    <div className="" style={background}>
      <div className="mx-auto h-screen">
        <img
          className="mx-auto h-[200px] w-[200px] lg:w-[400px] lg:h-[500px] md:w-[200px] md:h-[200px]"
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
    </div>
  );
};

export default ErrorElements;
