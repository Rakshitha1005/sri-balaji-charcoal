import { u as useActor, a as useQuery, j as jsxRuntimeExports, S as Skeleton, b as useCart, B as Badge, e as ShoppingCart, d as createActor } from "./index-CpuXL1W6.js";
import { B as Button } from "./button-23maWr3T.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import { C as CircleCheck } from "./circle-check-BgvxpP9f.js";
const orderSteps = [
  "Choose product",
  "Add to cart",
  "Fill delivery address",
  "Make online payment",
  "Order confirmation"
];
function ProductDetailCard({ product }) {
  const { addItem, isLoading } = useCart();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "bg-card border border-border rounded-sm shadow-card overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted/30 min-h-64", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.weightKg === BigInt(5) ? "/assets/generated/product-5kg.dim_400x400.jpg" : "/assets/generated/product-10kg.dim_400x400.jpg",
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-black/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary text-primary-foreground border-0 font-display font-bold text-base px-3 py-1 shrink-0", children: [
                "₹",
                product.priceRupees.toString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 font-body leading-relaxed", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-6", children: product.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-body", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                      spec.specLabel,
                      ":"
                    ] }),
                    " ",
                    spec.value
                  ] })
                ]
              },
              spec.specLabel
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => addItem(product.id, 1),
              disabled: isLoading,
              className: "button-primary rounded-sm w-full sm:w-auto",
              "data-ocid": `add-to-cart-${product.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-4" }),
                "Add to Cart"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function Products() {
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          className: "font-display font-bold text-4xl sm:text-5xl text-foreground",
          children: "Our Products"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 font-body", children: "Premium charcoal for every need" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6", children: isLoading ? [1, 2].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64" }, n)) : (products ?? []).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetailCard, { product: p }, p.id.toString())) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "font-display font-bold text-2xl text-foreground mb-6",
          children: "Order Process"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-0", children: orderSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex-1 flex items-start gap-3 p-4 border border-border bg-card rounded-sm mb-2 sm:mb-0 sm:mr-2 last:mr-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-6 rounded-full bg-primary text-primary-foreground font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-body", children: step })
          ]
        },
        step
      )) })
    ] }) })
  ] });
}
export {
  Products
};
