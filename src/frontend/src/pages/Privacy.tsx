import { motion } from "motion/react";

export function Privacy() {
  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            We respect customer privacy. All personal information collected
            through our website is used only for order processing and
            communication purposes.
          </p>
          <p>
            We do not share customer data with third parties. Your name, phone
            number, and delivery address are used solely to process and deliver
            your orders.
          </p>
          <p>
            For questions about our privacy practices, contact us at{" "}
            <a
              href="mailto:balajicharcoal@gmail.com"
              className="text-primary hover:underline"
            >
              balajicharcoal@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
