import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "6285277142741";
  const message = "Halo, saya ingin bertanya tentang layanan Metronet.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full shadow-lg transition-all transform hover:scale-105 z-50"
    >
      <FaWhatsapp size={26} />
      <span className="font-medium">Hubungi Kami</span>
    </a>
  );
};

export default WhatsAppButton;
