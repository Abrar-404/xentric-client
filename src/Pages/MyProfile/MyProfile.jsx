import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Transition from './../../Components/Transitions/Transition';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="justify-center flex mt-32">
          <img
            className=" w-[200px] h-[200px] rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>

        <div className="diff lg:aspect-[16/3] md:aspect-[8/3] aspect-[5/3] mt-5">
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
              <h1>{user?.displayName}</h1>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>

        <h1 className="text-center mt-10 text-xl text-white">
          Email : {user?.email}
        </h1>

        <div className="card bg-sky-950 bg-opacity-20 lg:w-[800px] md:w-[600px] justify-center flex mx-auto mt-10 text-primary-content">
          <div className="card-body">
            <div className="flex lg:flex-row md:flex-row flex-col items-center">
              <img
                src="https://i.ibb.co/dWSgBgM/dci1u96-bc9baa6c-f4ec-43ec-afff-1dec8af5c5d1.gif"
                alt=""
              />
              <div className="text-left">
                <p className="mb-10 text-white text-lg">Subscription</p>
                <Link to="/payment">
                  <div className="card-actions justify-start">
                    <button className="btn btn-secondary">
                      Subscribe Now $20
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(MyProfile);
