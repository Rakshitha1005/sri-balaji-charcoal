import { Link } from "@tanstack/react-router";
import { Flame, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Location", to: "/location" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="size-6 text-primary" />
              <span className="font-display font-bold text-lg text-foreground">
                Sri Balaji
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Premium Quality Since 2005
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Angondhalli, Karnataka
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="size-4 text-primary shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href="mailto:balajicharcoal@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  balajicharcoal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {year} Sri Balaji Premium Charcoal. All Rights Reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
