import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import outletPhoto from "@/assets/custom-cake.jpg";
import MenuSection from "@/components/MenuSection";
import CustomCakesSection from "@/components/CustomCakesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-accent/10" />
        <div className="absolute top-32 right-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-primary" />
                  100% Vegetarian
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                  <span className="block text-foreground">Happiness</span>
                  <span className="block text-gradient italic">Baked</span>
                  <span className="block text-foreground">Fresh Everyday</span>
                </h1>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-xl text-muted-foreground max-w-md">
                  Love at First Bite!!! 🍰
                </p>
              </Reveal>
              <Reveal delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/menu">
                    <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                      View Menu
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/custom-cakes">
                    <Button size="lg" variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                      Order Custom Cake
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <ScaleIn delay={0.2} duration={0.8}>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -rotate-6" />
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/15 rounded-full" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img
                    src="https://scontent.fblr4-4.fna.fbcdn.net/v/t51.82787-15/610611431_18308861266264050_5803920813677337223_n.webp?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M114OfucOXwQ7kNvwFh26Ll&_nc_oc=AdlO5nih1jPib-ny0GTJZuD_jLWgU1eqI73nKC5nmNPA3E2R_JqOOuDTlVaGwkCgVh6bPM4jQHyaH_-Sk3-BjzsX&_nc_zt=23&_nc_ht=scontent.fblr4-4.fna&_nc_gid=H5cnRsQIxmkcgjDCMqVAOw&oh=00_AfvAaXDdUK2Gcb1KHlhiF8hMX4fBRXp1FnuC70H44UJGFQ&oe=69954C3E"
                    alt="Drips Bakery & Cafe Outlet"
                    className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Student Discount Banner */}
      <section className="py-6 bg-gradient-to-r from-espresso via-chocolate to-espresso">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center flex-shrink-0 rotate-3">
              <GraduationCap className="w-8 h-8 text-espresso" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream italic">
                10% OFF on Cakes for Students
              </h3>
              <p className="text-cream/70 text-sm mt-1">Show your valid ID card at any outlet</p>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      <CustomCakesSection />

      <GallerySection />

      <AboutSection />

      <ContactSection />
    </div>
  );
};

export default Home;
