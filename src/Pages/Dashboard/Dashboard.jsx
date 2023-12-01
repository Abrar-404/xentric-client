import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidCartAlt } from 'react-icons/bi';
import { FaHome, FaUtensils } from 'react-icons/fa';
import useCarts from '../../Components/Hooks/useCarts';
import useAdmin from './../../Components/Hooks/useAdmin';
import '../../Components/Styles/button.css';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Dashboard = () => {
  const [cart] = useCarts();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const { user } = useContext(AuthContext);

  return (
    <div className="flex">
      {/* dashboard sidebar */}

      <div className="w-64 min-h-screen bg-[#1A186C] button-85">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/statistics">
                  {' '}
                  <FaHome></FaHome> Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/coupons">
                  {' '}
                  <FaUtensils></FaUtensils> Manage Coupons
                </NavLink>
              </li>
              <li>
                <NavLink to="/allUsers">
                  {' '}
                  <FaUtensils></FaUtensils> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <li>
                <NavLink to="/addProducts">
                  {' '}
                  <BiSolidCartAlt></BiSolidCartAlt> Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/myProfile">
                  {' '}
                  <FaHome></FaHome> My Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/myProducts">
                  {' '}
                  <BiSolidCartAlt></BiSolidCartAlt>My Cart : ({cart.length})
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/allUsers">
                  {' '}
                  <FaUtensils></FaUtensils> Manage Users
                </NavLink>
              </li> */}
            </>
          )}
          <hr />
        </ul>
      </div>

      <div className="diff lg:aspect-[10/2] md:aspect-[8/3] aspect-[5/3] mt-5">
        <div className="diff-item-1">
          <div className="  text-secondary  lg:text-8xl md:text-6xl text-4xl font-black grid place-content-center">
            {user?.displayName}
          </div>
        </div>
        <div className="diff-item-2">
          <div
            className=" lg:text-8xl md:text-6xl text-4xl text-white
             font-black grid place-content-center"
          >
            <h1>{user?.displayName || user?.name}</h1>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
