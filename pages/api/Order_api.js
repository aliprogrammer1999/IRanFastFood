import { client } from '../../Components/sanityClient/SanityClient'

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const newOrder = await JSON.parse(req.body)
            try {
                await client.create({
                    _type: 'order',
                    name: newOrder.name,
                    address: newOrder.address,
                    phonenumber: newOrder.phonenumber,
                    total: newOrder.total,
                    status: 1
                }).then((data) =>
                    res.status(200).json(data._id)
                );
            } catch (error) {
                console.log(error);
                res.status(500).json({ mag: "Error , check Console" });
            }
            break;
    }
}