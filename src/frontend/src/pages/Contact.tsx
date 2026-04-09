import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "balajicharcoal@gmail.com",
    href: "mailto:balajicharcoal@gmail.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+91 XXXXX XXXXX",
    href: "https://wa.me/919XXXXXXXXX",
  },
];

export function Contact() {
  const { actor } = useActor(createActor);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitInquiry(
        form.name,
        form.phone,
        form.product,
        form.quantity,
        form.message,
      );
      toast.success("Inquiry submitted! We'll get back to you shortly.");
      setForm({ name: "", phone: "", product: "", quantity: "", message: "" });
    } catch {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Contact Us
          </motion.h1>
          <p className="text-muted-foreground mt-2 font-body">
            Have questions or bulk order inquiries? Contact us today.
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm transition-smooth hover:border-primary group"
                  data-ocid={`contact-${label.toLowerCase()}`}
                >
                  <div className="size-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-display uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="text-sm text-foreground font-body">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="font-display font-bold text-xl text-foreground mb-6">
              Send Inquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-foreground font-display font-medium text-sm"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                  data-ocid="contact-name"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-foreground font-display font-medium text-sm"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                  data-ocid="contact-phone"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="product"
                  className="text-foreground font-display font-medium text-sm"
                >
                  Product
                </Label>
                <Input
                  id="product"
                  placeholder="e.g. 5kg Pack, 10kg Pack"
                  value={form.product}
                  onChange={handleChange("product")}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                  data-ocid="contact-product"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="quantity"
                  className="text-foreground font-display font-medium text-sm"
                >
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  placeholder="e.g. 5 bags"
                  value={form.quantity}
                  onChange={handleChange("quantity")}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                  data-ocid="contact-quantity"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-foreground font-display font-medium text-sm"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message or requirements..."
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={4}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm resize-none"
                  data-ocid="contact-message"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full rounded-sm"
                data-ocid="contact-submit-btn"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
