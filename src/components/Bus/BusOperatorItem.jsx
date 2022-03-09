import React from 'react';
import {useParams, Link} from 'react-router-dom';
import busServices from './Mock_api/bus-services.json';
import './BusOperatorItem.module.css';

const BusOperatorItem = () => {
  const params =useParams();
  const busOperatorHighlighted = busServices.operators.find(busService=> busService.name===params.busOperatorName)

  if(!busOperatorHighlighted){
    return <p>No Bus Operator found</p>;
  }

  return (
    <div className ='app-container'>      
    <table>
    <thead>
      <tr>
        <th>Bus Id</th>
        <th>Route Variant</th>
        <th>Status</th>
      </tr>
      
   </thead>
    <tbody>
      
    {busOperatorHighlighted.routes.map((item)=>(
    <tr>
    <td>        
        {item.id}        
    </td>
    <td>{item.routeVariant}</td>
    <td>{item.deviationFromTimetable===0?'On Time':item.deviationFromTimetable>0? 'Late':'Early'}</td>
    </tr>
    ))}
   </tbody>
  </table>
  
  <Link className='btn' to ='/busOperators'>Back</Link>
  </div>
  );
};

export default BusOperatorItem;
