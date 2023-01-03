export const createOrder = async ({ FullName, PhoneNumber, Address, total }) => {
    const res = await fetch('/api/Order_api', {
        method: "POST",
        body: JSON.stringify({
            name: FullName,
            phonenumber: PhoneNumber,
            address: Address,
            total: parseFloat(total),
            status: 1
        }),
    });
    const id = await res.json()
    return id
}