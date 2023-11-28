import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { AuthContext } from '../Providers/AuthProvider';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center h-[100vh] space-y-96 items-center">
        <ClimbingBoxLoader className="" color="#36d7b7" size={48} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
