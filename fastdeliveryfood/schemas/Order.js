export default {
    name: "order",
    title: "Order",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            options: {
                MaxLength: 40
            }
        },

        {
            name: 'phonenumber',
            title: 'PhoneNumber',
            type: 'string',
            options: {
                MaxLength: 15
            }
        },

        {
            name: 'address',
            title: 'Address',
            type: 'string',
            options: {
                MaxLength: 120
            }
        },

        {
            name: 'total',
            title: 'Total',
            type: "number"
        },

        {
            name: 'status',
            title: 'Status',
            type: "number"
        },

    ]
}