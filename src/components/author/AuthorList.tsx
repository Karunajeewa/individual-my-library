import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Author from "./Author";

const AuthorList:React.FC = () => {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs={12} className='p-lg-0'>
                    {/*<label className='empty-label font-italic'>No author listed here</label>*/}
                    <ul className='m-lg-0 p-lg-0 list-unstyled'>
                        <Author/>
                        <Author/>
                        <Author/>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}


export default AuthorList;