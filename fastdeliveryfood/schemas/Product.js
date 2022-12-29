export const Product = {
    name: 'product', title: 'product', type: 'document',
    fields: [
        {
            name: 'img', title: 'img', type: 'image', option: { hotspot: true }
        },
        {
            name: 'product_name', title: 'product_name', type: 'string'
        },
        {
            name: 'slug', title: 'slug', type: 'slug', option: { source: 'name', maxLength: 90 }
        },
        {
            name: 'price', title: 'price', type: 'array', of: [{ type: 'number' }]
        },
        {
            name: 'rate', title: 'rate', type: 'number'
        },
        {
            name: 'detile', title: 'detile', type: 'string'
        },
        {
            name: 'type', title: 'type', type: 'string'
        }
    ]
}
