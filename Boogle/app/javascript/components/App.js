import React from 'react'
import Cells from './Cells'

const container = {
 
 
display: 'flex',  justifyContent:'center', alignItems:'center', 
 width:'100%'
 

 
};


class App extends React.Component{

 
	

	render(){

      return(<div style={container}><Cells/></div>)

		}


}
export default App

