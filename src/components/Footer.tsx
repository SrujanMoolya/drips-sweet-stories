import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Drips
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Happiness Baked Fresh Everyday 🍰
            </p>
            <p className="text-muted-foreground text-sm">
              100% Vegetarian | Fresh & Hygienic
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/custom-cakes" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Custom Cakes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span>hello@dripsbakery.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Udupi & Manipal, Karnataka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Drips Bakery & Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
