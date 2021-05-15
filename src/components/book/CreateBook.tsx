import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {MDBBtn} from "mdb-react-ui-kit";


type  Props = {
    addBook : Boolean;
    onClick : () => void;
}

const CreateBook: React.FC<Props> = ({addBook,onClick}) =>{

    const addBookForm = (
        <Container fluid={true}>
            <Row className='create-form-penal py-4'>
                <Col xs={12} md={9}>
                    <Row>
                        <Col xs={10}>
                            <h3>Create Book</h3>
                        </Col>
                        <Col xs={2}>
                            <i className='feather-x-circle' onClick={onClick}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{span: 11, offset: 1}} className='py-2'>
                            <Form>
                                <Form.Group controlId="formBookName">
                                    <Form.Label>Name of Book</Form.Label>
                                    <Form.Control type="name" placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="formBookName">
                                    <Form.Label>Name of Book</Form.Label>
                                    <Form.Control type="name" placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="formBookName">
                                    <Form.Label>Name of Author</Form.Label>
                                    <Form.Control type="name" placeholder=""/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='float-right'>
                        <MDBBtn rounded>Create</MDBBtn>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
    return(
        <Container fluid={true}>
            {addBook ? addBookForm : null}
        </Container>
    );
}
export default CreateBook;