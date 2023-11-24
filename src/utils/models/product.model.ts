export interface DataProduct {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  qty: number;
}

export interface RequestDataProduct {
  code: string;
  name: string;
  category: string;
  description: string;
  price: number;
  discount: number;
  imageUrl: string;
  enableVarian: boolean;
}
