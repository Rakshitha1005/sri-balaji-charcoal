import Types "../types/cart";
import ProductLib "products";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

module {
  public type Cart = Types.Cart;
  public type CartItem = Types.CartItem;
  public type ProductId = Types.ProductId;
  public type CartStore = Map.Map<Principal, [CartItem]>;

  func computeTotal(items : [CartItem]) : Nat {
    var total = 0;
    for (item in items.values()) {
      switch (ProductLib.getProduct(item.productId)) {
        case (?p) { total += p.priceRupees * item.quantity };
        case null {};
      };
    };
    total;
  };

  func toCart(items : [CartItem]) : Cart {
    { items; totalRupees = computeTotal(items) };
  };

  func getItems(store : CartStore, caller : Principal) : [CartItem] {
    switch (store.get(caller)) {
      case (?items) items;
      case null [];
    };
  };

  public func getCart(store : CartStore, caller : Principal) : Cart {
    toCart(getItems(store, caller));
  };

  public func addItem(store : CartStore, caller : Principal, productId : ProductId, quantity : Nat) : Cart {
    let existing = getItems(store, caller);
    // Check if product already in cart — update quantity if so
    var found = false;
    let updated = List.empty<CartItem>();
    for (item in existing.values()) {
      if (item.productId == productId) {
        updated.add({ item with quantity = item.quantity + quantity });
        found := true;
      } else {
        updated.add(item);
      };
    };
    if (not found) {
      updated.add({ productId; quantity });
    };
    let newItems = updated.toArray();
    store.add(caller, newItems);
    toCart(newItems);
  };

  public func removeItem(store : CartStore, caller : Principal, productId : ProductId) : Cart {
    let existing = getItems(store, caller);
    let newItems = existing.filter(func(item : CartItem) : Bool { item.productId != productId });
    store.add(caller, newItems);
    toCart(newItems);
  };

  public func updateQuantity(store : CartStore, caller : Principal, productId : ProductId, quantity : Nat) : Cart {
    let existing = getItems(store, caller);
    let updated = List.empty<CartItem>();
    for (item in existing.values()) {
      if (item.productId == productId) {
        if (quantity > 0) {
          updated.add({ item with quantity });
        };
        // quantity == 0 means remove
      } else {
        updated.add(item);
      };
    };
    let newItems = updated.toArray();
    store.add(caller, newItems);
    toCart(newItems);
  };

  public func clearCart(store : CartStore, caller : Principal) {
    store.add(caller, []);
  };
};
