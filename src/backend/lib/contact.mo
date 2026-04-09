import Types "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type Inquiry = Types.Inquiry;
  public type InquiryId = Types.InquiryId;
  public type InquiryStore = List.List<Inquiry>;

  public func submitInquiry(
    store : InquiryStore,
    nextId : Nat,
    name : Text,
    phone : Text,
    product : Text,
    quantity : Text,
    message : Text,
  ) : (InquiryId, Inquiry) {
    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      product;
      quantity;
      message;
      createdAt = Time.now();
    };
    store.add(inquiry);
    (nextId, inquiry);
  };

  public func listInquiries(store : InquiryStore) : [Inquiry] {
    store.toArray();
  };
};
