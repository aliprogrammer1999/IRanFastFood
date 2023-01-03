import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Components/Layout/Layout'
import CartCss from '../styles/Cart.module.css'
import Image from 'next/image'
import { useStore } from '../Components/Store/Store'
import { urlFor } from '../Components/sanityClient/SanityClient'
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import PayModal from '../Components/Ui/Modal/Modal'


function cart() {
    const [opened, setOpened] = useState(false);
    const CartProduct = useStore((state) => state.cart.product)
    const removeProduct = useStore((state) => state.removeProduct)

    // total price 
    const totalPrice = CartProduct.reduce((a, b) => a + b.quantity * b.price, 0)

    // remove item to cart 
    const RemoveHanlder = (index) => {
        toast.error('Remove food success!', {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "light",
        });
        removeProduct(index)
    }

    // pay handler front Home
    const PayHandler = () => {
        setOpened(true)
        localStorage.setItem('FoodTotalPrice', JSON.stringify(totalPrice))
    }

    return (
        <Layout>
            {
                CartProduct.length === 0 ?
                    <div className='my-5 d-flex justify-content-center flex-column'>
                        <h1 className='fw-bold text-center my-5'>
                            Please Chooice Product
                        </h1>
                        <Link href='/#shop' className='fw-bold text-center w-100 text-orange'>Go to shop</Link>
                    </div>
                    :
                    <div className={CartCss.Cart}>
                        <Container>
                            <Row>
                                <Col sm='8'>
                                    <table className={CartCss.Table}>
                                        <thead>
                                            <tr className=' border-bottom'>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {CartProduct.map((item, index) =>
                                                <tr key={index} className='my-1'>
                                                    <td>
                                                        <Image loader={() => urlFor(item.img).url()} src={urlFor(item.img).url()} width={100} height={70} alt='foodimage' />
                                                    </td>
                                                    <td>
                                                        {item.product_name}
                                                    </td>
                                                    <td>
                                                        {item.price}$
                                                    </td>
                                                    <td>
                                                        {item.quantity}
                                                    </td>
                                                    <td>
                                                        {Number(item.price) * Number(item.quantity)}$
                                                    </td>
                                                    <td>
                                                        <button className='_btn' onClick={() => RemoveHanlder(index)}>
                                                            <i className="ri-delete-bin-line"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </Col>
                                <Col sm='4'>
                                    <div className={CartCss.PayCart}>
                                        <h1 className='text-center p-2 border-bottom'>Order Cart</h1>
                                        <div className='d-flex flex-column gap-3 px-4 py-3'>
                                            <h4 className='d-flex justify-content-between'>Item : <span>{CartProduct.length}</span></h4>
                                            <h4 className='d-flex justify-content-between'>Total Price : <span>{totalPrice} $</span></h4>
                                            <div className={`_btn ${CartCss.cartOrder_btn}`}>
                                                <Link className='_btn' onClick={PayHandler} href='#'>Pay on Delivery</Link>
                                                <Link className='_btn' href='#'>Pay</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            }
            <PayModal open={opened} close={() => setOpened(false)} />
            <ToastContainer />
        </Layout >
    )
}

export default cart