import React from "react";
import {Row, Col, Container} from "react-bootstrap";


const Author:React.FC = () =>{
    return(
        <li className='py-2'>
            <Row>
                <Col xs={9}>
                    <label>1. Author</label>
                </Col>
                <Col xs={3}>
                    <i className='feather-edit text-warning pr-2'/>
                    <i className='feather-trash-2 text-danger'/>
                </Col>
            </Row>
        </li>
    )
}


export default Author;