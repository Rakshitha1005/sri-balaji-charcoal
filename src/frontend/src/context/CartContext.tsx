import { useActor } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createActor } from "../backend";
import type { Cart } from "../types";

interface CartContextValue {
  cart: Cart | null;
  isLoading: boolean;
  itemCount: number;
  addItem: (productId: bigint, quantity: number) => Promise<void>;
  removeItem: (productId: bigint) => Promise<void>;
  updateQuantity: (productId: bigint, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const refreshCart = useCallback(async () => {
    if (!actor || isFetching) return;
    try {
      const result = await actor.getCart();
      setCart(result);
    } catch {
      setCart({ items: [], totalRupees: BigInt(0) });
    }
  }, [actor, isFetching]);

  useEffect(() => {
    if (actor && !isFetching) {
      refreshCart();
    }
  }, [actor, isFetching, refreshCart]);

  const addItem = useCallback(
    async (productId: bigint, quantity: number) => {
      if (!actor) return;
      setIsLoading(true);
      try {
        const result = await actor.addToCart(productId, BigInt(quantity));
        setCart(result);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } finally {
        setIsLoading(false);
      }
    },
    [actor, queryClient],
  );

  const removeItem = useCallback(
    async (productId: bigint) => {
      if (!actor) return;
      setIsLoading(true);
      try {
        const result = await actor.removeFromCart(productId);
        setCart(result);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } finally {
        setIsLoading(false);
      }
    },
    [actor, queryClient],
  );

  const updateQuantity = useCallback(
    async (productId: bigint, quantity: number) => {
      if (!actor) return;
      setIsLoading(true);
      try {
        const result = await actor.updateCartItem(productId, BigInt(quantity));
        setCart(result);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } finally {
        setIsLoading(false);
      }
    },
    [actor, queryClient],
  );

  const clearCart = useCallback(async () => {
    if (!actor) return;
    setIsLoading(true);
    try {
      await actor.clearCart();
      setCart({ items: [], totalRupees: BigInt(0) });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    } finally {
      setIsLoading(false);
    }
  }, [actor, queryClient]);

  const itemCount =
    cart?.items.reduce((sum, item) => sum + Number(item.quantity), 0) ?? 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
