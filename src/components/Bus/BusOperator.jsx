import React from 'react';
import classes from './BusOperator.module.css';
import {Link} from 'react-router-dom';

const BusOperator = (props) => {
  const {name,date } = props.item;
  return (
    <div className={classes.item}>
      <div className={classes.details}>        
          <Link className='btn' to ={`/busOperators/${name}`}>
            <div>{name}</div>
            <div>{date}</div>
          </Link>
        </div>
      </div>
  );
};

export default BusOperator;
