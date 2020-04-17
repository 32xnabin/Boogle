import React from "react";
import styled from "styled-components";

const Box = styled.div`
  line-height: 100px;
  font-size: 2em;
  font-family: sans serif;
  max-width: 25%;
  text-align: center;
  background-color: #eee;
  border: 1px solid black;
  vertical-align: center;
  text-transform: uppercase;
`;

function Cells(props) {
  let boxes = [];
  for (let i = 0; i < props.matrix.length; i++) {
    for (let j = 0; j < props.matrix[i].length; j++) {
      boxes.push(
        <Box className="col-sm-3" key={i + "" + j}>
          {props.boardLetters[i][j]}
        </Box>
      );
    }
  }
  return <div className="row">{boxes}</div>;
}

export default Cells;
