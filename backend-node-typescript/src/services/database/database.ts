import Seneca from "seneca";
import { ProductActions } from "./actions/product.actions";

const productActions = new ProductActions();
export class Database {
  public getAllProducts(this: Seneca.Instance, options: any): string {
    this.add("role:database,cmd:allproducts", productActions.all);
    return "getAllProducts";
  }

  public addProduct(this: Seneca.Instance, options: any): string {
    this.add("role:database,cmd:addproduct", productActions.add);
    return "addProduct";
  }
}
