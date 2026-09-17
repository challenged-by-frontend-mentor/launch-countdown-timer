import IconFacebook from "../assets/icon-facebook.svg"
import IconInstagram from "../assets/icon-instagram.svg"
import IconPinterest from "../assets/icon-pinterest.svg"

const CONTACT_DATA = [
  { contact: "Facebook", icon: IconFacebook },
  { contact: "Pinterest", icon: IconPinterest },
  { contact: "Instagram", icon: IconInstagram },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        {CONTACT_DATA.map(item => (
            <a
            href="#"
            className="footer__social-link"
            aria-label={`Visit our ${item.contact} page`}
            key={item.contact}
            >
            <img
                src={item.icon}
                alt=""
                className={`footer__social-icon footer__social-icon--${item.contact.toLowerCase()}`}
                aria-hidden="true"
            />
            </a>
        ))}
      </div>
      <p className="footer__attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/VangmanawKairung"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Kairung Vangmanaw
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
