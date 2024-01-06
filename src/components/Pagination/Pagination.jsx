import React, { useState } from "react";
import data from "./Data";
import "./Pagination.css";
import NamesList from "./NamesList";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [namesPerPage, setNamesPerPage] = useState(6);

  const lastNameIndex = currentPage * namesPerPage;
  const firstNameIndex = lastNameIndex - namesPerPage;
  const currentName = data.slice(firstNameIndex, lastNameIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / namesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagination">
      <NamesList currentName={currentName} />
      <div className="paginate-number">
        <ul>
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <span className="paginate-btn" onClick={() => paginate(number)}>
                  {number}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
