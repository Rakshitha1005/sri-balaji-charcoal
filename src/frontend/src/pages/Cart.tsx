import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { createActor } from "../backend";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

export function Cart() {
  const { cart, isLoading, removeItem, updateQuantity } = useCart();
  const { actor, isFetching } = useActor(createActor);

  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts();
    },
    enabled: !!actor && !isFetching,
  });

  const getProduct = (id: bigint) => products?.find((p) => p.id === id);
  const items = cart?.items ?? [];

  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Your Cart
          </motion.h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
          ) : items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
              data-ocid="cart-empty-state"
            >
              <ShoppingCart className="size-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Add some products to get started.
              </p>
              <Button
                asChild
                className="button-primary rounded-sm"
                data-ocid="cart-shop-btn"
              >
                <Link to="/products">Shop Products</Link>
              </Button>
            </motion.div>
          ) : (
            <div>
              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const product = getProduct(item.productId);
                  return (
                    <motion.div
                      key={item.productId.toString()}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-card border border-border rounded-sm p-4 flex items-center gap-4"
                      data-ocid={`cart-item-${item.productId}`}
                    >
                      <img
                        src={
                          product?.weightKg === BigInt(5)
                            ? "/assets/generated/product-5kg.dim_400x400.jpg"
                            : "/assets/generated/product-10kg.dim_400x400.jpg"
                        }
                        alt={product?.name ?? "Product"}
                        className="size-16 object-cover rounded-sm shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-foreground text-sm truncate">
                          {product?.name ?? "Loading..."}
                        </p>
                        <p className="text-primary font-display font-bold text-base">
                          ₹{product?.priceRupees.toString() ?? "—"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              Math.max(1, Number(item.quantity) - 1),
                            )
                          }
                          className="size-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-smooth"
                          data-ocid={`qty-dec-${item.productId}`}
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-8 text-center font-display font-bold text-sm text-foreground">
                          {Number(item.quantity)}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              Number(item.quantity) + 1,
                            )
                          }
                          className="size-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-smooth"
                          data-ocid={`qty-inc-${item.productId}`}
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.productId)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-smooth"
                        data-ocid={`cart-remove-${item.productId}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              <Separator className="my-6" />

              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-foreground text-lg">
                  Total Amount
                </span>
                <span className="font-display font-bold text-primary text-2xl">
                  ₹{cart?.totalRupees.toString() ?? "0"}
                </span>
              </div>

              <Button
                asChild
                className="button-primary w-full rounded-sm"
                size="lg"
                data-ocid="proceed-checkout-btn"
              >
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
