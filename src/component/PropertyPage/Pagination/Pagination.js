import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './Pagination.css';

export default function Pagination() {
    return (
        <div>
            <Container style={{ marginBottom: '20px' }}>
                <Row>

                    <Col>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    
                    <li className="page-item "><NavLink exact className="page-link" activeClassName="pageactive" to="/property">1</NavLink></li>
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to="/property1">2</NavLink></li>
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to="/property2">3</NavLink></li>
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to="/property3">4</NavLink></li>

                    {/* <li className="page-item"><a className="page-link" href="/property">4</a></li> */}
                   
                </ul>
                </nav>

                </Col>
                </Row>
                </Container>
        </div>
    )
}
