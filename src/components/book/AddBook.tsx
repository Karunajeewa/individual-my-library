import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CreateBook from "./CreateBook";

type Props = {
    addBook : Boolean;
    onClick : () => void;
}

const AddBook: React.FC = () =>{

    const [addBook, formState] = useState(false);
    const handleShow = () => formState(true);
    const handleHide = () => formState(false);

    return(
        <Container fluid={true}>
            <Row>
                <Col className='add-label p-lg-0' onClick = {handleShow}>
                    <i className='feather-plus mr-2'/>
                    <label>Add Book</label>
                    <CreateBook addBook={addBook} onClick={handleHide}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AddBook;