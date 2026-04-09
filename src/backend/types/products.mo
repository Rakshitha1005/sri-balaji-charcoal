module {
  public type ProductId = Nat;

  public type ProductSpec = {
    specLabel : Text;
    value : Text;
  };

  public type Product = {
    id : ProductId;
    name : Text;
    priceRupees : Nat;
    weightKg : Nat;
    description : Text;
    specs : [ProductSpec];
  };
};
