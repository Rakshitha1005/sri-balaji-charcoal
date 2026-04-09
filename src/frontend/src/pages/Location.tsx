import { Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { motion } from "motion/react";

const deliveryAreas = ["Angondhalli", "Nearby Areas", "Surrounding Locations"];

export function Location() {
  return (
    <div className="dark">
      <section className="bg-muted/20 py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-4xl sm:text-5xl text-foreground"
          >
            Our Location
          </motion.h1>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-sm overflow-hidden border border-border shadow-card bg-card min-h-72 flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="size-12 text-primary mx-auto mb-3" />
              <p className="font-display font-bold text-foreground">
                Angondhalli, Karnataka
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Sri Balaji Premium Charcoal
              </p>
              <a
                href="https://maps.google.com/?q=Angondhalli,Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-primary underline hover:opacity-80 transition-smooth"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>

          {/* Details */}
          <div className="space-y-5">
            <div className="bg-card border border-border rounded-sm p-4 flex items-start gap-4">
              <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-foreground mb-0.5">
                  Address
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  Angondhalli, Karnataka, India
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-4 flex items-start gap-4">
              <Phone className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-foreground mb-0.5">
                  Phone
                </div>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-4 flex items-start gap-4">
              <Mail className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-foreground mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:balajicharcoal@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  balajicharcoal@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-4 flex items-start gap-4">
              <Clock className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-foreground mb-0.5">
                  Business Hours
                </div>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday: 9 AM – 8 PM
                </p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-sm p-4 flex items-start gap-4">
              <Truck className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-bold text-sm text-foreground mb-1">
                  Delivery Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {deliveryAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs border border-primary/40 text-primary px-2.5 py-1 rounded-sm font-display"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
