import { useState } from 'react';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import AllProductPage from './AllProductPage';

const AllProductLoader = () => {
  const axiosPublic = useAxiosPublic();

  const [itemsAll, setItemsAll] = useState([]);

  axiosPublic.get('/allItem').then(res => {
    setItemsAll(res.data);
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-32">
        {itemsAll?.map(item => (
          <AllProductPage key={item._id} item={item}></AllProductPage>
        ))}
      </div>
    </div>
  );
};

export default AllProductLoader;
