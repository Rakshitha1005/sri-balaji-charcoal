import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  public type InquiryId = Nat;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    phone : Text;
    product : Text;
    quantity : Text;
    message : Text;
    createdAt : Timestamp;
  };
};
