export default {
   name: "Product",
   type: "document",
   title: "Product",
   fields: [
       {
           name: "name",
           type: "string",
           title: "Name"
       },
       {
           name: "price",
           type: "number",
           title: "Price"
       },
       {
           name: "stock",
           type: "number",
           title: "Stock"
       },
       {
           name: "image",   
           type: "image",
           title: "Image"
       }
   ]


}