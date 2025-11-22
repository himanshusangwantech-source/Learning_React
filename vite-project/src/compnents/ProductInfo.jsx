const product = {
  name: "laptop",
  price: 1200,
  available: "in stock"
};
const ProductInfo = () =>{
    return(
        <div>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <h1>{product.available}</h1>  
        </div>
    )
}

export default ProductInfo;