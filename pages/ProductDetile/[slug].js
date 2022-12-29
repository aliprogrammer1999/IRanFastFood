import Layout from '../../Components/Layout/Layout'
import { client } from '../../sanityClient/SanityClient'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import DetileCss from '../../styles/ProductDetile.module.css'
import { urlFor } from '../../sanityClient/SanityClient'
import { motion } from 'framer-motion'
import { useState } from 'react'


export default function ProductDetile({ foodDetile }) {
    const [productCount, setProudctCount] = useState(1)
    console.log(foodDetile)
    return (
        < Layout >
            <Container className={DetileCss.DetileBox}>
                <Row className='py-5 d-flex'>
                    <Col sm='6'>
                        <div className={DetileCss.DetileBoxImg}>
                            <Image loader={() => urlFor(foodDetile.img).url()} src={urlFor(foodDetile.img).url()} width={500} height={500} alt='foodimage' />
                        </div>
                    </Col>
                    <Col sm='6'>
                        <div className='d-flex flex-column gap-2 py-4'>
                            <h1 className=' fw-bolder display-4 d-flex justify-content-between w-100 pe-5 align-items-center'>
                                {foodDetile.product_name}
                                <spna className='fs-3 text-orange d-flex align-items-center'>
                                    {foodDetile.rate} <i className="ri-star-fill fs-5"></i>
                                </spna>
                            </h1>
                            <h5 className='text-muted'>{foodDetile.detile}</h5>
                            <h2 className='fw-bold'>
                                Price : <span className='text-orange'>$</span>{foodDetile.price}
                            </h2>
                            <div className='d-flex align-items-center gap-5'>
                                <h2 className='fw-bold'>Quntity :</h2>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <motion.button whileTap={{ scale: 1.2 }} className="_btn" onClick={(e) => { setProudctCount(productCount - 1) }}><i className="ri-arrow-left-s-fill fs-1 text-orange"></i></motion.button>
                                    <span className='fs-3 fw-bold'>{productCount < 1 ? setProudctCount(1) : productCount}</span>
                                    <motion.button whileTap={{ scale: 1.2 }} className="_btn" onClick={(e) => { setProudctCount(productCount + 1) }}><i className="ri-arrow-right-s-fill fs-1 text-orange"></i></motion.button>
                                </div>
                            </div>
                            <button className={`_btn w-25 ${DetileCss.Addprodcut}`}>
                                Add to Cart<i class="ri-check-line fs-4"></i>
                            </button>

                        </div>
                    </Col>
                </Row>
            </Container>
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