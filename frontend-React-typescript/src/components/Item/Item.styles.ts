import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2px;

  button {
    border-radius: 0 0 20px 20px;
  }
  h3{
    color:green;
  }

  img {
    max-width: 200px;
    max-height:200px;
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
