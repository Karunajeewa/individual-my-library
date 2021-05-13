import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import {Col, Form, Row} from "react-bootstrap";


const CreateAuthor: React.FC = () =>{
    return(
        <Row className='create-form-penal py-4'>
            <Col xs={12} md={9}>
                <Row>
                    <Col xs={10}>
                        <h3>Create Author</h3>
                    </Col>
                    <Col xs={2}>
                        <i className='feather-x-circle'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 11,offset: 1}} className='py-2'>
                        <Form>
                            <Form.Group controlId="formAuthorName">
                                <Form.Label>Name of Author</Form.Label>
                                <Form.Control type="name" placeholder="" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='float-right'>
                    <MDBBtn rounded >Create</MDBBtn>
                </Row>
            </Col>
        </Row>
    )
}
export default CreateAuthor;