import React from "react";
import {Row, Col, Container} from "react-bootstrap";

const Book:React.FC = () =>{
    return(
        <Container fluid={true}>
            <li >
                <Row className='pl-0'>
                    <Col xs={9} className='pl-0'>
                        <label>1. Book</label>
                    </Col>
                    <Col xs={3} className='pl-5'>
                        <i className='feather-edit text-warning pr-2'/>
                        <i className='feather-trash-2 text-danger'/>
                    </Col>
                </Row>
            </li>
        </Container>
    )
};

export default Book;
