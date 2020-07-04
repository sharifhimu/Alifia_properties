import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import './Pagination.css';

export default function Pagination() {
    return (
        <div>
            <Container style={{ marginBottom: '20px' }}>
                <Row>

                    <Col>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                   
                </ul>
                </nav>

                </Col>
                </Row>
                </Container>
        </div>
    )
}