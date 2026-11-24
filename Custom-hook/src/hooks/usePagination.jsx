import React from 'react'

import { useState } from 'react';

const usePagination = (items,pageSize) => {

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(items.length / pageSize); 

     const startIndex = (currentPage - 1) * pageSize;

     const currentItem = items.slice (
        startIndex,
        startIndex + pageSize
     )

      const nextPage = () => {
        setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
        );
    };

    const prevPage = () => {
        setCurrentPage((prev) =>
            Math.max(prev - 1, 1)
        );
    };


  return{currentItem, currentPage, totalPages, nextPage, prevPage}
}

export default usePagination