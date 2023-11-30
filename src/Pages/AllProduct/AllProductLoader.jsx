import { useState, useEffect } from 'react';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import AllProductPage from './AllProductPage';
import CustomPagination from './CustomPagination';

const ITEMS_PER_PAGE = 20;

const AllProductLoader = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsAll, setItemsAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch data on mount
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/allItem');
        setItemsAll(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = itemsAll.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(itemsAll.length / ITEMS_PER_PAGE);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto mt-32">
        {currentItems.map(item => (
          <AllProductPage key={item._id} item={item} />
        ))}
      </div>

      <CustomPagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AllProductLoader;
