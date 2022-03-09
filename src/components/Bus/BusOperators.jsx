import React from 'react';
import Card from '../UI/Card';
import classes from './Bus.module.css';
import BusOperator from './BusOperator';
import busServices from './Mock_api/bus-services.json';

const BusOperators = () => {
  const sortedByDate = busServices.operators.sort((a,b)=>new Date(b.date)-new Date(a.date));
  
  
  return (
    <Card className={classes.bus}>
      <h2>Your Bus Operators</h2>
      
      
        {sortedByDate.map((item, index)=>( <BusOperator
          key={index}
          item={{ name: item.name, date: item.date }}
        />))}
    </Card>
  );
};

export default BusOperators;
