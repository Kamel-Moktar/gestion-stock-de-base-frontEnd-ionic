import {Product} from "./product";

export interface ProductToProvide{
  product:Product;
  requestedQuantity :number,
  isSelected : boolean;
}
