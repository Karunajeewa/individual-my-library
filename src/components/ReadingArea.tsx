import React from "react";
import {Col,Row} from "react-bootstrap";
import AuthorTitle from "./author/AuthorTitle";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";

const ReadingArea: React.FC= () =>{
    return(
        <Row className='reading-area'>
            <Col xs={12} md={6}>Book</Col>
            <Col xs={12} md={6} className='authors p-lg-0'>
                <AuthorTitle/>
                <AuthorList/>
                <AddAuthor/>
            </Col>
        </Row>
    )
};

export default ReadingArea;