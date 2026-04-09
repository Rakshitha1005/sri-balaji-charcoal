import ContactLib "../lib/contact";
import Types "../types/contact";
import List "mo:core/List";

mixin (
  inquiryStore : List.List<Types.Inquiry>,
  nextInquiryId : List.List<Nat>,
) {
  public shared func submitInquiry(
    name : Text,
    phone : Text,
    product : Text,
    quantity : Text,
    message : Text,
  ) : async Types.InquiryId {
    let currentId = switch (nextInquiryId.first()) {
      case (?id) id;
      case null 1;
    };
    let (inquiryId, _inquiry) = ContactLib.submitInquiry(
      inquiryStore,
      currentId,
      name,
      phone,
      product,
      quantity,
      message,
    );
    nextInquiryId.put(0, currentId + 1);
    inquiryId;
  };
};
