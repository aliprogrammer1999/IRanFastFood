import React from 'react'
import Layout from '../Components/Layout/Layout'
import Head from 'next/head'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import ContactCss from '../styles/Contact.module.css'

function Contact() {
    const branchContact = [
        { title: 'Branch Mazandran', address: 'Iran/Mazandran/babol', phone: '09370534460 / 0111XXXXXXXX', mail: 'footdeliver.mazandran@yahoo.com' },
        { title: 'Branch Mashhad', address: 'Iran/Mashhad/Mashhad', phone: '0937053XXXX / 0111XXXXXXXX', mail: 'footdeliver.mashhad@yahoo.com' },
        { title: 'Branch Tehran', address: 'Iran/Tehran/Tehran', phone: '0937XXXXXX / 0211XXXXXXXX', mail: 'footdeliver.Tehran@yahoo.com' },
    ]


    return (
        <Layout>
            <Head>
                <title>
                    Contact
                </title>
            </Head>
            <main className={ContactCss.contactCss}>
                <h1>CONTACT US</h1>
                <Container>
                    <Row>
                        {branchContact.map((item, index) =>
                            <Col sm='4' key={index}>
                                <div className={ContactCss.ContactBox}>
                                    <h2 className='fw-bold text-center border-bottom pb-2'>{item.title}</h2>
                                    <div className='d-flex flex-column gap-2'>
                                        <h5 className='text-center d-flex align-items-center justify-content-center gap-2'><i className="ri-map-pin-2-fill"></i><span>{item.address}</span></h5>
                                        <h5 className='text-center d-flex align-items-center justify-content-center gap-2'><i className="ri-phone-fill"></i><span>{item.phone}</span></h5>
                                        <h5 className='text-center d-flex align-items-center justify-content-center gap-2'><i className="ri-mail-send-fill"></i><span>{item.mail}</span></h5>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                    <Row className='mt-5 d-flex justify-content-center'>
                        <Form className={ContactCss.contactForm}>
                            <h2 className='fw-bold'>
                                Leave A Message
                            </h2>
                            <h5>
                                Your email address will not be published. Required fields are marked *
                            </h5>
                            <FormGroup className={ContactCss.formBox}>
                                <input type='text' placeholder='Your Name' />
                                <input type='email' placeholder='Your Email' />
                            </FormGroup>
                            <FormGroup className={ContactCss.formBox}>
                                <input type='number' placeholder='Your PhoneNumber' />
                                <input type='text' placeholder='Subject' />
                            </FormGroup>
                            <textarea className='w-100 form-control' placeholder='Massage'></textarea>
                            <button className={`_btn ${ContactCss.formBtn}`}>Send a Massage</button>
                        </Form>
                    </Row>
                </Container>
            </main>


        </Layout>
    )
}

export default Contact