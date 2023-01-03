import React, { useState } from 'react';
import { Modal } from '@mantine/core';
import { Form } from 'react-bootstrap';
import ModalCss from './Modal.module.css'
import { createOrder } from '../../sanityClient/OrderHandler';
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from '../../Store/Store';
import { useRouter } from 'next/router';


export default function PayModal(props) {
    const router = useRouter()
    const [formData, setFromData] = useState({})
    const restProduct = useStore((state) => state.restProduct)

    // input handler 
    const inputHandler = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
    }

    // localStorage totalprice
    const total = typeof window !== 'undefined' && localStorage.getItem('FoodTotalPrice')

    // modal submit handler 
    const submitHandler = async (e) => {
        e.preventDefault()
        const id = await createOrder({ ...formData, total })
        toast.success('Your order has been registered!', {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            theme: "light",
        });
        restProduct()
        localStorage.setItem('orderId', id)
        router.push(`OrderReceipt/${id}`)
    }

    return (
        <>
            <Modal
                opened={props.open}
                onClose={props.close}
                title="Pay on Delivery!"
            >
                <Form className={ModalCss.PayForm}>
                    <input name='FullName' type="text" placeholder='Your FullName' className={ModalCss.payinput} onChange={inputHandler} required />
                    <input name='PhoneNumber' type="number" placeholder='Your PhoneNumber' className={ModalCss.payinput} onChange={inputHandler} required />
                    <textarea name='Address' placeholder='Your Address' className={ModalCss.payinput} onChange={inputHandler} required></textarea>
                    <h6 className='text-center'>You will pay <span className='text-orange'>{total} $</span>on delivery</h6>
                    <button type='submit' className={`_btn ${ModalCss.PayBtn}`} onClick={submitHandler}>Place Pay</button>
                </Form>

            </Modal>
            <ToastContainer />
        </>
    );
}