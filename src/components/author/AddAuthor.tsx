import React, {useState} from "react";
import {Col, Row,Container} from "react-bootstrap";
import CreateAuthor from "./CreateAuthor";

type Props = {
    addAuthor : Boolean;
    onClick : () => void;
}

const AddAuthor: React.FC = () =>{

    const [addAuthor, formState] = useState(false);
    const handleShow = () => formState(true);
    const handleHide = () => formState(false);

    return(
        <Container fluid={true}>
            <Row>
                <Col className='add-label p-lg-0' onClick = {handleShow}>
                    <i className='feather-plus mr-2'/>
                    <label>Add Author</label>
                    <CreateAuthor addAuthor={addAuthor} onClick={handleHide}/>
                </Col>
            </Row>
        </Container>
    )
}
export default AddAuthor;