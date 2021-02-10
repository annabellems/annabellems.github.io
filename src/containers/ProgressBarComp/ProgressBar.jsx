import React from "react";
import{Flex,Box} from '@rebass/grid';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width1: 0,
        width2: 0,
        width3: 0,
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value =  target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleClickInc(e,t,show) {
        if(show==='progress1'){
            this.setState(state => {
                return { width1: state.width1 + t };          
            });
        }
        else if(show==='progress2'){
            this.setState(state => {
                return { width2: state.width2 + t };        
            });
        } 
        else if(show==='progress3'){
            this.setState(state => {
                return { width3: state.width3 + t };        
            });
        }    
    }

    handleClickDec(e,t,show) {
        if(show==='progress1'){
            this.setState(state => {
                if (state.width1 - t <0) {
                    return { width1: 0};
                }
                return {         
                    width1: state.width1 - t };
                });
        }

        else if (show==='progress2'){
            this.setState(state => {
                if (state.width2 - t <0) {
                    return { width2: 0};
                }
                return {         
                    width2: state.width2 - t };
                });    
        }

        else if (show==='progress3'){
            this.setState(state => {
                if (state.width3 - t <0) {
                    return { width3: 0};
                }
                return {         
                    width3: state.width3 - t };
                });    
        }
    }
  
    render() {
        const {show}=this.props;

        const containerStyles = {
            height: 40,
            backgroundColor: "grey",
            borderRadius: 50,
            marginLeft: 150,
            marginRight: 150,
            marginBottom:50,
            textAlign: 'center'
          }

          const buttonStyles = {
            height: 50,
            width: 70,
            backgroundColor: "yellow",
            textAlign: 'center'
          }
        
          const fillerStyles1 = {
            height: '100%',
            width: this.state.width1 >100 ? '100%':`${this.state.width1}%`,
            backgroundColor: this.state.width1 >100 ? 'red':'turquoise',
            borderRadius: 'inherit',
            textAlign: 'center'
          }

          const fillerStyles2 = {
            height: '100%',
            width: this.state.width2 >100 ? '100%':`${this.state.width2}%`,
            backgroundColor: this.state.width2 >100 ? 'red':'turquoise',
            borderRadius: 'inherit',
            textAlign: 'center'
          }

          const fillerStyles3 = {
            height: '100%',
            width: this.state.width3 >100 ? '100%':`${this.state.width3}%`,
            backgroundColor: this.state.width3 >100 ? 'red':'turquoise',
            borderRadius: 'inherit',
            textAlign: 'center'
          }
        
          const labelStyles = {
            padding: 5,
            color: 'black',
            fontWeight: 'bold'
          }
      return (
          <React.Fragment>
            <div style={containerStyles} >
                <div style={fillerStyles1}>
                    <span style={labelStyles}>{this.state.width1 + '%'}</span>
                </div><br/>
            </div>
            <div style={containerStyles} >
                <div style={fillerStyles2}>
                    <span style={labelStyles}>{this.state.width2 + '%'}</span>
                </div><br/>
            </div>
            <div style={containerStyles} >
                <div style={fillerStyles3}>
                    <span style={labelStyles}>{this.state.width3 + '%'}</span>
                </div><br/>
            </div>
            <Flex flexDirection="row">
                <Box flex="1">
                    <button style={buttonStyles} onClick={(e) => { this.handleClickDec(e,25,show); }}>-25</button>&nbsp;     
                    <button style={buttonStyles} onClick={(e) => { this.handleClickDec(e,10,show); }}>-10</button>&nbsp;   
                    <button style={buttonStyles} onClick={(e) => { this.handleClickInc(e,10,show); }}>+10</button>&nbsp;            
                    <button style={buttonStyles} onClick={(e) => { this.handleClickInc(e,25,show); }}>+25</button>&nbsp; 
                </Box>
            </Flex>
        </React.Fragment>
      );
    }

  }

  export default ProgressBar;