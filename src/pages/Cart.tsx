import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <Reveal>
                    <div className="bg-secondary/30 p-8 rounded-full mb-6">
                        <Trash2 className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h2>
                    <p className="text-muted-foreground mb-8 max-w-md">
                        Looks like you haven't added any delicious treats yet.
                        Head over to our menu to satisfy your cravings!
                    </p>
                    <Link to="/menu">
                        <Button size="lg" className="rounded-full px-8">
                            Browse Menu
                        </Button>
                    </Link>
                </Reveal>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <Reveal width="100%">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 text-center">Your Cart</h1>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1} width="100%">
                            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                {/* Image Placeholder or Actual Image */}
                                <div className="w-24 h-24 bg-secondary/20 rounded-xl overflow-hidden flex-shrink-0">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="font-display text-xl font-bold mb-1">{item.name}</h3>
                                    <p className="text-primary font-bold mb-4">{item.price}</p>

                                    <div className="flex items-center justify-center sm:justify-start gap-4">
                                        <div className="flex items-center gap-2 bg-secondary/20 rounded-full p-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-full hover:bg-white"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="w-3 h-3" />
                                            </Button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-full hover:bg-white"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive transition-colors"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </Reveal>
                    ))}

                    <div className="flex justify-end pt-4">
                        <Button variant="outline" onClick={clearCart} className="text-muted-foreground hover:text-destructive">
                            Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Reveal delay={0.2} width="100%">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm sticky top-32">
                            <h3 className="font-display text-2xl font-bold mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-muted-foreground">
                                    <span>Tax</span>
                                    <span>Included</span>
                                </div>
                                <div className="border-t border-border pt-4 flex justify-between items-center font-bold text-xl">
                                    <span>Total</span>
                                    <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full rounded-full group"
                                onClick={() => setIsCheckoutOpen(true)}
                            >
                                Order Now
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
            />
        </div>
    );
};

export default Cart;
