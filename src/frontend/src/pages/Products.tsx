import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { createActor } from "../backend";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

const orderSteps = [
  "Choose product",
  "Add to cart",
  "Fill delivery address",
  "Make online payment",
  "Order confirmation",
];

function ProductDetailCard({ product }: { product: Product }) {
  const { addItem, isLoading } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-sm shadow-card overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative bg-muted/30 min-h-64">
          <img
            src={
              product.weightKg === BigInt(5)
                ? "/assets/generated/product-5kg.dim_400x400.jpg"
                : "/assets/generated/product-10kg.dim_400x400.jpg"
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="font-display font-bold text-xl text-foreground">
                {product.name}
              </h2>
              <Badge className="bg-primary text-primary-foreground border-0 font-display font-bold text-base px-3 py-1 shrink-0">
                ₹{product.priceRupees.toString()}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed">
              {product.description}
            </p>
            <div className="space-y-1.5 mb-6">
              {product.specs.map((spec) => (
                <div
                  key={spec.specLabel}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-muted-foreground font-body">
                    <span className="text-foreground font-medium">
                      {spec.specLabel}:
                    </span>{" "}
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={() => addItem(product.id, 1)}
            disabled={isLoading}
            className="button-primary rounded-sm w-full sm:w-auto"
            data-ocid={`add-to-cart-${product.id}`}
          >
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  const { actor, isFetching } = useActor(createActor);
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts();
    },
    enabled: !!actor && !isFetching,
  });

  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Our Products
          </motion.h1>
          <p className="text-muted-foreground mt-2 font-body">
            Premium charcoal for every need
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {isLoading
            ? [1, 2].map((n) => <Skeleton key={n} className="h-64" />)
            : (products ?? []).map((p) => (
                <ProductDetailCard key={p.id.toString()} product={p} />
              ))}
        </div>
      </section>

      <section className="bg-muted/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl text-foreground mb-6"
          >
            Order Process
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-0">
            {orderSteps.map((step, i) => (
              <div
                key={step}
                className="flex-1 flex items-start gap-3 p-4 border border-border bg-card rounded-sm mb-2 sm:mb-0 sm:mr-2 last:mr-0"
              >
                <span className="size-6 rounded-full bg-primary text-primary-foreground font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground font-body">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
