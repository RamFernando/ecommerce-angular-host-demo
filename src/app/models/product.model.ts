export interface ProductModelServer {
  id: Number;
  title: String;
  category: String;
  description: String;
  image: String;
  price: Number;
  qty: Number;
  images: String;
}


export interface serverResponse  {
  // count: number;
  products: ProductModelServer[]
};
