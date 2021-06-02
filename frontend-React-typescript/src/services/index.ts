import { CartItemType } from '../interfaces/product';

export const getProducts = async (): Promise<CartItemType[]> =>
{
return await (await fetch('http://localhost:5000/api/product/all')).json();
}