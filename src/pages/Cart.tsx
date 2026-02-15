import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, Store, Clock, Gift } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useState, useMemo } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import { PRODUCT_CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    // Get random recommendations (just simplified for now, taking first 4 from cupcakes)
    const recommendations = useMemo(() => {
        // Collect all products into a single array
        const allProducts = Object.values(PRODUCT_CATEGORIES).flat();
        // Shuffle or pick random 4 (simple slice for now)
        return allProducts.slice(0, 4);
    }, []);

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <Reveal>
                    <div className="bg-muted/30 p-8 rounded-full mb-6 relative">
                        <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2 animate-bounce">
                            <Store className="w-5 h-5 text-primary-foreground" />
                        </div>
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
        <div className="min-h-screen pt-24 pb-32 bg-secondary/5 overflow-x-hidden">
            {/* Delivery Notice Header */}
            <div className="bg-primary/10 text-primary-foreground py-3 px-4 text-center text-sm font-medium sticky top-20 z-10 backdrop-blur-md">
                <p className="text-primary flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    Delivery only available in 15km radius of Udupi, Manipal, Malpe
                </p>
            </div>

            <div className="container mx-auto px-4 mt-8 max-w-2xl">
                <Reveal width="100%">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="font-display text-3xl font-bold">Checkout</h1>
                        <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive hover:bg-destructive/10">
                            Clear Cart
                        </Button>
                    </div>
                </Reveal>

                {/* Free Gift Progress (Mock UI) */}
                <Reveal width="100%" delay={0.1}>
                    <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-sm flex items-center gap-4">
                        <div className="bg-purple-100 p-2 rounded-lg">
                            <Gift className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-sm mb-1">Free gift for you!</p>
                            <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                                <div className="bg-purple-600 w-2/3 h-full rounded-full" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Add items worth ₹200 more</p>
                        </div>
                        <Button size="sm" variant="outline" className="h-8">View</Button>
                    </div>
                </Reveal>

                {/* Delivery Time (Mock UI) */}
                <Reveal width="100%" delay={0.15}>
                    <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-sm flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <Clock className="w-5 h-5 text-green-700" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Delivery in 30-45 minutes</p>
                            <p className="text-xs text-muted-foreground">Shipment of {cart.length} items</p>
                        </div>
                    </div>
                </Reveal>


                {/* Cart Items List */}
                <div className="space-y-4 mb-8">
                    {cart.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.1} width="100%">
                            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                                {/* Image */}
                                <div className="w-16 h-16 bg-secondary/20 rounded-lg overflow-hidden flex-shrink-0 border border-border/50">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">No Img</div>
                                    )}
                                </div>

                                <div className="flex-grow min-w-0">
                                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <p className="text-sm font-bold">{item.price}</p>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center bg-green-50 border border-green-200 rounded-lg h-9">
                                    <button
                                        className={`h-full px-3 rounded-l-lg transition-colors flex items-center justify-center ${item.quantity === 1
                                                ? "text-red-500 hover:bg-red-50"
                                                : "text-green-700 hover:bg-green-100"
                                            }`}
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                updateQuantity(item.id, item.quantity - 1);
                                            } else {
                                                removeFromCart(item.id);
                                            }
                                        }}
                                    >
                                        {item.quantity === 1 ? (
                                            <Trash2 className="w-3 h-3" />
                                        ) : (
                                            <Minus className="w-3 h-3" />
                                        )}
                                    </button>
                                    <span className="w-6 text-center text-sm font-bold text-green-800">{item.quantity}</span>
                                    <button
                                        className="h-full px-3 text-green-700 hover:bg-green-100 rounded-r-lg transition-colors flex items-center justify-center"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Recommendations */}
                <div className="mb-24">
                    <h3 className="text-lg font-bold mb-4 px-1">Before you checkout</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {recommendations.map((item, i) => (
                            <div key={i} className="scale-90 origin-top-left">
                                <ProductCard {...item} index={i} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sticky Footer for Payment */}
                <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-[0_-5px_10px_rgba(0,0,0,0.05)] z-30">
                    <div className="container max-w-2xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total</span>
                            <span className="text-xl font-bold">₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <Button
                            size="lg"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-base h-12 shadow-lg hover:shadow-green-900/20"
                            onClick={() => setIsCheckoutOpen(true)}
                        >
                            Place Order
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
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
