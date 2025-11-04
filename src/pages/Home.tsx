import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Cake, Clock } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import heroBakery from "@/assets/hero-bakery.jpg";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Home = () => {
  const featuredProducts = [
    {
      name: "Designer Cake",
      description: "Customized cakes for your special occasions",
      price: "₹899+",
      image: customCake,
    },
    {
      name: "Fresh Pastries",
      description: "Croissants, danish & more baked daily",
      price: "₹49+",
      image: pastries,
    },
    {
      name: "Artisan Coffee",
      description: "Handcrafted with premium beans",
      price: "₹99+",
      image: heroBakery,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroBakery})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-rose/30 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in-up">
            Happiness Baked Fresh Everyday
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg animate-fade-in-up [animation-delay:200ms]">
            Your everyday dessert stop for cakes, pastries & handcrafted coffee ☕
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
            <Button size="lg" className="bg-gradient-to-r from-primary to-coffee-light hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" className="glass-strong hover:bg-card border-2 border-white/30 hover:scale-105 transition-all duration-300">
              <Link to="/custom-cakes">Order Custom Cake</Link>
            </Button>
          </div>
        </div>
        
        {/* Floating decoration elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-rose/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float [animation-delay:1s]" />
      </section>

      {/* Features */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-rose/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Cake className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fresh Daily</h3>
              <p className="text-sm text-muted-foreground">Baked fresh every morning</p>
            </div>
            <div className="text-center group animate-fade-in-up [animation-delay:100ms]">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Coffee className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Coffee</h3>
              <p className="text-sm text-muted-foreground">Handcrafted with care</p>
            </div>
            <div className="text-center group animate-fade-in-up [animation-delay:200ms]">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Two Locations</h3>
              <p className="text-sm text-muted-foreground">Udupi & Manipal</p>
            </div>
            <div className="text-center group animate-fade-in-up [animation-delay:300ms]">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Open Daily</h3>
              <p className="text-sm text-muted-foreground">8 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
              Featured Treats
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From our oven to your heart ❤️
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up">
            <Link to="/menu">
              <Button size="lg" className="glass-strong border-2 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cafe Experience */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose/10 via-transparent to-secondary/20" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
                A Cozy Space for Everyone
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Whether you're a student looking for a study spot, a family celebrating a special 
                moment, or just craving something sweet, Drips is your perfect hangout destination.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Enjoy our warm interiors, vibrant vibes, and 100% vegetarian menu in the heart 
                of Udupi and Manipal.
              </p>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-primary to-coffee-light hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative group animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-rose rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={cafeInterior}
                  alt="Cafe Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-coffee-light bg-clip-text text-transparent">
              Visit Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Find us at our two convenient locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-3xl border border-white/20 hover-lift animate-fade-in-up group">
              <h3 className="font-semibold text-2xl mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-rose/20 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                Udupi Outlet
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                123 Main Street, Udupi<br />
                Karnataka - 576101
              </p>
              <p className="text-sm text-primary font-medium">Open: 8 AM - 10 PM</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/20 hover-lift animate-fade-in-up [animation-delay:100ms] group">
              <h3 className="font-semibold text-2xl mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-rose/20 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                Manipal Outlet
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                456 College Road, Manipal<br />
                Karnataka - 576104
              </p>
              <p className="text-sm text-primary font-medium">Open: 8 AM - 10 PM</p>
            </div>
          </div>
          <div className="text-center mt-12 animate-fade-in-up [animation-delay:200ms]">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-coffee-light hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
