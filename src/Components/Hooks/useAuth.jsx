
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth || { logOut: () => {} }; // Default value to prevent destructuring issues
};

export default useAuth;
