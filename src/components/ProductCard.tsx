import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description?: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <div className="group glass rounded-3xl overflow-hidden hover-lift border border-white/20 animate-fade-in-up">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-coffee-light bg-clip-text text-transparent">{price}</span>
          <Button size="sm" className="bg-gradient-to-r from-primary to-coffee-light hover:shadow-lg hover:scale-105 transition-all duration-300">
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
