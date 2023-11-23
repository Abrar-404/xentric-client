import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import '../../Components/Styles/button.css';
import '../../Components/Styles/button2.css';
import '../../Components/Styles/form.css';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
  const { registerUser, googleRegister } = useContext(AuthContext);
  const [errorRegi, setErrorRegi] = useState('');
  const [successRegi, setSuccessRegi] = useState('');
  const naviGate = useNavigate();

  const handleGoogleSignIn = () => {
    googleRegister()
      .then(result => {
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });
        naviGate('/login');
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRegister = e => {
    setErrorRegi('');
    setSuccessRegi('');

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    console.log(email, name, password, photo);

    if (password.length < 6) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should be at least 6 characters long.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one uppercase character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        imageUrl: `https://i.ibb.co/hfQtDDz/piffle-error.gif`,
        title: 'Password should contain at least one special character.',
        width: 600,
        padding: '3em',
        color: '#C70039 ',
        background:
          '#fff url(https://i.ibb.co/nfmHX3X/depositphotos-182476906-stock-illustration-holographic-vector-backgrounds.webp)',
        backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
      });
      return;
    }

    registerUser(email, password)
      .then(result => {
        console.log(result);
        Swal.fire({
          imageUrl: `https://i.ibb.co/H4HnLmL/yippee-yay.gif`,
          title: 'WOOHOOO!!!! Welcome To The World!!!!',
          width: 600,
          padding: '3em',
          color: '#7CFC00',
          background: '#fff url()',
          backdrop: `
    rgba(0,0,123,0.4)
    top
    no-repeat
  `,
        });
        naviGate('/login');
        setSuccessRegi();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl text-white font-bold">Register!</h1> */}
            <img
              className="w-[400px] h-[380px] lg:ml-36 gap-5"
              src="https://i.ibb.co/RcKzhfv/output-onlinegiftools-1.gif"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-opacity-60">
            <form onSubmit={handleRegister} className="card-body button-85">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered button-85"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold ">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  className="input input-bordered button-85"
                  required
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered button-85"
                  required
                  name="email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered button-85"
                  required
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-white font-bold link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2 w-full">
                <button className="button-60 w-full ml-28" role="button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="text">Register</span>
                </button>
              </div>

              {
                <p className="text-white">
                  Already Have An Account? Please{' '}
                  <Link className="font-bold text-blue-700" to="/login">
                    Login
                  </Link>
                </p>
              }

              <div
                className="w-full justify-center items-center flex mx-auto"
                onClick={handleGoogleSignIn}
              >
                <button
                  role="button"
                  className="button-85 flex w-full text-center justify-center items-center gap-5"
                >
                  <FcGoogle></FcGoogle> Google
                </button>
              </div>
            </form>
            {errorRegi && (
              <p className="text-center text-red-500">{errorRegi}</p>
            )}
            {successRegi && <p className="text-green-500">{successRegi}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
