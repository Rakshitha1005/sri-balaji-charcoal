import Types "../types/orders";
import CartTypes "../types/cart";
import ProductLib "products";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type Order = Types.Order;
  public type OrderId = Types.OrderId;
  public type DeliveryDetails = Types.DeliveryDetails;
  public type PaymentMethod = Types.PaymentMethod;
  public type OrderStore = List.List<Order>;

  func computeOrderTotal(items : [CartTypes.CartItem]) : Nat {
    var total = 0;
    for (item in items.values()) {
      switch (ProductLib.getProduct(item.productId)) {
        case (?p) { total += p.priceRupees * item.quantity };
        case null {};
      };
    };
    total;
  };

  func cartItemsToOrderItems(cartItems : [CartTypes.CartItem]) : [Types.OrderItem] {
    let result = List.empty<Types.OrderItem>();
    for (item in cartItems.values()) {
      switch (ProductLib.getProduct(item.productId)) {
        case (?p) {
          result.add({
            productId = item.productId;
            quantity = item.quantity;
            priceRupees = p.priceRupees;
          });
        };
        case null {};
      };
    };
    result.toArray();
  };

  public func placeOrder(
    store : OrderStore,
    nextId : Nat,
    items : [CartTypes.CartItem],
    deliveryDetails : DeliveryDetails,
    paymentMethod : PaymentMethod,
  ) : (OrderId, Order) {
    let orderItems = cartItemsToOrderItems(items);
    let total = computeOrderTotal(items);
    let order : Order = {
      id = nextId;
      items = orderItems;
      deliveryDetails;
      paymentMethod;
      totalRupees = total;
      status = #pending;
      createdAt = Time.now();
    };
    store.add(order);
    (nextId, order);
  };

  public func getOrder(store : OrderStore, id : OrderId) : ?Order {
    store.find(func(o : Order) : Bool { o.id == id });
  };

  public func listOrders(store : OrderStore) : [Order] {
    store.toArray();
  };
};
