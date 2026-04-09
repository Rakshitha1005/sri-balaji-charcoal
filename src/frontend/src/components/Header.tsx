import { Badge } from "@/components/ui/badge";
import { Link, useRouter } from "@tanstack/react-router";
import { Flame, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Location", to: "/location" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <header
      className="sticky top-0 z-40 bg-card border-b border-border shadow-elevated"
      data-ocid="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="header-logo"
          >
            <Flame className="size-7 text-primary transition-smooth group-hover:scale-110" />
            <div className="leading-tight">
              <div className="font-display font-bold text-base text-foreground tracking-tight">
                Sri Balaji
              </div>
              <div className="text-[10px] text-muted-foreground font-body uppercase tracking-widest -mt-0.5">
                Premium Charcoal
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-display font-medium transition-colors duration-200 hover:text-primary ${
                  currentPath === link.to
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/cart"
              className="relative p-2 rounded-md transition-smooth hover:bg-muted"
              aria-label={`Cart, ${itemCount} items`}
              data-ocid="cart-icon-btn"
            >
              <ShoppingCart className="size-5 text-foreground" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground border-0 rounded-full">
                  {itemCount > 99 ? "99+" : itemCount}
                </Badge>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md transition-smooth hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="mobile-menu-btn"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="md:hidden border-t border-border py-3 space-y-1"
            data-ocid="mobile-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-display font-medium transition-colors duration-200 hover:bg-muted hover:text-primary ${
                  currentPath === link.to
                    ? "text-primary bg-muted/50"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-display font-medium text-foreground/70 hover:bg-muted hover:text-primary transition-colors duration-200"
            >
              <ShoppingCart className="size-4" />
              Cart
              {itemCount > 0 && (
                <Badge className="ml-auto bg-primary text-primary-foreground border-0 text-[10px]">
                  {itemCount}
                </Badge>
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
