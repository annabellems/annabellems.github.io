import React from "react";

class ProgressBarComp2 extends React.Component {
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
            height: 20,
            width: '700px',
            backgroundColor: "grey",
            borderRadius: 50,
            margin: 50,
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
            <button onClick={(e) => { this.handleClickDec(e,25,show); }}>-25</button>&nbsp;     
            <button onClick={(e) => { this.handleClickDec(e,10,show); }}>-10</button>&nbsp;   
            <button onClick={(e) => { this.handleClickInc(e,10,show); }}>+10</button>&nbsp;            
            <button onClick={(e) => { this.handleClickInc(e,25,show); }}>+25</button>&nbsp;            
        </React.Fragment>
      );
    }

  }

  export default ProgressBarComp2;