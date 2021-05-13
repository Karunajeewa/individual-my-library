import React from 'react';
import './App.scss';
import Welcome from "./components/Welcome";
import ReadingArea from "./components/ReadingArea";
import {Container} from "react-bootstrap";


const App:React.FC = ()=>{
  return(
      <Container fluid={true}>
          <Welcome/>
          <ReadingArea/>
      </Container>
  )
};

export default App;