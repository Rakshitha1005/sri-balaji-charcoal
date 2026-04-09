import { c as createLucideIcon, u as useActor, a as useQuery, j as jsxRuntimeExports, L as Link, S as Skeleton, b as useCart, d as createActor } from "./index-CpuXL1W6.js";
import { B as Button } from "./button-23maWr3T.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import { C as CircleCheck } from "./circle-check-BgvxpP9f.js";
import { T as Truck } from "./truck-u24iPEha.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const features = [
  {
    icon: Star,
    title: "20+ Years of Experience",
    desc: "Trusted supplier since 2005"
  },
  {
    icon: CircleCheck,
    title: "Quality Assurance",
    desc: "Consistent high-heat, low-smoke charcoal"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Doorstep delivery across nearby areas"
  },
  {
    icon: Users,
    title: "1000+ Customers",
    desc: "Satisfied households and restaurants"
  }
];
const stats = [
  { value: "20+", label: "Years in Market" },
  { value: "1000+", label: "Satisfied Customers" },
  { value: "100%", label: "Quality Assured" },
  { value: "2", label: "Premium Products" }
];
function ProductCard({ product }) {
  const { addItem, isLoading } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "bg-card border border-border rounded-sm shadow-card overflow-hidden group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-muted/30 aspect-square max-h-52", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.weightKg === BigInt(5) ? "/assets/generated/product-5kg.dim_400x400.jpg" : "/assets/generated/product-10kg.dim_400x400.jpg",
              alt: product.name,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute bottom-3 left-3 font-display font-bold text-xl text-primary", children: [
            "₹",
            product.priceRupees.toString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-2", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => addItem(product.id, 1),
              disabled: isLoading,
              className: "w-full button-primary rounded-sm",
              "data-ocid": `buy-now-${product.id}`,
              children: [
                "Buy Now",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Home() {
  const { actor, isFetching } = useActor(createActor);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts();
    },
    enabled: !!actor && !isFetching
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-30",
          style: {
            backgroundImage: "url('/assets/generated/hero-charcoal.dim_1200x600.jpg')"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-block text-xs font-display font-bold tracking-[0.3em] uppercase text-primary border border-primary/40 px-4 py-1.5 mb-6",
            children: "Est. 2005 · Karnataka"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-none tracking-tight mb-4",
            children: [
              "PREMIUM QUALITY",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "CHARCOAL" }),
              " SINCE 2005"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-body",
            children: "Trusted charcoal supplier with 20+ years of experience delivering high-heat, low-smoke charcoal at affordable prices."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  size: "lg",
                  className: "button-primary text-sm tracking-widest uppercase rounded-sm px-8",
                  "data-ocid": "hero-order-btn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Order Now" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  className: "button-outline text-sm tracking-widest uppercase rounded-sm px-8",
                  "data-ocid": "hero-contact-btn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" })
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-primary-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body text-primary-foreground/80 uppercase tracking-wider mt-0.5", children: stat.label })
        ]
      },
      stat.label
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-4",
          children: "About Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { delay: 0.2 },
          className: "text-muted-foreground font-body leading-relaxed",
          children: "Sri Balaji Premium Charcoal has been serving customers for more than 20 years. We specialize in supplying high-quality charcoal suitable for household use, restaurants, and small businesses — known for strong heat output, longer burning time, low smoke, and affordable pricing."
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-10 text-center",
          children: "Our Products"
        }
      ),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto", children: (products ?? []).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id.toString())) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          className: "button-outline rounded-sm",
          "data-ocid": "view-all-products-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "View All Products" })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-4",
          children: "Online Delivery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 font-body", children: "We provide doorstep delivery services. Select product, enter delivery details, make payment and receive confirmation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: ["UPI", "Debit Card", "Credit Card", "Net Banking"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "border border-primary/40 text-primary text-sm font-display px-4 py-1.5 rounded-sm",
          children: m
        },
        m
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-10 text-center",
          children: "Why Choose Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "bg-card border border-border p-6 rounded-sm shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-8 text-primary mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground mb-1", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body", children: f.desc })
          ]
        },
        f.title
      )) })
    ] }) })
  ] });
}
export {
  Home
};
