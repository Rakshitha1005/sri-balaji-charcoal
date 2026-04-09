import CartTypes "types/cart";
import OrderTypes "types/orders";
import ContactTypes "types/contact";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

import ProductsApi "mixins/products-api";
import CartApi "mixins/cart-api";
import OrdersApi "mixins/orders-api";
import ContactApi "mixins/contact-api";

actor {
  let cartStore = Map.empty<Principal, [CartTypes.CartItem]>();
  let orderStore = List.empty<OrderTypes.Order>();
  let nextOrderId = List.singleton<Nat>(1);
  let inquiryStore = List.empty<ContactTypes.Inquiry>();
  let nextInquiryId = List.singleton<Nat>(1);

  include ProductsApi();
  include CartApi(cartStore);
  include OrdersApi(orderStore, cartStore, nextOrderId);
  include ContactApi(inquiryStore, nextInquiryId);
};
