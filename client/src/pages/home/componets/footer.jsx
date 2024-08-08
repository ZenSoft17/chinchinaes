import { Youtube, Logo, Link } from "../../../imports";
import "../../../assets/styles/home/components/footer.css";

const Footer_Home = () => {
  return (
    <footer className="footer-home">
      <div className="container-links-home">
        <ul className="list-footer-home">
          <li className="item-footer-title-home">Navegacion</li>
          <li className="item-footer-home">
            <Link to="/" className="item-footer-home">
              Home
            </Link>
          </li>
          <li className="item-footer-home">
            <Link to="/revista" className="item-footer-home">
              Revista del café
            </Link>
          </li>
          <li className="item-footer-home">
            <Link
              to="/feria-de-la-cultura-digital"
              className="item-footer-home"
            >
              DFC
            </Link>
          </li>
        </ul>
        <ul className="list-footer-home">
          <li className="item-footer-title-home">Politicas del sitio</li>
          <li className="item-footer-home">
            <Link to="terms" className="item-footer-home">
              Terminos y Condiciones
            </Link>
          </li>
        </ul>
        <ul className="list-networks-home">
          <a
            href="https://www.twitter.com"
            className="item-network-home"
            aria-label="Twitter"
          >
            <img
              className="item-nework-png-home"
              src={Youtube}
              alt="Icono de YouTube"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.twitter.com"
            className="item-network-home"
            aria-label="Twitter"
          >
            <img
              className="item-nework-png-home"
              src={Youtube}
              alt="Icono de YouTube"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.twitter.com"
            className="item-network-home"
            aria-label="Twitter"
          >
            <img
              className="item-nework-png-home"
              src={Youtube}
              alt="Icono de YouTube"
              loading="lazy"
            />
          </a>
        </ul>
      </div>
      <div className="container-by-home">
        <p className="text-footer-home">By</p>
        <div className="by-home">
          <img
            src={Logo}
            alt="Logotipo de CorpoSer"
            className="by-png-home"
            loading="lazy"
          />
          <p className="by-text-home">CorpoSer</p>
        </div>
        <div className="by-home">
          <img
            src={Logo}
            alt="Logotipo de ChinchinaES"
            className="by-png-home"
            loading="lazy"
          />
          <p className="by-text-home">ChinchinaES</p>
        </div>
        <p className="text-footer-home">@ CorpoSer.org, all rights reserved.</p>
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer_Home;
