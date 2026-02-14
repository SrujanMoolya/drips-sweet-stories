import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";
import { InstagramReels } from "@/components/InstagramReels";

const GallerySection = () => {
    const images = [
        { src: "https://images.jdmagicbox.com/comp/manipal/h3/0820px820.x820.180828113045.b4h3/catalogue/drips-bakery-and-cafe-manipal-manipal-bakeries-sbebx8h613.jpg", alt: "Custom Designer Cake" },
        { src: "https://b.zmtcdn.com/data/pictures/chains/4/18811674/cbf12bdb087730643f86f2284d46dc28.jpg?fit=around|750:500&crop=750:500;*,*", alt: "Fresh Pastries" },
        { src: "https://img.restaurantguru.com/r36f-Drips-bakery-and-cafe-cake.jpg", alt: "Bakery Display" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41iWiGmIFTIDGOim9s-NKfqK8BFaakgLgkw&s", alt: "Cafe Interior" },
        { src: "https://images.jdmagicbox.com/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-g8q4ufxt70.jpg", alt: "Wedding Cake" },
        { src: "https://images.jdmagicbox.com/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-mkrdsq7eah.jpg", alt: "chocolate cake" },
        { src: "https://images.jdmagicbox.com/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-n5mzirqm3s.jpg", alt: "premium Chocolate Cakes" },
        { src: "https://content3.jdmagicbox.com/v2/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-soxm2abxyr.jpg", alt: "Cozy Seating" },
        { src: "https://images.jdmagicbox.com/v2/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-v3c78nue8s.jpg", alt: "Birthday Cake" },
        { src: "https://images.jdmagicbox.com/comp/udupi/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-udupi-cake-shops-6viu2h7ucg.jpg", alt: "foundant cake" },
        { src: "https://images.jdmagicbox.com/comp/udupi/h3/0820px820.x820.180828113045.b4h3/catalogue/drips-bakery-and-cafe-udupi-11bzfqpxce.jpg", alt: "cookies & biscuits" },
        { src: "https://images.jdmagicbox.com/v2/comp/manipal/y7/0820px820.x820.221201202421.c8y7/catalogue/drips-bakery-and-cafe-vidyaratna-nagar-manipal-cake-shops-lz39mdg6zj.jpg", alt: "Modern Interior" },
    ];

    return (
        <section className="py-24 bg-background" id="gallery">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
                            Gallery
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A visual treat of our delicious creations, cozy cafe moments,
                            and happy customers enjoying the Drips experience.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <ScaleIn
                            key={index}
                            delay={index % 3 * 0.1}
                            className="h-full"
                        >
                            <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift h-full">
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
                        </ScaleIn>
                    ))}
                </div>

                <InstagramReels />

                <Reveal width="100%">
                    <div className="mt-20 glass p-10 rounded-3xl text-center border border-white/20 hover-lift">
                        <h3 className="font-display text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-coffee-light bg-clip-text text-transparent">
                            Share Your Drips Moments
                        </h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Tag us on Instagram with #DripsBakery to be featured in our gallery!
                        </p>
                        <a
                            href="https://www.instagram.com/dripsbakery_udupimanipalmalpe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gradient-to-r from-primary to-coffee-light text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Follow us on Instagram
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default GallerySection;
