import Types "../types/products";

module {
  public type Product = Types.Product;
  public type ProductId = Types.ProductId;

  let catalog : [Product] = [
    {
      id = 1;
      name = "5kg Charcoal Pack";
      priceRupees = 100;
      weightKg = 5;
      description = "Our 5kg charcoal pack is suitable for home cooking, small restaurants, and tandoor use. It provides strong heat and burns longer with minimal smoke.";
      specs = [
        { specLabel = "Weight"; value = "5kg" },
        { specLabel = "Burning"; value = "Long Burning" },
        { specLabel = "Smoke"; value = "Low Smoke" },
        { specLabel = "Heat"; value = "High Heat" },
      ];
    },
    {
      id = 2;
      name = "10kg Charcoal Pack";
      priceRupees = 200;
      weightKg = 10;
      description = "Our 10kg pack is perfect for bulk users such as restaurants and catering businesses. It ensures consistent heat and better value.";
      specs = [
        { specLabel = "Weight"; value = "10kg" },
        { specLabel = "Burning"; value = "Clean Burning" },
        { specLabel = "Efficiency"; value = "High Efficiency" },
        { specLabel = "Value"; value = "Cost Effective" },
      ];
    },
  ];

  public func listProducts() : [Product] {
    catalog;
  };

  public func getProduct(id : ProductId) : ?Product {
    var result : ?Product = null;
    for (p in catalog.values()) {
      if (p.id == id) { result := ?p };
    };
    result;
  };
};
