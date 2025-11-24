// import { useContext } from "react";
import { createContext } from "react";

interface CartContextType {
    cart: string[];
    addToCart: (product: string) => void;
    removeFromCart: (productToRemove: string) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
