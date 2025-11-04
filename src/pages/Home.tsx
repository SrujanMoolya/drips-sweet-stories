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
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBakery})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-card mb-6 drop-shadow-lg">
            Happiness Baked Fresh Everyday
          </h1>
          <p className="text-xl md:text-2xl text-card/95 mb-8 drop-shadow">
            Your everyday dessert stop for cakes, pastries & handcrafted coffee ☕
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/90 hover:bg-card border-2">
              <Link to="/custom-cakes">Order Custom Cake</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fresh Daily</h3>
              <p className="text-sm text-muted-foreground">Baked fresh every morning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Coffee</h3>
              <p className="text-sm text-muted-foreground">Handcrafted with care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Two Locations</h3>
              <p className="text-sm text-muted-foreground">Udupi & Manipal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Open Daily</h3>
              <p className="text-sm text-muted-foreground">8 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured Treats</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From our oven to your heart ❤️
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cafe Experience */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                A Cozy Space for Everyone
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Whether you're a student looking for a study spot, a family celebrating a special 
                moment, or just craving something sweet, Drips is your perfect hangout destination.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Enjoy our warm interiors, vibrant vibes, and 100% vegetarian menu in the heart 
                of Udupi and Manipal.
              </p>
              <Link to="/about">
                <Button>Learn More About Us</Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={cafeInterior}
                alt="Cafe Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <p className="text-muted-foreground text-lg">
              Find us at our two convenient locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-2xl mb-4 flex items-center gap-2">
                <MapPin className="text-primary" />
                Udupi Outlet
              </h3>
              <p className="text-muted-foreground mb-4">
                123 Main Street, Udupi<br />
                Karnataka - 576101
              </p>
              <p className="text-sm text-muted-foreground">Open: 8 AM - 10 PM</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-2xl mb-4 flex items-center gap-2">
                <MapPin className="text-primary" />
                Manipal Outlet
              </h3>
              <p className="text-muted-foreground mb-4">
                456 College Road, Manipal<br />
                Karnataka - 576104
              </p>
              <p className="text-sm text-muted-foreground">Open: 8 AM - 10 PM</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">Get Directions</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
