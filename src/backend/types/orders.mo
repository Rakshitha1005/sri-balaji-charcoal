import CommonTypes "common";
import CartTypes "cart";

module {
  public type OrderId = CommonTypes.OrderId;
  public type Timestamp = CommonTypes.Timestamp;

  public type PaymentMethod = {
    #upi;
    #debitCreditCard;
    #netBanking;
  };

  public type DeliveryDetails = {
    fullName : Text;
    phone : Text;
    address : Text;
    city : Text;
    pincode : Text;
  };

  public type OrderItem = {
    productId : CartTypes.ProductId;
    quantity : Nat;
    priceRupees : Nat;
  };

  public type OrderStatus = {
    #pending;
    #confirmed;
    #dispatched;
    #delivered;
  };

  public type Order = {
    id : OrderId;
    items : [OrderItem];
    deliveryDetails : DeliveryDetails;
    paymentMethod : PaymentMethod;
    totalRupees : Nat;
    status : OrderStatus;
    createdAt : Timestamp;
  };
};
