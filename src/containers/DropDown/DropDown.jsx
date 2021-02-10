import React from "react";
import{Flex} from '@rebass/grid';
import {ProgressBar} from '../ProgressBarComp/index';

class DropDown extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'progress1'};  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    
    render() {
        const dropDownStyles = {
          height: 50,
          width: 100,
          marginBottom:20,
          marginTop:20,
          backgroundColor: "orange",
          }
      return (
        <Flex flexDirection="column">
            <h1 ><strong> Progress Bars Demo</strong><br/>
                <select style={dropDownStyles} value={this.state.value} onChange={this.handleChange}>
                <option value="progress1">#Progress1</option>
                <option value="progress2">#Progress2</option>
                <option value="progress3">#Progress3</option>
                </select>   
            </h1>     
         <ProgressBar show ={this.state.value}/>
         </Flex>
      );
    }
  }
export default DropDown;