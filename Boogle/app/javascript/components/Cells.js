import React from "react";


const divStyle = {
 
 width:'200px',



};

const divStyle1 = {
 background:'#eee',
 border:'1px solid #000',
display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh',
 
 width:'25%',
 float:'left',

 
};




class Cells extends React.Component{
  constructor(props) {
        super(props)
  this.state = {
       
            cells: [],
          }
       


    }


    getShuffledData(){
       let   alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']
       let a1=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a2=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a3=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a4=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
      
       

      let mtrx=[a1,a2,a3,a4]

      let arr = []
      for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
              arr.push(<div  style={divStyle1} key={i+''+j}>{mtrx[i][j] }</div>)
          }
      }

       this.setState({cells:arr})
  }

  componentDidMount(){
    this.getShuffledData();
  }

    render(){

      return (
        <div style={divStyle}>
            {this.state.cells}
        </div>
    )
    }

  }

export default Cells