import { useState } from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout/Layout'
import Shop from '../Components/Ui/Shop/Shop'
import { Container, Row, Col } from 'react-bootstrap'
import section_1 from '../public/Image/home/PizzaHome.png'
import HomeCss from '../styles/Home.module.css'
import Image from 'next/image'
import { SeviceData, CateFood, herosection } from '../Components/Ui/Service/FrontData'
import Link from 'next/link'
import { client } from '../Components/sanityClient/SanityClient'


export default function Home({ product_query }) {
  const [product, setProduct] = useState(product_query)
  const [selectedIndex, setSelectedIndex] = useState()

  //category product candition
  const categoryHandler = (index) => {
    setSelectedIndex(index)
    if (index == 0) {
      setProduct(product_query.filter(item => item.type === 'pizza'))
    }
    if (index == 1) {
      setProduct(product_query.filter(item => item.type === 'drink'))
    }
    if (index == 2) {
      setProduct(product_query.filter(item => item.type === 'fried'))
    }
    if (index == 3) {
      setProduct(product_query.filter(item => item.type === 'pasta'))
    }
    if (index == 4) {
      setProduct(product_query.filter(item => item.type === 'salad'))
    }
    if (index == 5) {
      setProduct(product_query.filter(item => item.type === 'burger'))
    }
  }

  return (
    <Layout >
      <Head>
        <title>Home</title>
      </Head>
      <main>

        {/* Home  */}
        <section className={HomeCss.Home_section}>
          <Container>
            <Row>
              <Col sm='4' className={HomeCss.homeSection_text}>
                <h4 className='fw-bold text-orange'>Different Ordering Types</h4>
                <h1 className='fw-bolder text-capitalize'>
                  Offer all types of online ordering to customers
                </h1>
                <p className='w-75 text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus
                </p>
                <Link href='#shop' className={`_btn ${HomeCss.home_btn}`}>Shop new</Link>
              </Col>

              <Col sm='8' className={HomeCss.back_ground}>
                <h1>IRAN FOOD</h1>
                <Image src={section_1} width={550} className={HomeCss.pizzaImg} alt='foodpizza' />
                <div className={HomeCss.foodsmallImg}>
                  {herosection.map((item, index) =>
                    <Image key={index} src={item.img} width={50} alt='foodsmallImg' />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
          {/* service  */}
        </section>

        {/* service  */}
        <section className={HomeCss.service_delivery}>
          <h1 className={HomeCss.title_style}>
            how it work
          </h1>
          <Container>
            <Row>
              {SeviceData.map((item, index) =>
                <Col sm='4' key={index} className={HomeCss.service_box}>
                  <Image src={item.serviceImg} alt="service_delivery" width={170} height={170} />
                  <h3>{item.title}</h3>
                  <span className='fs-7 text-center px-4 fw-bold'>
                    {item.text}
                  </span>
                </Col>
              )}

            </Row>
          </Container>
        </section>

        {/* shop  */}
        <h1 className={HomeCss.title_style} id="shop">SHOP</h1>
        <section className={HomeCss.shop_section}>
          <Container>
            <Row className={HomeCss.shop_cat}>
              {
                CateFood.map((item, index) =>
                  <Col key={index} className='d-flex justify-content-center'>
                    <button className={`_btn ${index === selectedIndex ? HomeCss.isActive : HomeCss.btn_cat} `}
                      onClick={() => categoryHandler(index, item.title)} >
                      <Image src={item.img} alt='catFood' width={80} height={50} />
                      <span>{item.title}</span>
                    </button>
                  </Col>
                )
              }
            </Row>
          </Container>
          <Container>
            <Row className={HomeCss.shopBox}>
              <Shop productData={product} />
            </Row>
          </Container>
        </section>

      </main>
    </Layout >
  )
}


export async function getServerSideProps() {
  const product_query = await client.fetch('*[_type=="product"]')
  return { props: { product_query } }
}
