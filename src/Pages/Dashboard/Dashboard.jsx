import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-h-screen">
      <div className="mt-32 flex lg:flex-row md:flex-row flex-col mx-auto items-center justify-center gap-32">
        {/* My Profile */}
        <div
          className="card w-60"
          style={{
            background: '#141146',
            boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
          }}
        >
          <figure className="px-10 pt-10">
            <img src={user?.photoURL} alt="user" className="rounded-full" />
          </figure>
          <div
            className="card-body items-center text-center"
            style={{ color: '#ffffff' }}
          >
            <h2 className="card-title">My Profile</h2>
            <div className="card-actions mt-10">
              <Link to="/myProfile">
                <button
                  style={{
                    background: '#141146',
                    boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
                  }}
                  className="btn mb-5"
                >
                  <span style={{ color: '#ffffff' }}>Go To Profile</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* add products */}

        <div
          className="card w-60"
          style={{
            background: '#141146',
            boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
          }}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/RPXBSDw/7S7F.gif"
              alt="Product"
              className="rounded-full"
            />
          </figure>
          <div
            className="card-body items-center text-center"
            style={{ color: '#ffffff' }}
          >
            <h2 className="card-title">Add Product</h2>
            <div className="card-actions mt-10">
              <Link to="/addProducts">
                <button
                  style={{
                    background: '#141146',
                    boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
                  }}
                  className="btn mb-5"
                >
                  <span style={{ color: '#ffffff' }}>Here You Go</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* my products */}

        <div
          className="card w-60"
          style={{
            background: '#141146',
            boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
          }}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/RPXBSDw/7S7F.gif"
              alt="Product"
              className="rounded-full"
            />
          </figure>
          <div
            className="card-body items-center text-center"
            style={{ color: '#ffffff' }}
          >
            <h2 className="card-title">My Product</h2>
            <div className="card-actions mt-10">
              <Link to="/myProducts">
                <button
                  style={{
                    background: '#141146',
                    boxShadow: '0 0 20px 10px #db0353, 0 0 40px 20px #db0353',
                  }}
                  className="btn mb-5"
                >
                  <span style={{ color: '#ffffff' }}>Go There</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
