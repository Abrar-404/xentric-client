import { Navigate, useLocation } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import useAuth from '../Components/Hooks/useAuth';
import useModerator from './../Components/Hooks/useModerator';

// eslint-disable-next-line react/prop-types
const ModeratorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isModerator, isModeratorLoading] = useModerator();
  const location = useLocation();

  if (loading || isModeratorLoading) {
    return (
      <div className="flex justify-center h-[100vh] space-y-96 items-center">
        <CircleLoader className="" color="#36d7b7" size={96} />
      </div>
    );
  }

  if (user && isModerator) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default ModeratorRoute;
