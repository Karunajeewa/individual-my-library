import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Book from "./Book";

const BookList:React.FC = () => {
    return(

            <Row>
                <Col xs={12} className='p-lg-0'>
                    {/*<label className='empty-label font-italic'>No author listed here</label>*/}
                    <ul className='pl-0 list-unstyled'>
                        <Book/>
                        <Book/>
                    </ul>
                </Col>
            </Row>

    )
}
export default BookList;