import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const Menu = () => {
  const categories = {
    cakes: [
      { name: "Vanilla Cake", description: "Classic 500gm", price: "₹300", image: customCake, color: "cream" as const },
      { name: "Black Forest", description: "Classic 500gm", price: "₹375", image: customCake, color: "blush" as const },
      { name: "Red Velvet", description: "Premium 500gm", price: "₹400", image: customCake, color: "blush" as const },
      { name: "Butterscotch", description: "Plain 500gm", price: "₹325", image: customCake, color: "amber" as const },
      { name: "Chocolate Truffle", description: "Pure Ganache Cake", price: "₹450", image: customCake, color: "warm" as const },
      { name: "Death by Chocolate", description: "With Almonds", price: "₹450", image: customCake, color: "warm" as const },
      { name: "Pineapple Cake", description: "Fresh fruit 500gm", price: "₹300", image: customCake, color: "amber" as const },
      { name: "Strawberry Cake", description: "Fresh fruit 500gm", price: "₹300", image: customCake, color: "blush" as const },
      { name: "Mango Cake", description: "Seasonal 500gm", price: "₹300", image: customCake, color: "amber" as const },
      { name: "Lotus Biscoff", description: "Special 500gm", price: "₹500", image: customCake, color: "warm" as const },
      { name: "Kit Kat Gems", description: "Premium 500gm", price: "₹550", image: customCake, color: "blush" as const },
      { name: "Rainbow Cake", description: "Colorful layers", price: "₹500", image: customCake, color: "cream" as const },
    ],
    barcakes: [
      { name: "Red Velvet Bar Cake", description: "250gm", price: "₹75", image: customCake, color: "blush" as const },
      { name: "Chocolate Bar Cake", description: "250gm", price: "₹75", image: customCake, color: "warm" as const },
      { name: "Vanilla Bar Cake", description: "250gm", price: "₹75", image: customCake, color: "cream" as const },
    ],
    cupcakes: [
      { name: "Vanilla Cup Cake", description: "Fresh baked", price: "₹40", image: customCake, color: "cream" as const },
      { name: "Pineapple Cup Cake", description: "Fruity delight", price: "₹50", image: customCake, color: "amber" as const },
      { name: "Strawberry Cup Cake", description: "Berry flavor", price: "₹50", image: customCake, color: "blush" as const },
      { name: "Red Velvet Cup Cake", description: "Premium", price: "₹50", image: customCake, color: "blush" as const },
      { name: "Blueberry Cup Cake", description: "Berry bliss", price: "₹50", image: customCake, color: "sage" as const },
      { name: "Chocolate Cup Cake", description: "Rich cocoa", price: "₹50", image: customCake, color: "warm" as const },
    ],
    cheesecakes: [
      { name: "Red Velvet Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "blush" as const },
      { name: "Blueberry Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "sage" as const },
      { name: "Lotus Biscoff Cheesecake", description: "Premium 500gm", price: "₹600", image: customCake, color: "amber" as const },
      { name: "Chocolate Cheesecake", description: "500gm", price: "₹550", image: customCake, color: "warm" as const },
      { name: "Oreo Cheesecake", description: "500gm", price: "₹500", image: customCake, color: "cream" as const },
      { name: "Mango Cheesecake", description: "Seasonal 500gm", price: "₹500", image: customCake, color: "amber" as const },
    ],
    icecream: [
      { name: "Chocolate Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "warm" as const },
      { name: "Butterscotch Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "amber" as const },
      { name: "Black Currant Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "sage" as const },
      { name: "Mango Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "amber" as const },
      { name: "Oreo Ice Cream Cake", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "cream" as const },
      { name: "Strawberry Ice Cream", description: "Pre-order 12hrs", price: "₹600", image: customCake, color: "blush" as const },
    ],
    pastries: [
      { name: "Plain Croissant", description: "Buttery & flaky", price: "₹30", image: pastries, color: "amber" as const },
      { name: "Chocolate Croissant", description: "With chocolate filling", price: "₹50", image: pastries, color: "warm" as const },
      { name: "Blueberry Croissant", description: "Fruity delight", price: "₹40", image: pastries, color: "sage" as const },
      { name: "Strawberry Croissant", description: "Fresh berry", price: "₹40", image: pastries, color: "blush" as const },
      { name: "Chocolate Donut", description: "Classic glazed", price: "₹30", image: pastries, color: "warm" as const },
      { name: "Caramel Donut", description: "Sweet caramel", price: "₹30", image: pastries, color: "amber" as const },
      { name: "Brown Chocolate Donut", description: "Rich chocolate", price: "₹30", image: pastries, color: "warm" as const },
      { name: "Milk Chocolate Donut", description: "Creamy", price: "₹30", image: pastries, color: "cream" as const },
      { name: "White Chocolate Donut", description: "Sweet white choco", price: "₹30", image: pastries, color: "cream" as const },
      { name: "Chocolate Caramel Donut", description: "Double flavor", price: "₹35", image: pastries, color: "amber" as const },
      { name: "Chocolate Filling Donut", description: "Filled center", price: "₹40", image: pastries, color: "warm" as const },
      { name: "Mini Fruit Muffin", description: "Fruity mini", price: "₹20", image: pastries, color: "blush" as const },
      { name: "Mini Chocolate Muffin", description: "Mini size", price: "₹25", image: pastries, color: "warm" as const },
      { name: "Mini Red Velvet Muffin", description: "Mini size", price: "₹30", image: pastries, color: "blush" as const },
    ],
    snacks: [
      { name: "Veg Puff", description: "Crispy & savory", price: "₹15", image: pastries, color: "amber" as const },
      { name: "Paneer Puff", description: "Paneer filling", price: "₹20", image: pastries, color: "cream" as const },
      { name: "Jumbo Baked Vada Pav", description: "Baked fresh", price: "₹20", image: pastries, color: "amber" as const },
      { name: "Veg Roll", description: "Fresh vegetables", price: "₹20", image: pastries, color: "sage" as const },
      { name: "Paneer Tikka Roll", description: "Spiced paneer", price: "₹20", image: pastries, color: "blush" as const },
      { name: "Paneer Bhurji Roll", description: "Scrambled paneer", price: "₹25", image: pastries, color: "amber" as const },
      { name: "Cheese Baked Roll", description: "Cheesy goodness", price: "₹25", image: pastries, color: "cream" as const },
      { name: "Veg Focaccia", description: "Prebaked Pizza", price: "₹30", image: pastries, color: "sage" as const },
      { name: "Paneer Focaccia", description: "Prebaked Pizza", price: "₹35", image: pastries, color: "blush" as const },
      { name: "Tandoori Paneer & Cheese Roll", description: "Spicy & cheesy", price: "₹30", image: pastries, color: "warm" as const },
      { name: "Veg Cheese Burger", description: "Veg Patties", price: "₹60", image: pastries, color: "sage" as const },
      { name: "Coleslaw Sandwich", description: "Served Cold", price: "₹50", image: pastries, color: "cream" as const },
    ],
    breads: [
      { name: "Brown Bread", description: "Fresh baked", price: "₹40", image: pastries, color: "warm" as const },
      { name: "Milk Bread", description: "Soft & fluffy", price: "₹40", image: pastries, color: "cream" as const },
      { name: "Garlic Bread", description: "Aromatic garlic", price: "₹40", image: pastries, color: "amber" as const },
      { name: "Brown Toast", description: "Crispy toast", price: "₹60", image: pastries, color: "warm" as const },
      { name: "Suji Toast", description: "Semolina coated", price: "₹50", image: pastries, color: "amber" as const },
      { name: "Kaju Toast", description: "With cashews", price: "₹55", image: pastries, color: "cream" as const },
      { name: "Soup Sticks", description: "Crunchy sticks", price: "₹50", image: pastries, color: "amber" as const },
      { name: "Cheese Straws", description: "Cheesy delight", price: "₹50", image: pastries, color: "cream" as const },
      { name: "Fruit Toast", description: "With dry fruits", price: "₹55", image: pastries, color: "blush" as const },
      { name: "Plain Khari", description: "Crispy puff", price: "₹50", image: pastries, color: "amber" as const },
      { name: "Samosa Khari", description: "Spiced filling", price: "₹50", image: pastries, color: "warm" as const },
      { name: "Brown Khari", description: "Whole wheat", price: "₹60", image: pastries, color: "warm" as const },
    ],
    cookies: [
      { name: "Ajwain Star", description: "180gm pack", price: "₹70", image: pastries, color: "amber" as const },
      { name: "Jeera Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "cream" as const },
      { name: "Choco Vanilla", description: "180gm pack", price: "₹70", image: pastries, color: "warm" as const },
      { name: "Cherry Vanilla Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "blush" as const },
      { name: "Butterscotch Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "amber" as const },
      { name: "Choco Pista Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "sage" as const },
      { name: "Red Velvet Cookies", description: "180gm pack", price: "₹70", image: pastries, color: "blush" as const },
      { name: "Kaju Macaroons", description: "180gm pack", price: "₹70", image: pastries, color: "cream" as const },
    ],
    chocolates: [
      { name: "Rock Chocolate", description: "100gm", price: "₹70", image: customCake, color: "warm" as const },
      { name: "Milk Chocolate", description: "100gm", price: "₹70", image: customCake, color: "cream" as const },
      { name: "Dry Fruit Chocolate", description: "100gm premium", price: "₹80", image: customCake, color: "amber" as const },
    ],
    desserts: [
      { name: "Chocolate Brownie", description: "Fudgy & rich", price: "₹50", image: customCake, color: "warm" as const },
      { name: "Choco Lava", description: "Molten center", price: "₹50", image: customCake, color: "warm" as const },
      { name: "Brownie with Ice Cream", description: "Best combo", price: "₹70", image: customCake, color: "amber" as const },
      { name: "Choco Lava with Ice Cream", description: "Indulgent treat", price: "₹70", image: customCake, color: "blush" as const },
      { name: "Strawberry Lollipop", description: "Sweet treat", price: "₹20", image: customCake, color: "blush" as const },
      { name: "Chocolate Lollipop", description: "Rich chocolate", price: "₹20", image: customCake, color: "warm" as const },
      { name: "Choco Rum Ball", description: "Boozy delight", price: "₹25", image: customCake, color: "warm" as const },
      { name: "Nutella Brownie", description: "With Nutella", price: "₹50", image: customCake, color: "amber" as const },
      { name: "Tiramisu Mousse", description: "Coffee flavored", price: "₹50", image: customCake, color: "cream" as const },
      { name: "Blueberry Mousse", description: "Fresh berries", price: "₹40", image: customCake, color: "sage" as const },
      { name: "Strawberry Mousse", description: "Fresh strawberry", price: "₹40", image: customCake, color: "blush" as const },
    ],
    beverages: [
      { name: "Hot Coffee", description: "Freshly brewed", price: "₹60", image: pastries, color: "warm" as const },
      { name: "Black Coffee", description: "Strong & bold", price: "₹60", image: pastries, color: "warm" as const },
      { name: "Green Tea", description: "Healthy choice", price: "₹50", image: pastries, color: "sage" as const },
      { name: "Black Tea", description: "Classic brew", price: "₹50", image: pastries, color: "amber" as const },
    ],
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Explore</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground italic mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our delicious selection of freshly baked goods, handcrafted beverages, 
            and delightful desserts. All items are 100% vegetarian.
          </p>
        </div>

        <Tabs defaultValue="cakes" className="w-full">
          <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-4 lg:grid-cols-12 mb-12">
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
            <TabsTrigger value="barcakes">Bar Cakes</TabsTrigger>
            <TabsTrigger value="cupcakes">Cup Cakes</TabsTrigger>
            <TabsTrigger value="cheesecakes">Cheesecakes</TabsTrigger>
            <TabsTrigger value="icecream">Ice Cream</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
            <TabsTrigger value="breads">Breads & Toasts</TabsTrigger>
            <TabsTrigger value="cookies">Cookies</TabsTrigger>
            <TabsTrigger value="chocolates">Chocolates</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
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

        <div className="mt-16 bg-card rounded-2xl p-10 text-center border border-border/50 animate-fade-in-up hover-lift">
          <h3 className="font-display text-2xl mb-4 text-foreground">
            Order for Delivery
          </h3>
          <p className="text-muted-foreground mb-8">
            Craving something sweet? Order now through our delivery partners!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300">
              Order on Swiggy
            </a>
            <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300">
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
