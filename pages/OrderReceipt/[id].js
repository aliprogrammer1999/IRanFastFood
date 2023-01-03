import { client } from '../../Components/sanityClient/SanityClient'
import Layout from '../../Components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import ReceiptCss from '../../styles/Receipt.module.css'
import Link from 'next/link'

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`
    const queryOrder = await client.fetch(query)
    return {
        props: {
            queryOrder: queryOrder[0]
        }
    }
}


export default function OrderReceipt({ queryOrder }) {
    console.log(queryOrder)
    return (
        <Layout>
            <Container>
                <Row>
                    <Col sm="12" className={ReceiptCss.receipt}>
                        <h1>Your Order Receipt</h1>
                        <div>
                            <h4>Product ID : <span className='text-orange'>{queryOrder._id}</span></h4>
                            <h4>Your Name : <span className='text-orange'>{queryOrder.name}</span></h4>
                            <h4>Your PhoneNumber : <span className='text-orange'>{queryOrder.phonenumber}</span></h4>
                            <h4>Your Address : <span className='text-orange'>{queryOrder.address}</span></h4>
                            <h4>Order Time : <span className='text-orange'>{queryOrder._createdAt}</span></h4>
                            <h4>Totla Price : <span className='text-orange'>{queryOrder.total} $</span></h4>
                        </div>
                        <h5 className='my-5'>* Your order information will be sent via SMS *</h5>
                        <Link href='/#shop' className='_btn'>Back To Shop</Link>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}