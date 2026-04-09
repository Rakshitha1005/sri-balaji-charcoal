import { j as jsxRuntimeExports } from "./index-CpuXL1W6.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
const terms = [
  { id: "prices", text: "Prices are subject to change without prior notice." },
  {
    id: "cancel",
    text: "Orders once confirmed cannot be cancelled after dispatch."
  },
  {
    id: "delivery",
    text: "Delivery time depends on your location within our delivery area."
  },
  {
    id: "payment",
    text: "Payment must be completed through the payment portal before order processing."
  },
  {
    id: "refuse",
    text: "We reserve the right to refuse any order at our discretion."
  },
  {
    id: "bulk",
    text: "For bulk orders, please contact us directly for custom pricing."
  }
];
function Terms() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "font-display font-bold text-4xl sm:text-5xl text-foreground",
        children: "Terms & Conditions"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: terms.map(({ id, text }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex items-start gap-3 text-muted-foreground font-body text-sm leading-relaxed",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-5 rounded-sm bg-primary/10 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5", children: i + 1 }),
          text
        ]
      },
      id
    )) }) }) })
  ] });
}
export {
  Terms
};
