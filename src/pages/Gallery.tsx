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
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual treat of our delicious creations, cozy cafe moments, 
            and happy customers enjoying the Drips experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-card font-medium p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary/30 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Share Your Drips Moments</h3>
          <p className="text-muted-foreground mb-6">
            Tag us on Instagram with #DripsBakery to be featured in our gallery!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
