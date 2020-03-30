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








const Cells = (props) => {
      let   alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z']
       let a1=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a2=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a3=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
       let a4=alpha.sort(() => 0.5 - Math.random()).slice(0, 4)
      
       

    let mtrx=[a1,a2,a3,a4]

    let cells = []
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            cells.push(<div class="grid-item" style={divStyle1} key={i+''+j}>{mtrx[i][j] }</div>)
        }
    }
    return (
        <div style={divStyle}>
            {cells}
        </div>
    )
}

export default Cells