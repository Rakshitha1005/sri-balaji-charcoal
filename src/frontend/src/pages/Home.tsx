import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Package,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { createActor } from "../backend";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

const features = [
  {
    icon: Star,
    title: "20+ Years of Experience",
    desc: "Trusted supplier since 2005",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Consistent high-heat, low-smoke charcoal",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Doorstep delivery across nearby areas",
  },
  {
    icon: Users,
    title: "1000+ Customers",
    desc: "Satisfied households and restaurants",
  },
];

const stats = [
  { value: "20+", label: "Years in Market" },
  { value: "1000+", label: "Satisfied Customers" },
  { value: "100%", label: "Quality Assured" },
  { value: "2", label: "Premium Products" },
];

function ProductCard({ product }: { product: Product }) {
  const { addItem, isLoading } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-sm shadow-card overflow-hidden group"
    >
      <div className="relative overflow-hidden bg-muted/30 aspect-square max-h-52">
        <img
          src={
            product.weightKg === BigInt(5)
              ? "/assets/generated/product-5kg.dim_400x400.jpg"
              : "/assets/generated/product-10kg.dim_400x400.jpg"
          }
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-3 font-display font-bold text-xl text-primary">
          ₹{product.priceRupees.toString()}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <Button
          onClick={() => addItem(product.id, 1)}
          disabled={isLoading}
          className="w-full button-primary rounded-sm"
          data-ocid={`buy-now-${product.id}`}
        >
          Buy Now
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export function Home() {
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
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-charcoal.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-display font-bold tracking-[0.3em] uppercase text-primary border border-primary/40 px-4 py-1.5 mb-6"
          >
            Est. 2005 · Karnataka
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-none tracking-tight mb-4"
          >
            PREMIUM QUALITY
            <br />
            <span className="text-primary">CHARCOAL</span> SINCE 2005
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-body"
          >
            Trusted charcoal supplier with 20+ years of experience delivering
            high-heat, low-smoke charcoal at affordable prices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="button-primary text-sm tracking-widest uppercase rounded-sm px-8"
              data-ocid="hero-order-btn"
            >
              <Link to="/products">Order Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="button-outline text-sm tracking-widest uppercase rounded-sm px-8"
              data-ocid="hero-contact-btn"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display font-bold text-2xl text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-xs font-body text-primary-foreground/80 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-body leading-relaxed"
            >
              Sri Balaji Premium Charcoal has been serving customers for more
              than 20 years. We specialize in supplying high-quality charcoal
              suitable for household use, restaurants, and small businesses —
              known for strong heat output, longer burning time, low smoke, and
              affordable pricing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-10 text-center"
          >
            Our Products
          </motion.h2>
          {isLoading ? (
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Skeleton className="h-72" />
              <Skeleton className="h-72" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {(products ?? []).map((p) => (
                <ProductCard key={p.id.toString()} product={p} />
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Button
              asChild
              className="button-outline rounded-sm"
              data-ocid="view-all-products-btn"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-muted/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Online Delivery
            </motion.h2>
            <p className="text-muted-foreground mb-8 font-body">
              We provide doorstep delivery services. Select product, enter
              delivery details, make payment and receive confirmation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["UPI", "Debit Card", "Credit Card", "Net Banking"].map((m) => (
                <span
                  key={m}
                  className="border border-primary/40 text-primary text-sm font-display px-4 py-1.5 rounded-sm"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-10 text-center"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 rounded-sm shadow-card"
              >
                <f.icon className="size-8 text-primary mb-3" />
                <h3 className="font-display font-bold text-sm text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
