import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import sideberCss from './Sidebar.module.css'

function Sidebar(props) {
    return (
        <section className={sideberCss.sidebox} style={props.openside ? { width: '500px' } : { width: 0 }}>
            <Container>
                <Row><Col>
                    <button onClick={props.closeside} className='_btn p-2'>
                        <i className="ri-close-line text-light"></i>
                    </button>
                </Col></Row>
            </Container>
        </section>
    )
}

export default Sidebar