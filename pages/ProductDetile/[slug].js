import Layout from '../../Components/Layout/Layout'
import { client } from '../../sanityClient/SanityClient'


export default function ProductDetile({ productslug }) {

    console.log(productslug)
    return (

        <Layout>
            ali rg
        </Layout>

    )
}


export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="Pizza" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const { slug = '' } = context.params
    const productslug = await client.fetch(
        `*[ _type=="Pizza" && slug.current == ${slug} ][0]`
    )

    return {
        props: { productslug },
    }
}