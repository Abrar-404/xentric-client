import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <li className=" -mr-[2%] font-script text-xl font-extrabold">
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? null : (
        <>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/myBookings">My Bookings</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/rooms">Rooms</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/newsletter">Newsletter</NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/myBookings">My Bookings</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/rooms">Rooms</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className="font-script text-xl font-extrabold">
            <NavLink to="/newsletter">Newsletter</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      {/* fixed z-[10] mx-auto md:max-w-[768px] max-w-[428px] lg:max-w-[1400px] */}
      <div className="navbar bg-[#F0E6E7]">
        <div className="navbar-start">
          <div className="dropdown ">
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
            {/* <img className="w-[120px] h-[70px]" src={img} alt="" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <div className="text-white mr-10 text-3xl">
            <NavLink to="/cart">
              <BsCart3></BsCart3>
            </NavLink>
          </div> */}
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn text-base mb-2 btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary border-none text-xs text-white bg-[#AA7474]">
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
