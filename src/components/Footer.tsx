import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-chocolate to-espresso" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-3xl italic text-amber mb-4">
                Drips
              </h3>
              <p className="text-cream/70 text-sm mb-4">
                Happiness Baked Fresh Everyday 🍰
              </p>
              <p className="text-cream/60 text-sm font-medium">
                100% Vegetarian | Fresh & Hygienic
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h4 className="font-semibold text-cream mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { to: "/menu", label: "Menu" },
                  { to: "/custom-cakes", label: "Custom Cakes" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/about", label: "About Us" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-cream/60 hover:text-amber text-sm transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h4 className="font-semibold text-cream mb-4 text-sm tracking-widest uppercase">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-cream/60 text-sm">
                  <Phone className="w-4 h-4 mt-0.5 text-amber" />
                  <span>+91 99728 56775 / +91 73535 43966</span>
                </li>
                <li className="flex items-start gap-3 text-cream/60 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-amber" />
                  <span>hello@dripsbakery.com</span>
                </li>
                <li className="flex items-start gap-3 text-cream/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-amber" />
                  <span>Udupi & Manipal, Karnataka</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div>
              <h4 className="font-semibold text-cream mb-6 text-sm tracking-widest uppercase">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/dripsbakery_udupimanipalmalpe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center text-cream/70 hover:bg-amber hover:text-espresso transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.5}>
          <div className="border-t border-cream/10 mt-12 pt-8 text-center">
            <p className="text-cream/40 text-sm">
              © {new Date().getFullYear()} Drips Bakery & Cafe. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
