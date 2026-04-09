import ProductTypes "products";

module {
  public type ProductId = ProductTypes.ProductId;

  public type CartItem = {
    productId : ProductId;
    quantity : Nat;
  };

  public type Cart = {
    items : [CartItem];
    totalRupees : Nat;
  };
};
