// import { useState, useEffect } from 'react';
// import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
// import AllProductPage from './AllProductPage';
// import CustomPagination from './CustomPagination';

// const ITEMS_PER_PAGE = 20;

// const AllProductLoader = () => {
//   const axiosPublic = useAxiosPublic();
//   const [itemsAll, setItemsAll] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     // Fetch data on mount
//     const fetchData = async () => {
//       try {
//         const response = await axiosPublic.get('/allItem');
//         setItemsAll(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [axiosPublic]);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = itemsAll.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(itemsAll.length / ITEMS_PER_PAGE);

//   const handlePageChange = page => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div>
//         {/* search bar */}
//         <div className="flex items-center justify-center">
//           <div>
//             <input
//               type="text"
//               placeholder="Type here"
//               className="input input-bordered input-secondary w-full max-w-xs"
//             />
//           </div>
//           <button className="btn btn-primary">Search</button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto mt-32">
//         {currentItems.map(item => (
//           <AllProductPage key={item._id} item={item} />
//         ))}
//       </div>

//       <CustomPagination
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default AllProductLoader;

import { useState, useEffect } from 'react';
import useAxiosPublic from '../../Components/Hooks/useAxiosPublic';
import AllProductPage from './AllProductPage';
import CustomPagination from './CustomPagination';
import '../../Components/Styles/button86.css';

const ITEMS_PER_PAGE = 20;

const AllProductLoader = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsAll, setItemsAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredItems = itemsAll.filter(
    item =>
      item &&
      item.name &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    // Implement search logic here, e.g., fetch data based on the search query
    // Update the state with the filtered items
  };

  return (
    <div>
      <div>
        {/* search bar */}
        <div className="flex items-center gap-2 justify-center mt-10">
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary text-white bg-transparent w-full max-w-xs"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn button-85" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
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
