import { useState, useEffect } from 'react';

const Pagination = ({ fetchData }) => {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
  
    const handlePagination = (newOffset) => {
      setOffset(newOffset);
    };
  
    useEffect(() => {
      fetchData({ limit, offset });
    }, [limit, offset, fetchData]);
  
    return (
      <div>
        <button onClick={() => handlePagination(offset - limit)} disabled={offset === 0}>
          Previous
        </button>
        <span>{`Results ${offset + 1}-${offset + limit}`}</span>
        <button onClick={() => handlePagination(offset + limit)}>Next</button>
      </div>
    );
  };
  
  export default Pagination;