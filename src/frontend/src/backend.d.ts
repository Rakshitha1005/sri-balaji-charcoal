import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type OrderId = bigint;
export interface DeliveryDetails {
    city: string;
    fullName: string;
    address: string;
    phone: string;
    pincode: string;
}
export type Timestamp = bigint;
export type InquiryId = bigint;
export interface OrderItem {
    productId: ProductId;
    priceRupees: bigint;
    quantity: bigint;
}
export interface Cart {
    totalRupees: bigint;
    items: Array<CartItem>;
}
export type ProductId = bigint;
export interface CartItem {
    productId: ProductId;
    quantity: bigint;
}
export interface Order {
    id: OrderId;
    totalRupees: bigint;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    deliveryDetails: DeliveryDetails;
    createdAt: Timestamp;
    items: Array<OrderItem>;
}
export interface ProductSpec {
    value: string;
    specLabel: string;
}
export interface Product {
    id: ProductId;
    name: string;
    description: string;
    priceRupees: bigint;
    specs: Array<ProductSpec>;
    weightKg: bigint;
}
export enum OrderStatus {
    pending = "pending",
    dispatched = "dispatched",
    delivered = "delivered",
    confirmed = "confirmed"
}
export enum PaymentMethod {
    upi = "upi",
    debitCreditCard = "debitCreditCard",
    netBanking = "netBanking"
}
export interface backendInterface {
    addToCart(productId: ProductId, quantity: bigint): Promise<Cart>;
    clearCart(): Promise<void>;
    getCart(): Promise<Cart>;
    getOrder(id: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<Product | null>;
    listProducts(): Promise<Array<Product>>;
    placeOrder(deliveryDetails: DeliveryDetails, paymentMethod: PaymentMethod): Promise<OrderId>;
    removeFromCart(productId: ProductId): Promise<Cart>;
    submitInquiry(name: string, phone: string, product: string, quantity: string, message: string): Promise<InquiryId>;
    updateCartItem(productId: ProductId, quantity: bigint): Promise<Cart>;
}
