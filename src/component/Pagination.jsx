
import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, currentPage, onPageChange }) {
  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center my-10 w-full">
      <ReactPaginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={(e) => onPageChange(e.selected)}
        previousLabel="←"
        nextLabel="→"
        breakLabel="..."
        containerClassName="flex flex-wrap items-center gap-2 text-sm sm:text-base"
        pageClassName="group"
        pageLinkClassName="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-all duration-200"
        previousClassName="group"
        previousLinkClassName="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all duration-200"
        nextClassName="group"
        nextLinkClassName="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all duration-200"
        breakClassName="group"
        breakLinkClassName="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md font-medium cursor-default"
        activeClassName="active"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
      <style>{`
        .active .page-link,
        .active a {
          background-color: #000000 !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}
