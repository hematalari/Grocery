import React, { useState } from 'react';
import './List.css';

function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        All Categories
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Fruits</li>
          <li className="dropdown-item">Vegetables</li>
          <li className="dropdown-item">Flour</li>
          <li className="dropdown-item">Meat</li>
          <li className="dropdown-item">Dairy</li>
          <li className="dropdown-item">Cookies</li>
        </ul>
      )}
      <tb />
      <input className='search' type='text' placeholder='search'/>
    </div>
  );
}

export default CategoriesDropdown;
