import { Heart, Award, Users, Leaf } from "lucide-react";
import Outletphoto from "@/assets/outlet-photo.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="about">
      <div className="container mx-auto px-4">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">About Drips</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From Oven to Heart ❤️
            </p>
          </div>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <ScaleIn delay={0.2}>
              <div>
                <img
                  src={Outletphoto}
                  alt="Drips Cafe"
                  className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </ScaleIn>
            <Reveal delay={0.4} direction="left">
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Drips Bakery & Cafe started with a simple dream: to create a space where every
                  visit feels like a warm hug and every bite brings a smile. Located in the heart
                  of Udupi and Manipal, we've become a beloved destination for students, families,
                  and dessert enthusiasts.
                </p>
                <p className="text-muted-foreground text-lg mb-4">
                  What began as a small bakery has blossomed into a community favorite, serving
                  happiness baked fresh every day. From customized designer cakes to handcrafted
                  coffee, we pour love into every creation.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, Drips is more than just a bakery – it's where memories are made,
                  celebrations come alive, and everyday moments become special.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Heart, title: "Made with Love", desc: "Every item is crafted with passion and attention to detail" },
              { icon: Leaf, title: "100% Vegetarian", desc: "Fresh, quality ingredients that are completely vegetarian" },
              { icon: Award, title: "Premium Quality", desc: "Using only the finest ingredients for superior taste" },
              { icon: Users, title: "Community First", desc: "Building connections through food and warmth" }
            ].map((item, index) => (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <div className="text-center h-full p-6 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal width="100%" delay={0.4}>
            <div className="bg-secondary/30 rounded-2xl p-12 text-center hover:shadow-[var(--shadow-soft)] transition-shadow duration-300">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Reveal delay={0.5} width="100%">
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Freshness</h3>
                    <p className="text-muted-foreground">
                      Everything is baked fresh daily, ensuring the best taste and quality
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.6} width="100%">
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Hygiene</h3>
                    <p className="text-muted-foreground">
                      Maintaining the highest standards of cleanliness and food safety
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.7} width="100%">
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Happiness</h3>
                    <p className="text-muted-foreground">
                      Creating joyful experiences with every visit and every bite
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
