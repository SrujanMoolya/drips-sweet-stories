import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24 bg-background" id="contact">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <div className="text-center mb-12">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Have a question or special request? We'd love to hear from you!
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
                    <Reveal delay={0.2}>
                        <div>
                            <h2 className="font-display text-3xl font-bold mb-8">Get In Touch</h2>
                            <div className="space-y-6">
                                <Reveal delay={0.3} direction="left">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-muted-foreground">+91 99728 56775</p>
                                            <p className="text-muted-foreground">+91 73535 43966</p>
                                            <p className="text-sm text-muted-foreground">Mon-Sun: 11 AM - 11 PM</p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.4} direction="left">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-muted-foreground">hello@dripsbakery.com</p>
                                            <p className="text-muted-foreground">orders@dripsbakery.com</p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.5} direction="left">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Udupi Outlet</h3>
                                            <p className="text-muted-foreground">
                                                Shop 6-2-65A, Court Road,<br />
                                                Opposite Udupi Court, Kinnimulki,<br />
                                                Udupi
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                <span className="font-medium">Phone:</span> +91 73535 43966<br />
                                                <span className="font-medium">Hours:</span> 11:00 AM - 11:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.6} direction="left">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Manipal Outlet</h3>
                                            <p className="text-muted-foreground">
                                                15/376F1, End Point Road,<br />
                                                Near DC Office, Vidyaratna Nagar,<br />
                                                Manipal
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                <span className="font-medium">Phone:</span> +91 99728 56775<br />
                                                <span className="font-medium">Hours:</span> 11:00 AM - 11:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.7} direction="left">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Malpe Outlet</h3>
                                            <p className="text-muted-foreground">
                                                Drips Preethi Bakery, Door 10-13 A,<br />
                                                Ground Floor, Karthik Prince Complex,<br />
                                                Main Road Malpe, Pandubettu, Udupi
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                <span className="font-medium">Phone:</span> +91 73535 43966<br />
                                                <span className="font-medium">Hours:</span> 11:00 AM - 11:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} width="100%">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h2 className="font-display text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="name">Name *</Label>
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
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                        rows={5}
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </Reveal>
                </div>

                <div className="max-w-7xl mx-auto">
                    <Reveal width="100%">
                        <h2 className="font-display text-3xl font-bold mb-6 text-center">Find Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ScaleIn delay={0.2}>
                                <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2570882144482!2d74.74913029999999!3d13.334277499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb53efc511ef%3A0x677d9e9e7f0ba54b!2sDrips%20bakery%20%26%20cafe%20Udupi!5e0!3m2!1sen!2sin!4v1771006405042!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Udupi Location"
                                    />
                                </div>
                            </ScaleIn>
                            <ScaleIn delay={0.4}>
                                <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.96538061646!2d74.7840844!3d13.352428799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca528c50f442f%3A0x56548c104707c2b8!2sDrips%20Bakery%20%26%20Cafe%20Manipal!5e0!3m2!1sen!2sin!4v1771006062900!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Manipal Location"
                                    />
                                </div>
                            </ScaleIn>
                            <ScaleIn delay={0.6}>
                                <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62112.37728500863!2d74.62804084863284!3d13.348809300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbbf5e2169cbf%3A0xb2cd61c183543a7b!2sDrips%20preethi%20bakery%20Malpe!5e0!3m2!1sen!2sin!4v1771068433503!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Malpe Location"
                                    />
                                </div>
                            </ScaleIn>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
