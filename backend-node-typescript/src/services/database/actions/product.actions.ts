import { IProductProps } from "../../interface/IProductProps";
import { Product } from "../model/product";
export class ProductActions {
  public async all(msg: any, done: any): Promise<any> {
    const products = await Product.find({});
    done(null, products);
  }

  public async add(args: IProductProps, done: any): Promise<any> {
    let product = new Product({
      title: args.title,
      price: args.price,
      description: args.description,
      image: args.image,
    });
    await product.save();
    done(null, { product: product });
  }
}
