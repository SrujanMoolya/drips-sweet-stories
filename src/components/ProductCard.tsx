import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{price}</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
