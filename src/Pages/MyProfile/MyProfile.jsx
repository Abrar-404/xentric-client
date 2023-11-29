import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

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

        <h1 className="text-center mt-10 text-3xl text-white font-noto-serif font-bold">
          {user?.displayName}
        </h1>

        <h1 className="text-center mt-10 text-xl text-white">
          Email : {user?.email}
        </h1>

        <div className="card bg-sky-950 bg-opacity-20 lg:w-[800px] md:w-[600px] justify-center flex mx-auto mt-10 text-primary-content">
          <div className="card-body">
            <div className="flex lg:flex-row md:flex-row flex-col items-center">
              <img
                src="https://i.ibb.co/tpykT7Z/dci1u96-bc9baa6c-f4ec-43ec-afff-1dec8af5c5d1.gif"
                alt=""
              />
              <div className="text-left">
                <p className="mb-10 text-white text-lg">Subscription</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-secondary">
                    Subscribe Now $20
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
