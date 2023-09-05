
import './WhatsAppButton.css'; // Importa tus estilos CSS
import whatsappIcon from "../../img/whatsapp-logo.webp";
const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a href="https://wa.link/abyi6g" target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;