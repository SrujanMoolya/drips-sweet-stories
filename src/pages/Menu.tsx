import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const Menu = () => {
  const categories = {
    cakes: [
      { name: "Vanilla Cake", description: "Classic 500gm", price: "₹300", image: customCake, color: "yellow" as const },
      { name: "Black Forest", description: "Classic 500gm", price: "₹375", image: customCake, color: "pink" as const },
      { name: "Red Velvet", description: "Premium 500gm", price: "₹400", image: customCake, color: "pink" as const },
      { name: "Butterscotch", description: "Plain 500gm", price: "₹325", image: customCake, color: "peach" as const },
      { name: "Chocolate Truffle", description: "Pure Ganache Cake", price: "₹450", image: customCake, color: "yellow" as const },
      { name: "Death by Chocolate", description: "With Almonds", price: "₹450", image: customCake, color: "blue" as const },
      { name: "Pineapple Cake", description: "Fresh fruit 500gm", price: "₹300", image: customCake, color: "yellow" as const },
      { name: "Strawberry Cake", description: "Fresh fruit 500gm", price: "₹300", image: customCake, color: "pink" as const },
      { name: "Mango Cake", description: "Seasonal 500gm", price: "₹300", image: customCake, color: "peach" as const },
      { name: "Lotus Biscoff", description: "Special 500gm", price: "₹500", image: customCake, color: "blue" as const },
      { name: "Kit Kat Gems", description: "Premium 500gm", price: "₹550", image: customCake, color: "pink" as const },
      { name: "Rainbow Cake", description: "Colorful layers", price: "₹500", image: customCake, color: "yellow" as const },
    ],
    cheesecakes: [
      { name: "Red Velvet Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "pink" as const },
      { name: "Blueberry Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "blue" as const },
      { name: "Lotus Biscoff Cheesecake", description: "Premium 500gm", price: "₹600", image: customCake, color: "peach" as const },
      { name: "Chocolate Cheesecake", description: "500gm", price: "₹550", image: customCake, color: "yellow" as const },
      { name: "Oreo Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "blue" as const },
      { name: "Mango Cheesecake", description: "Seasonal 500gm", price: "₹500", image: customCake, color: "peach" as const },
    ],
    icecream: [
      { name: "Chocolate Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "yellow" as const },
      { name: "Butterscotch Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "peach" as const },
      { name: "Black Currant Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "blue" as const },
      { name: "Mango Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "peach" as const },
      { name: "Oreo Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "blue" as const },
      { name: "Strawberry Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "pink" as const },
    ],
    pastries: [
      { name: "Plain Croissant", description: "Buttery & flaky", price: "₹30", image: pastries, color: "yellow" as const },
      { name: "Chocolate Croissant", description: "With chocolate filling", price: "₹50", image: pastries, color: "blue" as const },
      { name: "Blueberry Croissant", description: "Fruity delight", price: "₹40", image: pastries, color: "blue" as const },
      { name: "Strawberry Croissant", description: "Fresh berry", price: "₹40", image: pastries, color: "pink" as const },
      { name: "Chocolate Donut", description: "Classic glazed", price: "₹30", image: pastries, color: "yellow" as const },
      { name: "Caramel Donut", description: "Sweet caramel", price: "₹30", image: pastries, color: "peach" as const },
      { name: "Red Velvet Muffin", description: "Mini size", price: "₹30", image: pastries, color: "pink" as const },
      { name: "Chocolate Muffin", description: "Mini size", price: "₹25", image: pastries, color: "yellow" as const },
    ],
    snacks: [
      { name: "Veg Puff", description: "Crispy & savory", price: "₹15", image: pastries, color: "yellow" as const },
      { name: "Paneer Puff", description: "Paneer filling", price: "₹20", image: pastries, color: "peach" as const },
      { name: "Veg Roll", description: "Fresh vegetables", price: "₹20", image: pastries, color: "blue" as const },
      { name: "Paneer Tikka Roll", description: "Spiced paneer", price: "₹20", image: pastries, color: "pink" as const },
      { name: "Paneer Bhurji Roll", description: "Scrambled paneer", price: "₹25", image: pastries, color: "peach" as const },
      { name: "Cheese Baked Roll", description: "Cheesy goodness", price: "₹25", image: pastries, color: "yellow" as const },
      { name: "Brown Toast", description: "Crispy toast", price: "₹60", image: pastries, color: "peach" as const },
      { name: "Kaju Toast", description: "With cashews", price: "₹55", image: pastries, color: "yellow" as const },
    ],
    cookies: [
      { name: "Ajwain Star", description: "180gm pack", price: "₹70", image: pastries, color: "yellow" as const },
      { name: "Jeera Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "peach" as const },
      { name: "Choco Vanilla", description: "180gm pack", price: "₹70", image: pastries, color: "blue" as const },
      { name: "Cherry Vanilla Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "pink" as const },
      { name: "Butterscotch Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "peach" as const },
      { name: "Choco Pista Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "blue" as const },
      { name: "Red Velvet Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "pink" as const },
      { name: "Kaju Macaroons", description: "180gm pack", price: "₹70", image: pastries, color: "yellow" as const },
    ],
    desserts: [
      { name: "Strawberry Lollipop", description: "Sweet treat", price: "₹20", image: customCake, color: "pink" as const },
      { name: "Chocolate Lollipop", description: "Rich chocolate", price: "₹20", image: customCake, color: "yellow" as const },
      { name: "Choco Rum Ball", description: "Boozy delight", price: "₹25", image: customCake, color: "blue" as const },
      { name: "Chocolate Brownie", description: "Fudgy & rich", price: "₹40", image: customCake, color: "yellow" as const },
      { name: "Nutella Brownie", description: "With Nutella", price: "₹50", image: customCake, color: "peach" as const },
      { name: "Tiramisu Mousse", description: "Coffee flavored", price: "₹50", image: customCake, color: "blue" as const },
      { name: "Blueberry Mousse", description: "Fresh berries", price: "₹40", image: customCake, color: "blue" as const },
      { name: "Strawberry Mousse", description: "Fresh strawberry", price: "₹40", image: customCake, color: "pink" as const },
    ],
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our delicious selection of freshly baked goods, handcrafted beverages, 
            and delightful desserts. All items are 100% vegetarian.
          </p>
        </div>

        <Tabs defaultValue="cakes" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 lg:grid-cols-8 mb-12">
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
            <TabsTrigger value="cheesecakes">Cheesecakes</TabsTrigger>
            <TabsTrigger value="icecream">Ice Cream</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
            <TabsTrigger value="cookies">Cookies</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>

          {Object.entries(categories).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <ProductCard key={index} {...item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 glass rounded-3xl p-10 text-center border border-white/20 animate-fade-in-up hover-lift">
          <h3 className="font-display text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
            Order for Delivery
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Craving something sweet? Order now through our delivery partners!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gradient-to-r from-primary to-coffee-light text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Order on Swiggy
            </a>
            <a href="#" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gradient-to-r from-primary to-coffee-light text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
