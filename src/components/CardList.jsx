import React from 'react';
import './CardListStyle.css'; // Import the styles
import SvgIcon from './SvgIcon';

import Colors from './Colors';


const CardList = ({ searchTerm }) => {
  // Sample data for cards
  const cards = [
    { id: 1, title: 'Card 1', text1:'Earning' ,text2:'$198k', text3:'37.8% this month'},
    { id: 2, title: 'Card 2', text1:'Order' ,text2:'$2.4k', text3:'2% this month' },
    { id: 3, title: 'Card 3', text1:'Balance' ,text2:'$2.4k', text3:'2% this month' },
    { id: 4, title: 'Card 4', text1:'Total sale' ,text2:'$89k', text3:'11% this month' },
    
    
  ];
  
  const filteredCards = cards.filter((card) =>
    card.text1.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-list" >
      {filteredCards.map((card) => (
        <div className="card " key={card.id}>
          
            
            
            <SvgIcon option={card.id}/>
            <div className='card-txt'>
            <p>{card.text1}</p>
            <h2>{card.text2}</h2>
            <Colors id={card.id} text3={card.text3}/>
            </div>
            
          
        </div>
      ))}
      
    </div>
  );
};

export default CardList;
