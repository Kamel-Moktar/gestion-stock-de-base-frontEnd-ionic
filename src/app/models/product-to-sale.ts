import {Product} from "./product";

export interface ProductToSale{
  product:Product;
  requestedQuantity :number,
  isSelected : boolean;
}
