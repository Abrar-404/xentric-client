import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[100vh]">
        <img
          className="text-center mt-40 mx-auto flex justify-center"
          src="https://i.ibb.co/Kz2Xnfy/bece0c797cb134aefb2cb836578c9249.gif"
        ></img>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
