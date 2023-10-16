import React, { useState } from 'react';
import './App.css';
import '../src/components/CardListStyle.css';

import SideNav from './components/SideNav';
import Header from './components/Header';
import CardList from './components/CardList';
import CustomerCard from './components/CustomerCard';
import OverviewCard from './components/OverviewCard';
import Table from './components/Table';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <SideNav />
      <div className="main-content">
        <Header onSearch={handleSearch} />
        <CardList searchTerm={searchTerm} />
        <div className='card-list'>
          <OverviewCard/>
          <CustomerCard/>
        </div>
        <Table/>
      </div>
    </div>
  );
};

export default App;
