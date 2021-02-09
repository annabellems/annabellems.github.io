import React from "react";
import styled from'styled-components';
import {Flex} from '@rebass/grid';

class ProgressBarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width1: 0,
      width2: 0
    };   
  }  

  render() {
    const {show}=this.props;
    const ProgressBarStyle =styled(Flex)`
    height: 20px;
    transition: width 0.3s;`

    const style1 = {
      width: this.state.width1 + '%',
      background: "yellow"
    };
    const style2 = {
      width: this.state.width2 + '%',
      background: "pink"
    };
    return (
      <div >
        <ProgressBarStyle style={style1} name='1' >
        {this.state.width1 + '%'}
        </ProgressBarStyle><br/>
        <ProgressBarStyle style={style2} name='2'>
        {this.state.width2 + '%'}
        </ProgressBarStyle>
        <br/>
        <button onClick={(e) => { this.handleClickInc(e,10,show); }}>
       +10       
       </button>&nbsp;
       <button onClick={(e) => { this.handleClickDec(e,10,show); }}>
       -10       
       </button>&nbsp;
       <button onClick={(e) => { this.handleClickInc(e,25,show); }}>
       +25      
       </button>&nbsp;
       <button onClick={(e) => { this.handleClickDec(e,25,show); }}>
       -25   
       </button>
      </div>
    );
  }
  
  handleClickInc(e,t,show) {
    if(show==='progress1'){
    this.setState(state => {
        return { width1: state.width1 + t };
      
    });}
    else if(show==='progress2'){this.setState(state => {
      return { width2: state.width2 + t };
    
  });}

  }

  handleClickDec(e,t,show) {
    if(show==='progress1'){
    this.setState(state => {
      if (state.width1 - t <0) {
        return { width1: 0};
      }
      return {         
        width1: state.width1 - t };
    }
    );
  }
  else if (show==='progress2'){
    this.setState(state => {
      if (state.width2 - t <0) {
        return { width2: 0};
      }
      return {         
        width2: state.width2 - t };
    }
    );

  }
}
}

export default ProgressBarComp;