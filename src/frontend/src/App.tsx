import { Skeleton } from "@/components/ui/skeleton";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import {
  Outlet,
  createRootRoute,
  createRoute,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";

// Lazy-loaded pages
const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const Products = lazy(() =>
  import("./pages/Products").then((m) => ({ default: m.Products })),
);
const Cart = lazy(() =>
  import("./pages/Cart").then((m) => ({ default: m.Cart })),
);
const Checkout = lazy(() =>
  import("./pages/Checkout").then((m) => ({ default: m.Checkout })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);
const Location = lazy(() =>
  import("./pages/Location").then((m) => ({ default: m.Location })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Privacy = lazy(() =>
  import("./pages/Privacy").then((m) => ({ default: m.Privacy })),
);
const Terms = lazy(() =>
  import("./pages/Terms").then((m) => ({ default: m.Terms })),
);

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-4">
      <Skeleton className="h-12 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <CartProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </CartProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});
const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});
const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: Checkout,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const locationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/location",
  component: Location,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: Privacy,
});
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: Terms,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  cartRoute,
  checkoutRoute,
  contactRoute,
  locationRoute,
  aboutRoute,
  privacyRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
