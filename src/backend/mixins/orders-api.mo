import OrderLib "../lib/orders";
import CartLib "../lib/cart";
import Types "../types/orders";
import CartTypes "../types/cart";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

mixin (
  orderStore : List.List<Types.Order>,
  cartStore : Map.Map<Principal, [CartTypes.CartItem]>,
  nextOrderId : List.List<Nat>,
) {
  public shared ({ caller }) func placeOrder(
    deliveryDetails : Types.DeliveryDetails,
    paymentMethod : Types.PaymentMethod,
  ) : async Types.OrderId {
    let cart = CartLib.getCart(cartStore, caller);
    if (cart.items.size() == 0) {
      return 0; // empty cart — no order placed
    };
    let currentId = switch (nextOrderId.first()) {
      case (?id) id;
      case null 1;
    };
    let (orderId, _order) = OrderLib.placeOrder(
      orderStore,
      currentId,
      cart.items,
      deliveryDetails,
      paymentMethod,
    );
    // Increment counter
    nextOrderId.put(0, currentId + 1);
    // Clear cart after order
    CartLib.clearCart(cartStore, caller);
    orderId;
  };

  public query func getOrder(id : Types.OrderId) : async ?Types.Order {
    OrderLib.getOrder(orderStore, id);
  };
};
