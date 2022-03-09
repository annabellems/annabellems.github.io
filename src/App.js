import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import BusOperators from './components/Bus/BusOperators';
import BusOperatorItem from './components/Bus/BusOperatorItem';
const App =()=>{

  return (
<Switch>
  <Route path ='/' exact>
    <Redirect to ='/busOperators'/>
  </Route>
  <Route path ='/busOperators' exact>
  <BusOperators/> 
  </Route>
  <Route path ='/busOperators/:busOperatorName'>
    <BusOperatorItem/>
  </Route>   
</Switch>
  );

}

export default App;