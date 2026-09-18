import IconFacebook from "../assets/icon-facebook.svg?react";
import IconInstagram from "../assets/icon-instagram.svg?react";
import IconPinterest from "../assets/icon-pinterest.svg?react";

const CONTACT_DATA = [
  { contact: "Facebook", Icon: IconFacebook },
  { contact: "Pinterest", Icon: IconPinterest },
  { contact: "Instagram", Icon: IconInstagram },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        {CONTACT_DATA.map(({contact, Icon}) => (
          <a
            href="#"
            className="footer__social-link"
            aria-label={`Visit our ${contact} page`}
            key={contact}
          >
            <Icon
              className={`footer__social-icon footer__social-icon--${contact.toLowerCase()}`}
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
