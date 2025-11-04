import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Gallery = () => {
  const images = [
    { src: customCake, alt: "Custom Designer Cake" },
    { src: pastries, alt: "Fresh Pastries" },
    { src: heroBakery, alt: "Bakery Display" },
    { src: cafeInterior, alt: "Cafe Interior" },
    { src: customCake, alt: "Wedding Cake" },
    { src: pastries, alt: "Croissants" },
    { src: heroBakery, alt: "Coffee & Cakes" },
    { src: cafeInterior, alt: "Cozy Seating" },
    { src: customCake, alt: "Birthday Cake" },
    { src: pastries, alt: "Danish Pastries" },
    { src: heroBakery, alt: "Dessert Selection" },
    { src: cafeInterior, alt: "Modern Interior" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual treat of our delicious creations, cozy cafe moments, 
            and happy customers enjoying the Drips experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-white font-semibold text-lg p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.alt}</p>
              </div>
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl text-center border border-white/20 animate-fade-in-up hover-lift">
          <h3 className="font-display text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-coffee-light bg-clip-text text-transparent">
            Share Your Drips Moments
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Tag us on Instagram with #DripsBakery to be featured in our gallery!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gradient-to-r from-primary to-coffee-light text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
