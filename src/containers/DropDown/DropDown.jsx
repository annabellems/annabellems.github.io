import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {ProgressBarComp} from '../ProgressBarComp/index';
class DropDown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      enabled: ''
    };    
  }
  render() {
const options = [
  { value: 'one', label: '#Progress1' },
  { value: 'two', label: '#Progress2' }
  ];
  
  
const setProgressBar=(e)=> {
  if(e.value==='one') {
    this.setState(state=>{
      return{enabled:state.enabled='progress1'};
  })}
  else {
    this.setState(state=>{
      return{enabled:state.enabled='progress2'};
  })}
};
const styleDropDown = {
  width: '100%',
  background: "green"
};

  return(
    <div>      
    <Dropdown 
    style={styleDropDown}
    name="abc"
    options={options} 
    onChange={setProgressBar}
    value={options.value} 
    placeholder="Select an option" />
    <ProgressBarComp
    show ={this.state.enabled}
    />
    </div>
  );
  }
}

export default DropDown;