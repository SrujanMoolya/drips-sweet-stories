import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const Menu = () => {
  const categories = {
    cakes: [
      { name: "Chocolate Truffle Cake", description: "Rich chocolate layers with ganache", price: "₹499", image: customCake },
      { name: "Black Forest Cake", description: "Classic cherry & cream delight", price: "₹449", image: customCake },
      { name: "Red Velvet Cake", description: "Smooth cream cheese frosting", price: "₹549", image: customCake },
      { name: "Butterscotch Cake", description: "Caramel & butter perfection", price: "₹399", image: customCake },
    ],
    pastries: [
      { name: "Croissant", description: "Buttery, flaky French pastry", price: "₹49", image: pastries },
      { name: "Chocolate Eclair", description: "Creamy chocolate filling", price: "₹69", image: pastries },
      { name: "Danish Pastry", description: "Sweet & fruity danish", price: "₹59", image: pastries },
      { name: "Fruit Tart", description: "Fresh seasonal fruits", price: "₹89", image: pastries },
    ],
    beverages: [
      { name: "Cappuccino", description: "Classic Italian coffee", price: "₹99", image: heroBakery },
      { name: "Latte", description: "Smooth espresso with milk", price: "₹119", image: heroBakery },
      { name: "Cold Brew", description: "Refreshing cold coffee", price: "₹129", image: heroBakery },
      { name: "Hot Chocolate", description: "Rich & creamy cocoa", price: "₹109", image: heroBakery },
    ],
    desserts: [
      { name: "Tiramisu", description: "Italian coffee-flavored dessert", price: "₹149", image: customCake },
      { name: "Brownie", description: "Fudgy chocolate brownie", price: "₹79", image: pastries },
      { name: "Cheesecake", description: "Creamy New York style", price: "₹169", image: customCake },
      { name: "Macarons", description: "Delicate French cookies", price: "₹99", image: pastries },
    ],
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our delicious selection of freshly baked goods, handcrafted beverages, 
            and delightful desserts. All items are 100% vegetarian.
          </p>
        </div>

        <Tabs defaultValue="cakes" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
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

        <div className="mt-16 bg-secondary/30 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Order for Delivery</h3>
          <p className="text-muted-foreground mb-6">
            Craving something sweet? Order now through our delivery partners!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Order on Swiggy
            </a>
            <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Order on Zomato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
