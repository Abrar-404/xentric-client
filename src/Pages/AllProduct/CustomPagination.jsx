import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CustomPagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = page => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center w-full sm:w-3/5 gap-2 mt-10 md:w-3/5 lg:w-3/5 mx-auto">
      {Array.from({ length: totalPages }).map((_, index) => (
        <input
          key={index}
          className={`join-item btn btn-square ${
            currentPage === index + 1 ? 'active' : ''
          }`}
          type="radio"
          name="options"
          aria-label={`${index + 1}`}
          checked={currentPage === index + 1}
          onChange={() => handlePageChange(index + 1)}
        />
      ))}
    </div>
  );
};

export default CustomPagination;
