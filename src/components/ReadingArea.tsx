import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthorTitle from "./author/AuthorTitle";
import AuthorList from "./author/AuthorList";
import AddAuthor from "./author/AddAuthor";
import BookTitle from "./book/BookTitle";
import BookList from "./book/BookList";
import AddBook from "./book/AddBook";


const ReadingArea: React.FC= () =>{
    return(
        <Container fluid={true} >
            <Row className='reading-area'>
                <Col xs={12} md={6} className='authors p-lg-0'>
                    <BookTitle/>
                    <BookList/>
                    <AddBook/>
                </Col>
                <Col xs={12} md={6} className='authors p-lg-0 '>
                    <AuthorTitle/>
                    <AuthorList/>
                    <AddAuthor/>
                </Col>
            </Row>
        </Container>
    )
};

export default ReadingArea;