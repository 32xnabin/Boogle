import React from 'react'
import Cells from './Cells'
import Countdown from 'react-countdown-now';
import { Container, Row, Col,Button } from 'reactstrap';

const container = {
 
 display: 'flex', 
 justifyContent:'center', 
 alignItems:'center', 
 width:'100%'
};


const Completionist = () => <span>You are good to go!</span>;



class App extends React.Component{

 
	constructor(props) {
        super(props)

        this.state = {
       
            total_score: 0,
            timer_start: Date.now(),
            disabled:false,
            result:"",
            score:0
            
        }
    }
    submitWord(e) {
    }
    restart(e) {
    }
    start(e) {
    }

	render(){

      return(
    
      
		      <Container >
		       <Row >
		          <Col >
                  
		         
                 
		          </Col>
		        </Row>
		        <Row >
		          <Col sm="12" md={{ size: 6, offset: 3 }}>
                  
		          <Cells/>
                 
		          </Col>
		        </Row>
		        <Row >
		        
		          <Col sm="12" md={{ size: 6, offset: 3 }}>
		               <Countdown date={Date.now() + 180000}>
						      <Completionist />
						</Countdown>
						
						 score: <div >{this.props.score}</div>
					</Col>
					
		        </Row>
		        <Row>
			        <Col sm="12" md={{ size: 6, offset: 3 }}>
			         <input
	                    placeholder="Enter text here"
	                    onKeyDown={this.props.submitWord}
	                    disabled = {(this.props.disabled)? "disabled" : ""}
	                />
	                </Col>
	                
		        </Row>
		        <Row>
			      
			         <Col sm="12" md={{ size: 6, offset: 3 }}>
			         <label>{this.props.result}</label>
	                </Col>
	                
		        </Row>
		        <Row>
			        <Col sm="12" md={{ size: 6, offset: 3 }}>
			        <Button onClick={this.props.restart} color="primary" size="sm">Restart</Button>
			          
	                </Col>
		        </Row>
		        
		        </Container>  


      	)

		}


}
export default App

