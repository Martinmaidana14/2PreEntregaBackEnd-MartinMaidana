
import { Schema, model } from 'mongoose'
import paginate from 'mongoose-paginate-v2';

const productSchema = new Schema({ //es solo una configuración para una ruta en un esquema
    title: { // Algunos SchemaTypes válidos en Mongoose. Plugins de mongoose
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        default: []
    }
})

productSchema.plugin(paginate)

const productModel = model("products", productSchema)

export default productModel