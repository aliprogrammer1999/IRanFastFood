import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: '9464mrtj',
    dataset: 'production',
    apiVersion: '2022-12-25',
    useCdn: true,
    token: "sksGo5g24DQVk7FdBE8KgytoB4I8PmwhMdJ1WtU08D1YUqiSyBkFfz5iPISs8rFWLNwn4skpDtfQ4xh1Ab9tbVcYthtnwqMCozBEmr0F2yAm0i9TKAdpkWtRRXzFDYTUSUmCurF7qLWC65SzVJP05P8YmdXZXIcee50oWIsANNvbv6NtT2ti"
})


const builder = ImageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}