import CartLib "../lib/cart";
import Types "../types/cart";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

mixin (cartStore : Map.Map<Principal, [Types.CartItem]>) {
  public shared ({ caller }) func addToCart(productId : Types.ProductId, quantity : Nat) : async Types.Cart {
    CartLib.addItem(cartStore, caller, productId, quantity);
  };

  public shared ({ caller }) func removeFromCart(productId : Types.ProductId) : async Types.Cart {
    CartLib.removeItem(cartStore, caller, productId);
  };

  public shared ({ caller }) func updateCartItem(productId : Types.ProductId, quantity : Nat) : async Types.Cart {
    CartLib.updateQuantity(cartStore, caller, productId, quantity);
  };

  public shared query ({ caller }) func getCart() : async Types.Cart {
    CartLib.getCart(cartStore, caller);
  };

  public shared ({ caller }) func clearCart() : async () {
    CartLib.clearCart(cartStore, caller);
  };
};
