import { motion } from "motion/react";

const terms = [
  { id: "prices", text: "Prices are subject to change without prior notice." },
  {
    id: "cancel",
    text: "Orders once confirmed cannot be cancelled after dispatch.",
  },
  {
    id: "delivery",
    text: "Delivery time depends on your location within our delivery area.",
  },
  {
    id: "payment",
    text: "Payment must be completed through the payment portal before order processing.",
  },
  {
    id: "refuse",
    text: "We reserve the right to refuse any order at our discretion.",
  },
  {
    id: "bulk",
    text: "For bulk orders, please contact us directly for custom pricing.",
  },
];

export function Terms() {
  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {terms.map(({ id, text }, i) => (
              <li
                key={id}
                className="flex items-start gap-3 text-muted-foreground font-body text-sm leading-relaxed"
              >
                <span className="size-5 rounded-sm bg-primary/10 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
