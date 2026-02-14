import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  image: string;
  color?: "warm" | "cream" | "blush" | "sage" | "amber";
  index?: number;
}

const ProductCard = ({ name, description, price, image, color = "warm", index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: name, // Using name as ID since we don't have unique IDs
      name,
      price,
      image,
      quantity: 1
    });
  };

  const colorClasses = {
    warm: "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/15",
    cream: "bg-gradient-to-br from-secondary to-cream border-latte/30",
    blush: "bg-gradient-to-br from-blush/15 to-secondary border-blush/20",
    sage: "bg-gradient-to-br from-sage/10 to-secondary border-sage/20",
    amber: "bg-gradient-to-br from-accent/10 to-secondary border-accent/20",
  };

  return (
    <Reveal width="100%" delay={(index % 4) * 0.1}>
      <div className="group">
        <div className={`${colorClasses[color]} rounded-2xl p-5 border transition-all duration-500 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1`}>
          {/* <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-background/50">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div> */}

          <div className="space-y-2">
            <h3 className="font-display text-lg text-foreground leading-tight">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            )}
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">{price}</span>
              <Button
                size="icon"
                className="rounded-full w-9 h-9 shadow-[var(--shadow-warm)] hover:scale-110 transition-transform"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProductCard;
