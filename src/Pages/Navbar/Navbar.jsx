import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import '../../Components/Styles/button.css';
import useCarts from './../../Components/Hooks/useCarts';
import { FaOpencart } from 'react-icons/fa';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCarts();

  const handleLogOut = () => {
    userLogOut()
      .then(result => {
        navigate('/');
        console.log(result?.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li className="">
        <button className="text-white bittushh btn-sm mr-1 mb-2 text-center">
          <NavLink to="/">Home</NavLink>
        </button>
      </li>

      {user ? null : (
        <>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/addProducts">Add Products</NavLink>
            </button>
          </li>

          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/allItem">Products</NavLink>
            </button>
          </li>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/trending">Trending</NavLink>
            </button>
          </li>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/myProducts">
                <div className="flex items-center gap-2">
                  <FaOpencart></FaOpencart>+{cart?.length}
                </div>
              </NavLink>
            </button>
          </li>
        </>
      )}

      {user && (
        <>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/allItem">Products</NavLink>
            </button>
          </li>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/trending">Trending</NavLink>
            </button>
          </li>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/addProducts">Add Products</NavLink>
            </button>
          </li>
          <li className="">
            <button className="text-white bittushh btn-sm mr-2 mb-2 text-center">
              <NavLink to="/myProducts">
                <div className="flex items-center gap-2">
                  <FaOpencart></FaOpencart>+{cart?.length}
                </div>
              </NavLink>
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-transparent shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              src="https://i.ibb.co/1YCvN7J/logo.png"
              className="w-[150px] h-[50px]"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || user?.photo}
                    alt={user?.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn text-base text-black mb-2 btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <Link to="/dashboard">
                  <li>
                    <button className="btn btn-sm mb-2 bittushh">
                      Dashboard
                    </button>
                  </li>
                </Link>
                <li>
                  <button
                    className="btn btn-sm bittushh"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button
                role="button"
                className="bittushh border-none text-xs text-white"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
