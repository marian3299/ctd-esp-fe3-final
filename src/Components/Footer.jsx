import FooterStyles from "../styles/footer.module.css";
import DHLogo from "../assets/images/DH.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className={FooterStyles.firmContainer}>
        <p>MADE BY: MARIANA ❤</p>
      </div>
      <div className={FooterStyles.logosContainer}>
        <img src={DHLogo} alt="DH logo" className={FooterStyles.DHlogo} />
        <div className={FooterStyles.iconsContainer}>
          <FaFacebookSquare className={FooterStyles.icon} />
          <FaSquareInstagram className={FooterStyles.icon} />
          <AiFillTikTok className={FooterStyles.icon} />
          <FaSquareWhatsapp className={FooterStyles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
