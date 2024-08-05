import { Youtube, Logo, Link } from "../../../imports";
import "../../../assets/styles/home/components/footer.css";

const Footer_Home = () => {
  return (
    <footer className="footer-home">
      <div className="container-links">
        <ul className="list-footer">
          <li className="item-footer-title">Navegacion</li>
          <li className="item-footer">
            <Link to="/" className="item-footer">
              Home
            </Link>
          </li>
          <li className="item-footer">
            <Link to="/revista" className="item-footer">
              Revista del café
            </Link>
          </li>
          <li className="item-footer">
            <Link to="/feria-de-la-cultura-digital" className="item-footer">
              DFC
            </Link>
          </li>
        </ul>
        <ul className="list-footer">
          <li className="item-footer-title">Politicas del sitio</li>
          <li className="item-footer">
            <Link to="terms" className="item-footer">
              Terminos y Condiciones
            </Link>
          </li>
        </ul>
        <ul className="list-networks">
          <li className="item-network">
            <img className="item-nework-png" src={Youtube} alt="" />
          </li>
          <li className="item-network">
            <img className="item-nework-png" src={Youtube} alt="" />
          </li>
          <li className="item-network">
            <img className="item-nework-png" src={Youtube} alt="" />
          </li>
        </ul>
      </div>
      <div className="container-by">
        <p className="text-footer">By</p>
        <div className="by">
          <img src={Logo} alt="" className="by-png" />
          <p className="by-text">CorpoSer</p>
        </div>
        <div className="by">
          <img src={Logo} alt="" className="by-png" />
          <p className="by-text">ChinchinaES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer_Home;
