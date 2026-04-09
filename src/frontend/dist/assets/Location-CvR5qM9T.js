import { c as createLucideIcon, j as jsxRuntimeExports, k as Phone, M as Mail } from "./index-CpuXL1W6.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import { T as Truck } from "./truck-u24iPEha.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const deliveryAreas = ["Angondhalli", "Nearby Areas", "Surrounding Locations"];
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h1,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "font-display font-bold text-4xl sm:text-5xl text-foreground",
        children: "Our Location"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          className: "rounded-sm overflow-hidden border border-border shadow-card bg-card min-h-72 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-12 text-primary mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: "Angondhalli, Karnataka" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Sri Balaji Premium Charcoal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://maps.google.com/?q=Angondhalli,Karnataka",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-block mt-4 text-sm text-primary underline hover:opacity-80 transition-smooth",
                children: "Open in Google Maps"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground mb-0.5", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body", children: "Angondhalli, Karnataka, India" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground mb-0.5", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+91XXXXXXXXXX",
                className: "text-sm text-muted-foreground hover:text-primary transition-smooth",
                children: "+91 XXXXX XXXXX"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground mb-0.5", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:balajicharcoal@gmail.com",
                className: "text-sm text-muted-foreground hover:text-primary transition-smooth",
                children: "balajicharcoal@gmail.com"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground mb-0.5", children: "Business Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monday – Saturday: 9 AM – 8 PM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sunday: Closed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-sm p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground mb-1", children: "Delivery Areas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: deliveryAreas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs border border-primary/40 text-primary px-2.5 py-1 rounded-sm font-display",
                children: area
              },
              area
            )) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Location
};
