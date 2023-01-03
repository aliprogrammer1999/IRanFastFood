import { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Image from 'next/image'
import { Container, Row, Col, Form } from 'react-bootstrap'
import DetileCss from '../../styles/ProductDetile.module.css'
import { urlFor } from '../../Components/sanityClient/SanityClient'
import { motion } from 'framer-motion'
import { client } from '../../Components/sanityClient/SanityClient'
import { useStore } from '../../Components/Store/Store'
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetile({ foodDetile }) {
    const [productCount, setProudctCount] = useState(1)
    const [reviewCount, setReviewCount] = useState(0)

    // quantity product 
    const Increase = () => {
        setReviewCount(reviewCount + 1)
        if (reviewCount >= 5) {
            setReviewCount(5)
        }
    }
    const Decrement = () => {
        setReviewCount(reviewCount - 1)
        if (reviewCount <= 0) {
            setReviewCount(0)
        }
    }

    // add Product 
    const addProduct = useStore((state) => state.addProduct)

    const addToCart = () => {
        addProduct({ ...foodDetile, price: foodDetile.price, quantity: productCount })
        toast.success('Add food success!', {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "light",
        });
    }

    return (
        < Layout >
            <Container className={DetileCss.DetileBox}>
                <Row className='py-5 d-flex mb-5'>
                    <Col sm='6'>
                        <div className={DetileCss.DetileBoxImg}>
                            <Image loader={() => urlFor(foodDetile.img).url()} src={urlFor(foodDetile.img).url()} width={500} height={500} alt='foodimage' />
                        </div>
                    </Col>
                    <Col sm='6'>
                        <div className='d-flex flex-column gap-3 py-4'>
                            <h1 className=' fw-bolder display-4 d-flex justify-content-between w-100 pe-5 align-items-center'>
                                {foodDetile.product_name}
                                <div className='fs-3 text-orange d-flex align-items-center'>
                                    {foodDetile.rate} <i className="ri-star-fill fs-5"></i>
                                </div>
                            </h1>
                            <h5 className='text-muted'>{foodDetile.detile}</h5>
                            <h2 className='fw-bold d-flex gap-2'>
                                Price : <div className='text-orange'>$ </div>{foodDetile.price}
                            </h2>
                            <div className='d-flex align-items-center gap-5'>
                                <h2 className='fw-bold'>Quntity :</h2>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <motion.button whileTap={{ scale: 1.2 }} className="_btn" onClick={(e) => { setProudctCount(productCount - 1) }}><i className="ri-arrow-left-s-fill fs-1 text-orange"></i></motion.button>
                                    <div className='fs-3 fw-bold'>{productCount < 1 ? setProudctCount(1) : productCount}</div>
                                    <motion.button whileTap={{ scale: 1.2 }} className="_btn" onClick={(e) => { setProudctCount(productCount + 1) }}><i className="ri-arrow-right-s-fill fs-1 text-orange"></i></motion.button>
                                </div>
                            </div>
                            <button className={`_btn w-25 ${DetileCss.Addprodcut}`} onClick={addToCart}>
                                Add to Cart<i className="ri-check-line fs-4"></i>
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <h2 className='fw-bold text-orange'>Review this Food</h2>
                        <h5 className='text-muted'>Share your thoughts with other customers</h5>
                    </Col>
                    <Col sm='12' className={DetileCss.formBox}>
                        <Form className={DetileCss.reviewFrom}>
                            <input type='text' placeholder='Your Name' />
                            <input type='number' placeholder='Your PhoneNumber' />
                            <div className={DetileCss.reviewStar}>
                                <i className="ri-arrow-up-s-fill fs-1 text-orange" onClick={Increase}></i>
                                <h3 className='d-flex justify-content-center align-items-center fw-bold'>{reviewCount} <i className="ri-star-fill fs-4 text-orange"></i></h3>
                                <i className="ri-arrow-down-s-fill fs-1 text-orange" onClick={Decrement}></i>
                            </div>
                            <button className={`_btn ${DetileCss.btn_review}`} >
                                submit
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </ Layout>
    )
}


export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "product" && defined(slug)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const productslug = await client.fetch(`*[_type == "product"]`)
    const foodDetile = productslug.filter(item => item.slug.current == params.slug)
    return {
        props: { foodDetile: foodDetile[0] },
    }
}