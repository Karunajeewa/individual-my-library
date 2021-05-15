import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const AuthorTitle:React.FC = () =>{
    return(
        <Container fluid={true} >
            <Row className='sub-title'>
                <h1>Authors</h1>
            </Row>
        </Container>
    )
}
export default AuthorTitle;