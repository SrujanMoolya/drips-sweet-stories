import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, Cake, Image, User, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingBottomNav = () => {
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "Menu", path: "/menu", icon: UtensilsCrossed },
        { name: "Custom", path: "/custom-cakes", icon: Cake },
        { name: "Gallery", path: "/gallery", icon: Image },
        { name: "About", path: "/about", icon: User },
    ];

    const isActive = (path: string) => location.pathname === path;

    // Render icons properly based on active state
    // We need to define Lucide props type properly or use any for quick fix if types aren't available
    const renderIcon = (IconComponent: any, path: string) => {
        return <IconComponent className={`w-5 h-5 mb-1 transition-all duration-300 ${isActive(path) ? "stroke-[2.5px]" : "stroke-2"}`} />;
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
        >
            <nav className="bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-2 py-2 flex justify-between items-center max-w-sm mx-auto">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all duration-300 ${isActive(link.path)
                            ? "text-primary scale-110"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        {renderIcon(link.icon, link.path)}
                        <span className={`text-[10px] font-medium leading-none ${isActive(link.path) ? "font-semibold" : ""}`}>
                            {link.name}
                        </span>
                    </Link>
                ))}
                <Link
                    to="/contact"
                    className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all duration-300 ${isActive("/contact")
                        ? "text-primary scale-110"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {renderIcon(Phone, "/contact")}
                    <span className={`text-[10px] font-medium leading-none ${isActive("/contact") ? "font-semibold" : ""}`}>
                        Contact
                    </span>
                </Link>
            </nav>
        </motion.div>
    );
};

export default FloatingBottomNav;
