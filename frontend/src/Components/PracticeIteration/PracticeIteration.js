import React from 'react';
import './PracticeIteration.css';
import acRepairImage from '../../Assets/Images/acRepair.png';
import allCarImage from '../../Assets/Images/allCar.png';
import engineRepairImage from '../../Assets/Images/engineRepair.png';

const PracticeIteration = () => {

  const practice = [
    { image: acRepairImage, 
      name: 'AC Repair', 
      time: '09:00 AM', 
      note: 'Not yet done' },
    { image: allCarImage, 
      name: 'All Car Maintenance', 
      time: '10:00 AM', 
      note: 'Not yet done' },
    { image: engineRepairImage, 
      name: 'Engine Repair', 
      time: '11:00 AM', 
      note: 'Not yet done' },
  ];
    
  return (
    <div>
      <h1>Task</h1>
       <ul>
        {practice.map((service) => (
          <li key={service.time}>
            <img src={service.image} alt={`Image for ${service.name}`} />
            <p>{service.name}</p>
            <p>{service.time}</p>
            <p>{service.note}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PracticeIteration