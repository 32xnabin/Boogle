import { mongoose } from "../db";
import { IProductProps } from "../../interface/IProductProps";

interface productModelInterface extends mongoose.Model<ProductDoc> {
  build(attr: IProductProps): ProductDoc;
}

interface ProductDoc extends mongoose.Document {
  title: string;
  price: number;
  description: string;
  image: string;
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  
});

productSchema.statics.build = (attr: IProductProps) => {
  return new Product(attr);
};

const Product = mongoose.model<ProductDoc, productModelInterface>(
  "Product",
  productSchema
);

Product.build({
  title: "",
  price: 0,
  description: "",
  image: "",
});

export { Product };
