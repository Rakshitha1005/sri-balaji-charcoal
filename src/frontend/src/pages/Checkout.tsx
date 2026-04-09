import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useActor } from "@caffeineai/core-infrastructure";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { useCart } from "../context/CartContext";
import { PaymentMethod } from "../types";
import type { DeliveryDetails } from "../types";

const paymentOptions = [
  {
    value: PaymentMethod.upi,
    label: "UPI",
    desc: "Google Pay, PhonePe, Paytm",
  },
  {
    value: PaymentMethod.debitCreditCard,
    label: "Debit/Credit Card",
    desc: "Visa, Mastercard, RuPay",
  },
  {
    value: PaymentMethod.netBanking,
    label: "Net Banking",
    desc: "All major banks",
  },
];

export function Checkout() {
  const { cart, clearCart } = useCart();
  const { actor } = useActor(createActor);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.upi,
  );
  const [form, setForm] = useState<DeliveryDetails>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange =
    (field: keyof DeliveryDetails) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Connection not ready. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.placeOrder(form, paymentMethod);
      await clearCart();
      toast.success("Order placed successfully! We'll contact you shortly.");
      navigate({ to: "/" });
    } catch {
      toast.error("Failed to place order. Please try again.");
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
            Checkout
          </motion.h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Delivery Details */}
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-5">
                Delivery Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="fullName"
                      className="text-foreground font-display font-medium text-sm"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      required
                      placeholder="Rajesh Kumar"
                      value={form.fullName}
                      onChange={handleChange("fullName")}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                      data-ocid="checkout-name"
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
                      data-ocid="checkout-phone"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="address"
                    className="text-foreground font-display font-medium text-sm"
                  >
                    Delivery Address
                  </Label>
                  <Input
                    id="address"
                    required
                    placeholder="House no., Street, Area"
                    value={form.address}
                    onChange={handleChange("address")}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                    data-ocid="checkout-address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="city"
                      className="text-foreground font-display font-medium text-sm"
                    >
                      City
                    </Label>
                    <Input
                      id="city"
                      required
                      placeholder="Angondhalli"
                      value={form.city}
                      onChange={handleChange("city")}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                      data-ocid="checkout-city"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="pincode"
                      className="text-foreground font-display font-medium text-sm"
                    >
                      Pincode
                    </Label>
                    <Input
                      id="pincode"
                      required
                      placeholder="580001"
                      value={form.pincode}
                      onChange={handleChange("pincode")}
                      className="bg-card border-border text-foreground placeholder:text-muted-foreground rounded-sm"
                      data-ocid="checkout-pincode"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment */}
            <div>
              <h2 className="font-display font-bold text-xl text-foreground mb-5">
                Payment Method
              </h2>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
                className="space-y-3"
                data-ocid="payment-method-group"
              >
                {paymentOptions.map((opt) => (
                  <label
                    key={opt.value}
                    htmlFor={opt.value}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm cursor-pointer transition-smooth hover:border-primary has-[[data-state=checked]]:border-primary"
                  >
                    <RadioGroupItem
                      value={opt.value}
                      id={opt.value}
                      data-ocid={`payment-${opt.value}`}
                    />
                    <div>
                      <div className="font-display font-bold text-sm text-foreground">
                        {opt.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {opt.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Order Summary */}
            {cart && cart.items.length > 0 && (
              <div className="bg-card border border-border rounded-sm p-4">
                <div className="flex justify-between items-center">
                  <span className="font-display font-bold text-foreground">
                    Order Total
                  </span>
                  <span className="font-display font-bold text-primary text-xl">
                    ₹{cart.totalRupees.toString()}
                  </span>
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full rounded-sm"
              size="lg"
              data-ocid="place-order-btn"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
