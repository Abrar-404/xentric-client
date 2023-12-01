import { Navigate, useLocation } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import useAdmin from '../Components/Hooks/useAdmin';
import useAuth from '../Components/Hooks/useAuth';

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center h-[100vh] space-y-96 items-center">
        <CircleLoader className="" color="#36d7b7" size={96} />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
