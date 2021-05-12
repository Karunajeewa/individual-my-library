import React from "react";
import {Col, Row} from "react-bootstrap";
import CreateAuthor from "./CreateAuthor";

const AddAuthor: React.FC = () =>{
    return(
        <Row>
            <Col className='add-label p-lg-0'>
                <i className='feather-plus mr-2'/>
                <label>Add Author</label>
                <CreateAuthor/>
            </Col>
        </Row>
    )
}
export default AddAuthor;