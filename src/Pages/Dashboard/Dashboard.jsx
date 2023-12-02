import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidCartAlt } from 'react-icons/bi';
import { FaHome, FaUtensils } from 'react-icons/fa';
import useCarts from '../../Components/Hooks/useCarts';
import useAdmin from './../../Components/Hooks/useAdmin';
import '../../Components/Styles/button.css';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useModerator from './../../Components/Hooks/useModerator';
import { PieChart } from '../../Components/PieChart.jsx/PieChart';

const Dashboard = () => {
  const [cart] = useCarts();
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  console.log(isAdmin);
  console.log(isModerator);
  const { user } = useContext(AuthContext);

  const productData = cart.map(item => ({
    name: item?.name || item?.product || 'Unknown Product',
    price: item?.price || 0,
  }));

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={user?.photoURL}
          alt=""
        />
      </div>
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
            ) : isModerator ? (
              <>
                <li>
                  <NavLink to="/productReview">
                    {' '}
                    <FaHome></FaHome> Products Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reported">
                    {' '}
                    <FaUtensils></FaUtensils> Reported
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
                
              </>
            )}
            <hr />
          </ul>
        </div>

        <PieChart productData={productData} />

        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
