import React from 'react'
import { Col } from 'react-bootstrap'
import Image from 'next/image'
import ShopCss from './Shop.module.css'
import Link from 'next/link'
import { urlFor } from '../../../sanityClient/SanityClient'
import { motion } from 'framer-motion'
function Shop({ productData }) {
    return (
        <>
            {
                productData.map(item =>
                    <Col sm='4' key={item._id}>
                        <div className={`${ShopCss.shopContent} border m-1 my-2`}>
                            <span className={ShopCss.productRate}>{item.rate}<i className="ri-star-fill fs-5"></i></span>
                            <Link href="./ProductDetile/[slug]" as={`./ProductDetile/${item.slug.current}`}>
                                <Image loader={() => urlFor(item.img).url()} src={urlFor(item.img).url()} width={500} height={500} alt='food image' />
                            </Link>
                            <div className='w-100 px-4'>
                                <h3 className='fw-bold text-center'>{item.product_name}</h3>
                                <span className='d-flex justify-content-between w-100 align-items-center'>
                                    <span className='fw-bold fs-4'>{item.price} <span className='text-orange fs-3'>$</span></span>
                                    <Link href="./ProductDetile/[slug]" as={`./ProductDetile/${item.slug.current}`}>
                                        <motion.button whileTap={{ scale: .8 }} className='_btn'><i className="ri-edit-box-fill fs-3 text-orange"></i></motion.button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                )
            }

        </>
    )
}

export default Shop