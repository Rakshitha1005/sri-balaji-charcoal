// Re-export all backend types for use across the app
import type { Product as BackendProduct } from "../backend";

export type {
  Product,
  ProductSpec,
  ProductId,
  CartItem,
  Cart,
  OrderItem,
  Order,
  OrderId,
  DeliveryDetails,
  Timestamp,
  InquiryId,
} from "../backend";

export { OrderStatus, PaymentMethod } from "../backend";

export interface CartItemWithProduct {
  productId: bigint;
  quantity: number;
  product?: BackendProduct;
}
