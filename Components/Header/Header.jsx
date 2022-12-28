import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/Image/Logo/logo.png'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import HeaderCss from './Header.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Sidebar from '../Ui/SlideBar/Sidebar'

function Header() {
    const [sidebar, setSidebar] = useState(false)

    return (
        <header className='my-3'>
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>

                    {/* logo  */}
                    <Col sm='3'>
                        <Link href='/'>
                            <Image src={Logo} alt='siteLogo' width={130} height={70} />
                        </Link>
                    </Col>




                    {/* Navigation Bar */}
                    <Col sm='4' className='d-flex justify-content-center align-items-center'>
                        <div className={HeaderCss.menu}>
                            <Link href='/#shop' className={`_btn ${HeaderCss.shop_btn}`}>
                                <span>
                                    <i className="ri-arrow-down-line fs-5"></i>
                                </span>
                                <span className='fw-bold fs-5'>
                                    Store
                                </span>
                            </Link>
                        </div>


                        {/* SideBar product  */}

                        <div className={HeaderCss.menu}>
                            <motion.button onClick={() => setSidebar(true)} whileTap={{ scale: .8 }} className={HeaderCss.menu_btn}>
                                <i className="ri-shopping-bag-3-fill me-2"></i>
                            </motion.button>
                            <Sidebar openside={sidebar} closeside={() => setSidebar(false)} />
                        </div>



                        {/* Contact Box  */}
                        <div className={HeaderCss.contact_head}>
                            <motion.button whileTap={{ scale: .8 }} className={HeaderCss.contact_btn}>
                                <Link href='/contact' className='_btn text-dark'>
                                    <i className="ri-contacts-fill"></i>
                                </Link>
                            </motion.button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header >
    )
}

export default Header