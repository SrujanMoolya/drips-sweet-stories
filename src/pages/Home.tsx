import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Cake, Clock, Star, Heart, Sparkles } from "lucide-react";
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
      color: "yellow" as const
    },
    {
      name: "Fresh Pastries",
      description: "Croissants, danish & more baked daily",
      price: "₹49+",
      image: pastries,
      color: "blue" as const
    },
    {
      name: "Artisan Coffee",
      description: "Handcrafted with premium beans",
      price: "₹99+",
      image: heroBakery,
      color: "peach" as const
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section - Bold & Playful */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-peach via-cream to-yellow-light">
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow rounded-full opacity-30 blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink rounded-full opacity-30 blur-3xl animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue rounded-full opacity-20 blur-2xl animate-float [animation-delay:2s]" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-yellow px-4 py-2 rounded-full font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                FRESH TODAY
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-black leading-tight">
                <span className="block text-brown">BAKE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange to-pink">THE</span>
                <span className="block text-brown">HAPPINESS</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="bg-blue text-white px-4 py-2 rounded-full font-bold text-sm">
                  PREMIUM BREAD
                </div>
                <div className="bg-pink text-foreground px-4 py-2 rounded-full font-bold text-sm">
                  FRESH
                </div>
              </div>
              <p className="text-lg text-brown/80 max-w-md">
                We're literally obsessed with giving you the best handcrafted treats made from scratch!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="yellow" className="rounded-full px-8 hover:scale-105 transition-transform">
                  ORDER NOW
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                  EXPLORE MENU →
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up [animation-delay:200ms]">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow rounded-3xl -rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue rounded-full" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500">
                <img
                  src={heroBakery}
                  alt="Fresh Baked Goods"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">100% FRESH</p>
                    <p className="text-xs text-muted-foreground">Made daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - Colorful */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue/20 rounded-full" />
              <div className="relative bg-gradient-to-br from-teal to-blue rounded-[3rem] p-12 text-white">
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center animate-float">
                    <Coffee className="w-8 h-8 text-brown" />
                  </div>
                </div>
                <Cake className="w-16 h-16 mb-6" />
                <h2 className="font-display text-5xl font-black mb-4">
                  YOUR ONLY<br />DOSE OF<br />DELIGHT
                </h2>
                <p className="text-white/90 mb-6">Featured Items –</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden">
                      <img src={pastries} alt="Croissant" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">Bagel Buns</h4>
                      <p className="text-sm text-white/70">Gluten free</p>
                    </div>
                    <div className="font-bold text-xl">₹16</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-white/80">
                  All cookies should have a slow-stopping German chocolate cake in their repertoire and this is one of our favourites.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-display text-5xl font-black text-brown mb-4">
                  PRODUCT WE BAKE<br />HERE DAILY–
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-blue text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  COOKIES <span className="bg-white text-blue rounded-full w-6 h-6 flex items-center justify-center text-xs">8</span>
                </div>
                <div className="bg-teal-light text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  CAKE <span className="bg-white text-teal rounded-full w-6 h-6 flex items-center justify-center text-xs">12</span>
                </div>
                <div className="bg-pink text-foreground px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  BRETZEL <span className="bg-white text-pink rounded-full w-6 h-6 flex items-center justify-center text-xs">5</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-yellow text-foreground px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  CROISSANT <span className="bg-brown text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">6</span>
                </div>
                <div className="bg-orange text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                  BAGEL <span className="bg-white text-orange rounded-full w-6 h-6 flex items-center justify-center text-xs">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-brown text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow rounded-full" />
              <div className="absolute -top-2 -left-10 w-2 h-2 bg-pink rounded-full" />
              <div className="absolute -top-8 -left-6 w-3 h-3 bg-blue rounded-full" />
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={cafeInterior}
                  alt="Baking as art"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow p-3 rounded-full animate-float">
                <Heart className="w-8 h-8 text-brown" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display text-5xl font-black">
                WHY IS BAKING<br />CONSIDERED AS<br />ART FORM ?
              </h2>
              <p className="text-white/80 text-lg">
                Their experience plays a role in the way they work. Bakers use flavours and visual appeal to produce an edible art-piece.
              </p>
              <Button variant="yellow" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                LEARN BAKING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-light via-peach to-pink-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-5xl font-black text-brown mb-4">
                  WHY BEKERY'S<br />ITEMS IS SO SPECIAL<br />TO CUSTOMER?
                </h2>
                <div className="flex gap-2 mb-6">
                  <div className="w-12 h-1 bg-blue rounded-full" />
                  <div className="w-6 h-1 bg-pink rounded-full" />
                </div>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-2 border-brown hover:bg-brown hover:text-white">
                  SHOP NOW
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-yellow rounded-2xl overflow-hidden">
                      <img src={cafeInterior} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Ashton Cooper</h4>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-brown/80 text-lg mb-4 leading-relaxed">
                    "Baking is a craft, is basi, and we have those delicious and creately flavoress bakery items."
                  </p>
                  <div className="flex gap-3">
                    <div className="bg-teal text-white px-4 py-2 rounded-full text-xs font-bold">PLAIN CAKE</div>
                    <div className="bg-blue text-white px-4 py-2 rounded-full text-xs font-bold">CROISSANT</div>
                    <div className="bg-yellow text-brown px-4 py-2 rounded-full text-xs font-bold">LOAF BREAD</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue rounded-full flex items-center justify-center text-white z-10">
                  <img src={customCake} alt="Product" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-black text-brown mb-4">
              VISIT OUR OUTLETS
            </h2>
            <p className="text-brown/60 text-lg">Two amazing locations in Udupi & Manipal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue to-teal text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-2xl mb-2">Udupi Outlet</h3>
              <p className="text-white/90 mb-4">
                123 Main Street, Udupi<br />
                Karnataka - 576101
              </p>
              <p className="text-sm font-bold">⏰ 8 AM - 10 PM</p>
            </div>
            <div className="bg-gradient-to-br from-pink to-orange text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-2xl mb-2">Manipal Outlet</h3>
              <p className="text-white/90 mb-4">
                456 College Road, Manipal<br />
                Karnataka - 576104
              </p>
              <p className="text-sm font-bold">⏰ 8 AM - 10 PM</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" variant="yellow" className="rounded-full px-12 hover:scale-105 transition-transform">
                GET DIRECTIONS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
