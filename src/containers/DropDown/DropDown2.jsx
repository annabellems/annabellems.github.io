import React from "react";
import {ProgressBarComp2} from '../ProgressBarComp/index';

class DropDown2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'progress1'};  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    render() {
        const containerStyles = {
            height: 20,
            width: '800px',
            borderRadius: 50,
            margin: 50,
          }
      return (
        <div style={containerStyles} >
            <h1 ><strong> Progress Bar Demo</strong><br/>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="progress1">#Progress1</option>
                <option value="progress2">#Progress2</option>
                <option value="progress3">#Progress3</option>
                </select>   
            </h1>     
         <ProgressBarComp2 show ={this.state.value}/>
         </div>
      );
    }
  }
export default DropDown2;