import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  image: string;
  color?: "yellow" | "blue" | "peach" | "pink" | "teal";
}

const ProductCard = ({ name, description, price, image, color = "yellow" }: ProductCardProps) => {
  const colorClasses = {
    yellow: "bg-yellow",
    blue: "bg-blue",
    peach: "bg-peach",
    pink: "bg-pink",
    teal: "bg-teal"
  };

  const bgClass = colorClasses[color];

  return (
    <div className="group relative animate-fade-in-up">
      <div className={`${bgClass} rounded-[3rem] p-6 relative overflow-hidden hover:scale-105 transition-transform duration-500`}>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/30 rounded-full blur-xl" />
        
        <div className="relative">
          <div className="aspect-square rounded-[2rem] overflow-hidden mb-4 bg-white/50 backdrop-blur-sm shadow-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-black text-brown uppercase leading-tight">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-brown/70 font-medium line-clamp-2">{description}</p>
            )}
            <div className="flex items-center justify-between pt-2">
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="text-xl font-black text-brown">{price}</span>
              </div>
              <Button 
                size="sm" 
                className="rounded-full bg-brown text-white hover:bg-brown/90 shadow-lg hover:scale-110 transition-transform"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
