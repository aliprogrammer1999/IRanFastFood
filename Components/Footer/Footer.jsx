import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import FooterCss from './Footer.module.css'
import logo_footer from '../../public/Image/Logo/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    const FooterContent = [
        { title: 'Home', link: '/' },
        { title: 'Shop', link: '/shop' },
        { title: 'Contact', link: '/contact' },
        { title: 'Blog', link: '/blog' },
    ]
    return (
        <footer>
            <Container>
                <Row className='d-flex justify-content-between border-bottom align-items-center pb-3'>
                    <Col sm='3'>
                        <Image src={logo_footer} alt='footerLogo' width={200} height={100} />
                    </Col>
                    <Col sm='3' className={FooterCss.social_media}>
                        <span><i className="ri-instagram-line text-danger"></i></span>
                        <span><i className="ri-telegram-fill text-info"></i></span>
                        <span><i className="ri-whatsapp-line text-success"></i></span>
                    </Col>
                </Row>
                <Row className='my-5 d-flex justify-content-between'>
                    <Col sm='3' className='d-flex flex-column gap-3'>
                        <h4 className='fw-bold'>Sing up for Update</h4>
                        <p>Fast Food Sites provides online food ordering and delivery solutions to Takeaway, Fast Food and restaurants. Fast Food Sites is owned and operated by Informsit Ltd.</p>
                        <Form>
                            <input type="text" className={FooterCss.inputMassage} placeholder='Enter your email' />
                        </Form>
                    </Col>
                    <Col sm='3' className='d-flex flex-column align-items-center'>
                        <h3 className='fw-bold'>Site Map</h3>
                        <ul className={FooterCss.footerList_link}>
                            {FooterContent.map((item, index) =>
                                <li key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            )}
                        </ul>
                    </Col>
                    <Col sm='3'>
                        <h3 className='fw-bold'>Best Seller</h3>

                    </Col>
                </Row>
                <Row><Col className='text-center bg-orange pt-2 rounded-2 text-light'><h6>2022 FastFood template - Alirg1999</h6></Col></Row>
            </Container>
        </footer>
    )
}

export default Footer