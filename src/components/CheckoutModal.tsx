import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
    const { cart, totalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        address: "",
        timing: "",
        additionalInfo: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Construct the WhatsApp message
        let message = `*New Order from Website* 🍰\n\n`;
        message += `*Customer Details:*\n`;
        message += `Name: ${formData.name}\n`;
        message += `Contact: ${formData.contact}\n`;
        message += `Address: ${formData.address}\n`;
        message += `Preferred Timing: ${formData.timing}\n`;
        if (formData.additionalInfo) {
            message += `Additional Info: ${formData.additionalInfo}\n`;
        }

        message += `\n*Order Details:*\n`;
        cart.forEach((item) => {
            message += `- ${item.name} (x${item.quantity}) - ${item.price}\n`;
        });

        message += `\n*Total Amount: ₹${totalPrice.toFixed(2)}*`;

        // 2. Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // 3. WhatsApp API URL (using the provided phone number)
        const phoneNumber = "918151956775";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // 4. Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        // 5. Toast success and clear cart? 
        // Maybe clearer to clear cart after successful opening of WhatsApp or let user manually clear it. 
        // Usually, for this flow, we can clear it or keep it. Let's keep it for now in case the user comes back, 
        // or clear it if we assume the order is placed. 
        // Let's clear it to simulate a completed order flow.
        toast.success("Redirecting to WhatsApp to complete your order!");
        clearCart();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display">Complete Your Order</DialogTitle>
                    <DialogDescription>
                        Enter your details below. We'll redirect you to WhatsApp to confirm your order.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Full Name"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input
                            id="contact"
                            name="contact"
                            type="tel"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="address">Delivery Address *</Label>
                        <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="Full address with landmark"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="timing">Preferred Delivery/Pickup Time *</Label>
                        <div className="relative">
                            <Input
                                id="timing"
                                name="timing"
                                value={formData.timing}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Today at 5 PM"
                            />
                            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="additionalInfo">Additional Requests (Optional)</Label>
                        <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Any special instructions?"
                        />
                    </div>
                    <DialogFooter className="mt-6">
                        <Button type="submit" size="lg" className="w-full">
                            Send Order via WhatsApp
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CheckoutModal;
