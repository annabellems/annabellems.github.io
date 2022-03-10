import React from 'react';
import Card from '../UI/Card';
import classes from './Bus.module.css';
import BusOperator from './BusOperator';
import busServices from './Mock_api/bus-services.json';

const BusOperators = () => {
   const sortByDate = (dates)=>{
    return dates.sort((dateA,dateB)=>{
      return dateA.date>dateB.date?1:-1;
    });
  }

  const sortedDates=sortByDate(busServices.operators);
  
  
  return (
    <Card className={classes.bus}>
      <h2>Your Bus Operators</h2>
      
      
        {sortedDates.map((item, index)=>( <BusOperator
          key={index}
          item={{ name: item.name, date: item.date }}
        />))}
    </Card>
  );
};

export default BusOperators;
