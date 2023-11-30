import { useState, useEffect } from 'react';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import AllProductPage from './AllProductPage';

const ITEMS_PER_PAGE = 20;

const AllProductLoader = () => {
  // Initialize state
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

  // Calculate current items based on current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = itemsAll.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(itemsAll.length / ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Render component
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-32">
        {currentItems.map(item => (
          <AllProductPage key={item._id} item={item} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? 'active' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProductLoader;
