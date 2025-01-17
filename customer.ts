export default {
    name: "Customer",
    type: "string",
    title: "Customer",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "email",
            type: "string",
            title: "Email"
        },
        {
            name: "address",
            type: "string",
            title: "Address"
        },
        {
            name: "phone",
            type: "string",
            title: "Phone"
        },
        {
            name: "orders",
            type: "array",
            title: "Orders",
            of: [{ type: "reference", to: [{ type: "order" }] }]

        }


    ]
}