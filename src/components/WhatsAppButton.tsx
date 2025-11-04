import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "911234567890"; // Replace with actual number
    const message = encodeURIComponent("Hi! I'd like to order from Drips Bakery & Cafe.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default WhatsAppButton;
