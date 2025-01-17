export default {
    name: "Order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "customerId",
            type: "string",
            title: "Customer ID"
        },
        {
            name: "products",
            type: "array",
            title: "Products",
            of: [{ type: "reference", to: [{ type: "product" }] }]
        },
        {
            name: "total",
            type: "number",
            title: "Total"
        },
        {
            name: "status",
            type: "string",
            title: "Status"
        }
    ]
}

