import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Award, Users, Leaf, MapPin, Phone, Clock, Instagram, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import outletPhoto from "@/assets/outlet-photo.jpg";
import dripsLogo from "@/assets/drips-logo.jpg";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const Home = () => {
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

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const featuredProducts = [
    { name: "Chocolate Truffle Cake", description: "Pure Ganache Cake", price: "₹450", image: customCake, color: "warm" as const },
    { name: "Lotus Biscoff Cake", description: "Premium 500gm", price: "₹500", image: customCake, color: "cream" as const },
    { name: "Red Velvet Cake", description: "Premium 500gm", price: "₹400", image: customCake, color: "blush" as const },
    { name: "Plain Croissant", description: "Buttery & flaky", price: "₹30", image: pastries, color: "amber" as const },
  ];

  const galleryImages = [
    { src: customCake, alt: "Custom Designer Cake" },
    { src: pastries, alt: "Fresh Pastries" },
    { src: heroBakery, alt: "Bakery Display" },
    { src: cafeInterior, alt: "Cafe Interior" },
    { src: customCake, alt: "Wedding Cake" },
    { src: pastries, alt: "Croissants" },
  ];

  const handleCustomCakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request submitted! We'll contact you soon to finalize your custom cake.");
    setFormData({ name: "", phone: "", email: "", occasion: "", size: "", flavor: "", design: "", date: "" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-accent/10" />
        <div className="absolute top-32 right-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 text-primary" />
                100% Vegetarian
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                <span className="block text-foreground">Happiness</span>
                <span className="block text-gradient italic">Baked</span>
                <span className="block text-foreground">Fresh Everyday</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Love at First Bite!!! 🍰
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu">
                  <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                    View Menu
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/custom-cakes">
                  <Button size="lg" variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                    Order Custom Cake
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up [animation-delay:200ms]">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -rotate-6" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/15 rounded-full" />
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <img
                  src={outletPhoto}
                  alt="Drips Bakery & Cafe Outlet"
                  className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Discount Banner */}
      <section className="py-6 bg-gradient-to-r from-espresso via-chocolate to-espresso">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center flex-shrink-0 rotate-3">
              <GraduationCap className="w-8 h-8 text-espresso" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream italic">
                10% OFF on Cakes for Students
              </h3>
              <p className="text-cream/70 text-sm mt-1">Show your valid ID card at any outlet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-background" id="menu">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Our Specialties</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
              Featured Delights
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Taste our most loved creations, handpicked just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" className="rounded-full px-10">
                View Full Menu
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary/30" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="animate-fade-in-up">
                <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img
                    src={cafeInterior}
                    alt="Drips Cafe"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="animate-fade-in-up">
                <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-6">
                  About Drips
                </h2>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  Drips Bakery & Cafe is a popular local hangout in Udupi and Manipal known for its delightful cakes, pastries, and handcrafted coffee.
                </p>
                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                  We serve happiness baked fresh every day — from customized designer cakes to crunchy croissants, creamy desserts, and refreshing beverages.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  With cozy interiors, vibrant vibes, and 100% vegetarian menu options, Drips has become a go-to place for students, families, and dessert lovers alike.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">100% Vegetarian</span>
                  <span className="bg-accent/15 text-accent-foreground px-5 py-2 rounded-full text-sm font-medium">Fresh Daily</span>
                  <span className="bg-blush/20 text-foreground px-5 py-2 rounded-full text-sm font-medium">Love at First Bite!!!</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Made with Love", desc: "Every item crafted with passion", color: "bg-primary/10 text-primary" },
                { icon: Leaf, title: "100% Vegetarian", desc: "Quality vegetarian ingredients", color: "bg-sage/15 text-sage" },
                { icon: Award, title: "Premium Quality", desc: "Finest ingredients for taste", color: "bg-accent/15 text-accent" },
                { icon: Users, title: "Community First", desc: "Building connections through food", color: "bg-blush/15 text-terracotta" },
              ].map((item, i) => (
                <div key={i} className="text-center bg-card p-8 rounded-2xl border border-border/50 hover-lift animate-fade-in-up">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cakes Section */}
      <section className="py-24 bg-background" id="custom-cakes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Made to Order</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
              Custom Cakes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Make your celebrations extra special with our designer custom cakes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] mb-8">
                <img src={customCake} alt="Custom Cake" className="w-full h-[350px] object-cover" />
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border/50">
                <h3 className="font-display text-2xl mb-6">Available Options</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Novelty Cakes (1kg)", price: "₹1000" },
                    { name: "Semi Fondant Cakes (1kg)", price: "₹1200" },
                    { name: "3D Pure Fondant Cakes (1kg)", price: "₹1400" },
                    { name: "Photo Print Cakes", price: "₹150-300" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic mt-4">
                  * For special cake orders, kindly discuss with our chef
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-[var(--shadow-soft)] animate-fade-in-up">
              <h3 className="font-display text-2xl mb-6">Order Your Custom Cake</h3>
              <form onSubmit={handleCustomCakeSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 99728 56775" />
                </div>
                <div>
                  <Label htmlFor="occasion">Occasion *</Label>
                  <Input id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required placeholder="Birthday, Wedding, Anniversary, etc." />
                </div>
                <div>
                  <Label htmlFor="size">Cake Size *</Label>
                  <select id="size" name="size" value={formData.size} onChange={handleChange} required className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                    <option value="">Select size</option>
                    <option value="500gm">500gm</option>
                    <option value="1kg">1 kg</option>
                    <option value="2kg">2 kg</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="flavor">Preferred Flavor *</Label>
                  <Input id="flavor" name="flavor" value={formData.flavor} onChange={handleChange} required placeholder="Chocolate, Vanilla, Red Velvet, etc." />
                </div>
                <div>
                  <Label htmlFor="date">Required Date *</Label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="design">Design Details</Label>
                  <Textarea id="design" name="design" value={formData.design} onChange={handleChange} placeholder="Describe your dream cake design..." rows={3} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Custom Cake Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary/20" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Visual Treat</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg">
              A peek into our delicious creations and happy moments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-cream font-medium text-sm p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-card p-10 rounded-2xl border border-border/50 animate-fade-in-up">
            <h3 className="font-display text-2xl mb-3 text-foreground">
              Share Your Drips Moments
            </h3>
            <p className="text-muted-foreground mb-6">
              Tag us on Instagram to be featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://instagram.com/DripsBakeryAndCafeUdupi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-primary to-terracotta text-primary-foreground font-medium text-sm hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                @DripsBakeryAndCafeUdupi
              </a>
              <a
                href="https://instagram.com/DripsBakeryAndCafeManipal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-primary to-terracotta text-primary-foreground font-medium text-sm hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                @DripsBakeryAndCafeManipal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground italic mb-4">
              Visit Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We're here to serve you happiness every day!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Udupi Outlet",
                address: "Opp. Udupi Courts\nBeside Mummy & Me\nUdupi, Karnataka",
              },
              {
                name: "Manipal Outlet",
                address: "Opp. Youth Corner\nBeside Hotel Tranquil, Vidhyaratna Nagar\nManipal, Karnataka",
              },
            ].map((outlet, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border/50 hover-lift animate-fade-in-up">
                <h3 className="font-display text-2xl mb-6 text-foreground">{outlet.name}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground whitespace-pre-line">{outlet.address}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-muted-foreground">
                      +91 99728 56775<br />+91 81519 56775
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blush/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-terracotta" />
                    </div>
                    <p className="text-muted-foreground">
                      Open Daily<br />8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 border border-border/50 shadow-[var(--shadow-soft)] animate-fade-in-up">
            <h3 className="font-display text-2xl mb-6 text-center">Send us a Message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input id="contact-name" name="name" value={contactForm.name} onChange={handleContactChange} required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone *</Label>
                  <Input id="contact-phone" name="phone" type="tel" value={contactForm.phone} onChange={handleContactChange} required placeholder="+91 99728 56775" />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" name="email" type="email" value={contactForm.email} onChange={handleContactChange} placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea id="contact-message" name="message" value={contactForm.message} onChange={handleContactChange} required placeholder="How can we help you?" rows={4} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-secondary/50 border border-border/30 rounded-2xl p-6 text-center animate-fade-in-up">
            <p className="text-muted-foreground text-sm">
              <strong>Note:</strong> All fresh cream products to be refrigerated and should be consumed within 3 days from purchase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
