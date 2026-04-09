import ProductLib "../lib/products";
import Types "../types/products";

mixin () {
  public query func listProducts() : async [Types.Product] {
    ProductLib.listProducts();
  };

  public query func getProduct(id : Types.ProductId) : async ?Types.Product {
    ProductLib.getProduct(id);
  };
};
