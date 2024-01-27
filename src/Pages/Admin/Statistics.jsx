import { useEffect, useState } from 'react';
import { PieChartAdmin } from './PieChartAdmin';
import useCarts from './../../Components/Hooks/useCarts';
import axios from 'axios'; // Import Axios for making HTTP requests
import Transition from '../../Components/Transitions/Transition';


const Statistics = () => {
  const [cart] = useCarts();
  const [userData, setUserData] = useState([]); // State to store user data

  useEffect(() => {
    // Fetch user data from your backend API
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const productData = cart.map(item => ({
    name: item?.name || item?.product || 'Unknown Product',
    price: item?.price,
    user: item?.user?.email || 'Unknown User',
  }));

  return (
    <div>
      <PieChartAdmin userData={userData} productData={productData} />
    </div>
  );
};

export default Transition(Statistics);
