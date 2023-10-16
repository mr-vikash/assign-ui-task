import React, { useState } from 'react';
import './Header.styles.css';
import IconHandWave from './svg/IconHandWave';
import { FaSearch } from 'react-icons/fa';


const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="header">
      <div id='profile'>
        Hello Shahrukh <IconHandWave/>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        style={{
          padding: '10px', // Set padding for input
          border: 'none', // Set border for input
          borderRadius: '5px', // Set border radius for input
          marginRight: '10px', // Set margin between input and search icon
          flex: 1, // Allow input to take remaining space
        }}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <FaSearch style={{ color: '#999', fontSize: '20px' }} /> {/* Style the search icon */}
    </div>
    </div>
  );
};

export default Header;
