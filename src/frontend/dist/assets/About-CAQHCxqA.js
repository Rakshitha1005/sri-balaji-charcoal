import { j as jsxRuntimeExports, F as Flame } from "./index-CpuXL1W6.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import { C as CircleCheck } from "./circle-check-BgvxpP9f.js";
const milestones = [
  { year: "2005", event: "Founded in Angondhalli, Karnataka" },
  { year: "2010", event: "Expanded to restaurant and commercial clients" },
  { year: "2015", event: "Reached 500+ satisfied customers" },
  { year: "2020", event: "Launched online ordering platform" },
  { year: "2026", event: "1000+ customers, expanding delivery reach" }
];
const values = [
  "Quality products with consistent heat output",
  "Fair and affordable pricing",
  "On-time doorstep delivery",
  "Strong customer relationships",
  "Transparent business practices"
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "size-10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            className: "font-display font-bold text-4xl sm:text-5xl text-foreground leading-none",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mt-1", children: "Est. 2005 · Angondhalli, Karnataka" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "prose-base text-muted-foreground font-body leading-relaxed space-y-4 mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Sri Balaji Premium Charcoal was established in",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "2005" }),
              " with a mission to provide reliable and affordable charcoal products to customers across Karnataka."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Over the past",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "20+ years" }),
              ", we have built trust through quality products, fair pricing, and on-time delivery. Our charcoal is sourced and processed to ensure strong heat output, longer burning time, and minimal smoke — making it ideal for household cooking, restaurants, bakeries, and tandoors."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our goal is to expand our online presence and provide easy ordering options so that every customer, whether in Angondhalli or surrounding areas, can access premium charcoal at their doorstep." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-5", children: "Our Commitment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3 text-sm font-body text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v })
                ]
              },
              v
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-5", children: "Our Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l border-primary/30 pl-6 space-y-6", children: milestones.map(({ year, event }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-9 size-4 rounded-full bg-primary border-2 border-background top-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display font-bold text-primary uppercase tracking-widest mb-0.5", children: year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-body text-muted-foreground", children: event })
                ]
              },
              year
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  About
};
