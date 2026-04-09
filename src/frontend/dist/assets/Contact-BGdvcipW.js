import { c as createLucideIcon, j as jsxRuntimeExports, h as cn, u as useActor, r as reactExports, k as Phone, M as Mail, d as createActor } from "./index-CpuXL1W6.js";
import { B as Button } from "./button-23maWr3T.js";
import { L as Label, I as Input, u as ue } from "./index-TdAKjqq1.js";
import { m as motion } from "./proxy-Davn-OPZ.js";
import "./index-COuTK7U9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX"
  },
  {
    icon: Mail,
    label: "Email",
    value: "balajicharcoal@gmail.com",
    href: "mailto:balajicharcoal@gmail.com"
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 XXXXX XXXXX",
    href: "https://wa.me/919XXXXXXXXX"
  }
];
function Contact() {
  const { actor } = useActor(createActor);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });
  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!actor) {
      ue.error("Not connected. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitInquiry(
        form.name,
        form.phone,
        form.product,
        form.quantity,
        form.message
      );
      ue.success("Inquiry submitted! We'll get back to you shortly.");
      setForm({ name: "", phone: "", product: "", quantity: "", message: "" });
    } catch {
      ue.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          className: "font-display font-bold text-4xl sm:text-5xl text-foreground",
          children: "Contact Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 font-body", children: "Have questions or bulk order inquiries? Contact us today." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-6", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: contactInfo.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href,
            target: href.startsWith("http") ? "_blank" : void 0,
            rel: "noopener noreferrer",
            className: "flex items-center gap-4 p-4 bg-card border border-border rounded-sm transition-smooth hover:border-primary group",
            "data-ocid": `contact-${label.toLowerCase()}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-display uppercase tracking-wider", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground font-body", children: value })
              ] })
            ]
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-6", children: "Send Inquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "name",
                className: "text-foreground font-display font-medium text-sm",
                children: "Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                required: true,
                placeholder: "Your name",
                value: form.name,
                onChange: handleChange("name"),
                className: "bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm",
                "data-ocid": "contact-name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "phone",
                className: "text-foreground font-display font-medium text-sm",
                children: "Phone Number"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                required: true,
                type: "tel",
                placeholder: "+91 98765 43210",
                value: form.phone,
                onChange: handleChange("phone"),
                className: "bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm",
                "data-ocid": "contact-phone"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "product",
                className: "text-foreground font-display font-medium text-sm",
                children: "Product"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "product",
                placeholder: "e.g. 5kg Pack, 10kg Pack",
                value: form.product,
                onChange: handleChange("product"),
                className: "bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm",
                "data-ocid": "contact-product"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "quantity",
                className: "text-foreground font-display font-medium text-sm",
                children: "Quantity"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "quantity",
                placeholder: "e.g. 5 bags",
                value: form.quantity,
                onChange: handleChange("quantity"),
                className: "bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm",
                "data-ocid": "contact-quantity"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "message",
                className: "text-foreground font-display font-medium text-sm",
                children: "Message"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "message",
                placeholder: "Your message or requirements...",
                value: form.message,
                onChange: handleChange("message"),
                rows: 4,
                className: "bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm resize-none",
                "data-ocid": "contact-message"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: "button-primary w-full rounded-sm",
              "data-ocid": "contact-submit-btn",
              children: isSubmitting ? "Sending..." : "Submit Inquiry"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Contact
};
