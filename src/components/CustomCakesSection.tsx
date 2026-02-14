import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import customCake from "@/assets/fondent-cake.png";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";

const CustomCakesSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        occasion: "",
        size: "",
        flavor: "",
        design: "",
        date: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Hello, I would like to order a custom cake. Here are the details:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Occasion:* ${formData.occasion}
*Size:* ${formData.size}
*Flavor:* ${formData.flavor}
*Date:* ${formData.date}
*Design Details:* ${formData.design}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918151956775?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        toast.success("Redirecting to WhatsApp to finalize your request!");

        setFormData({
            name: "",
            phone: "",
            email: "",
            occasion: "",
            size: "",
            flavor: "",
            design: "",
            date: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-background" id="custom-cakes">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <div className="text-center mb-12">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Custom Cakes</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Make your celebrations extra special with our designer custom cakes.
                            We'll bring your vision to life with every layer and detail.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <ScaleIn delay={0.2}>
                        <div>
                            <img
                                src={customCake}
                                alt="Custom Cake"
                                className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="mt-8 space-y-4">
                                <Reveal delay={0.4}>
                                    <h3 className="font-display text-2xl font-bold">Why Choose Custom Cakes?</h3>
                                </Reveal>
                                <ul className="space-y-3">
                                    {[
                                        "Personalized designs tailored to your occasion",
                                        "Wide variety of flavors and fillings",
                                        "Fresh ingredients, 100% vegetarian",
                                        "Perfect for birthdays, weddings, anniversaries & more"
                                    ].map((item, index) => (
                                        <Reveal key={index} delay={0.5 + index * 0.1} direction="left">
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary text-xl">✓</span>
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        </Reveal>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScaleIn>

                    <Reveal delay={0.4} width="100%">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h2 className="font-display text-3xl font-bold mb-6">Order Your Custom Cake</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="occasion">Occasion *</Label>
                                    <Input
                                        id="occasion"
                                        name="occasion"
                                        value={formData.occasion}
                                        onChange={handleChange}
                                        required
                                        placeholder="Birthday, Wedding, Anniversary, etc."
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="size">Cake Size *</Label>
                                    <select
                                        id="size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange as any}
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    >
                                        <option value="">Select size</option>
                                        <option value="0.5kg">0.5 kg (Serves 4-6)</option>
                                        <option value="1kg">1 kg (Serves 8-10)</option>
                                        <option value="1.5kg">1.5 kg (Serves 12-15)</option>
                                        <option value="2kg">2 kg (Serves 16-20)</option>
                                        <option value="3kg">3 kg+ (Larger events)</option>
                                    </select>
                                </div>

                                <div>
                                    <Label htmlFor="flavor">Preferred Flavor *</Label>
                                    <Input
                                        id="flavor"
                                        name="flavor"
                                        value={formData.flavor}
                                        onChange={handleChange}
                                        required
                                        placeholder="Chocolate, Vanilla, Red Velvet, etc."
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="date">Required Date *</Label>
                                    <Input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="design">Design Details & Special Requests</Label>
                                    <Textarea
                                        id="design"
                                        name="design"
                                        value={formData.design}
                                        onChange={handleChange}
                                        placeholder="Describe your dream cake design, colors, theme, message on cake, or any special requirements..."
                                        rows={4}
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg">
                                    Submit Custom Cake Request
                                </Button>

                                <p className="text-sm text-muted-foreground text-center">
                                    We'll reach out within 24 hours to confirm details and pricing
                                </p>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CustomCakesSection;
