import { c as createLucideIcon, b as useCart, u as useActor, a as useQuery, j as jsxRuntimeExports, S as Skeleton, e as ShoppingCart, L as Link, d as createActor } from "./index-CpuXL1W6.js";
import { B as Button } from "./button-23maWr3T.js";
import { S as Separator } from "./separator-BRKEf_KW.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import "./index-COuTK7U9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function Cart() {
  const { cart, isLoading, removeItem, updateQuantity } = useCart();
  const { actor, isFetching } = useActor(createActor);
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listProducts();
    },
    enabled: !!actor && !isFetching
  });
  const getProduct = (id) => products == null ? void 0 : products.find((p) => p.id === id);
  const items = (cart == null ? void 0 : cart.items) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "font-display font-bold text-4xl sm:text-5xl text-foreground",
        children: "Your Cart"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24" })
    ] }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "text-center py-16",
        "data-ocid": "cart-empty-state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-16 text-muted-foreground mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Add some products to get started." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "button-primary rounded-sm",
              "data-ocid": "cart-shop-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Shop Products" })
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6", children: items.map((item) => {
        const product = getProduct(item.productId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            className: "bg-card border border-border rounded-sm p-4 flex items-center gap-4",
            "data-ocid": `cart-item-${item.productId}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: (product == null ? void 0 : product.weightKg) === BigInt(5) ? "/assets/generated/product-5kg.dim_400x400.jpg" : "/assets/generated/product-10kg.dim_400x400.jpg",
                  alt: (product == null ? void 0 : product.name) ?? "Product",
                  className: "size-16 object-cover rounded-sm shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm truncate", children: (product == null ? void 0 : product.name) ?? "Loading..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-display font-bold text-base", children: [
                  "₹",
                  (product == null ? void 0 : product.priceRupees.toString()) ?? "—"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Decrease quantity",
                    onClick: () => updateQuantity(
                      item.productId,
                      Math.max(1, Number(item.quantity) - 1)
                    ),
                    className: "size-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-smooth",
                    "data-ocid": `qty-dec-${item.productId}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "size-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-display font-bold text-sm text-foreground", children: Number(item.quantity) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Increase quantity",
                    onClick: () => updateQuantity(
                      item.productId,
                      Number(item.quantity) + 1
                    ),
                    className: "size-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-smooth",
                    "data-ocid": `qty-inc-${item.productId}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Remove item",
                  onClick: () => removeItem(item.productId),
                  className: "p-2 text-muted-foreground hover:text-destructive transition-smooth",
                  "data-ocid": `cart-remove-${item.productId}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" })
                }
              )
            ]
          },
          item.productId.toString()
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-lg", children: "Total Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary text-2xl", children: [
          "₹",
          (cart == null ? void 0 : cart.totalRupees.toString()) ?? "0"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          className: "button-primary w-full rounded-sm",
          size: "lg",
          "data-ocid": "proceed-checkout-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", children: "Proceed to Checkout" })
        }
      )
    ] }) }) })
  ] });
}
export {
  Cart
};
