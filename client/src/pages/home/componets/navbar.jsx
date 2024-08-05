import { Link, useState, Logo, Menu, Facebook, Youtube, } from "../../../imports";
import "../../../assets/styles/home/components/navbar.css";

const Navbar_Home = () => {
  const [ChangeState, setChangeState] = useState(false);

  return (
    <header className="header-home">
      <nav
        className={`navbar ${ChangeState ? "active" : ""} ${false ? "scroll" : ""}`}
      >
        <img className="logo-png" src={Logo} alt="" />
        <ul className={`list ${ChangeState ? "active-list" : ""}`}>
          <li className="item">
            <Link to="/" className="item">Home</Link>
          </li>
          <li className="item">
            <Link to="/revista" className="item">Revista del café</Link>
          </li>
          <li className="item">
            <Link to="/feria-de-la-cultura-digital" className="item">DFC</Link>
          </li>
        </ul>
        <ul className={`list-2 ${ChangeState ? "active-list-2" : ""}`}>
          <li>
            <button className="button-networks">
              <img src={Youtube} className="button-png" alt="" />
            </button>
          </li>
          <li>
            <button className="button-networks">
              <img src={Facebook} className="button-png" alt="" />
            </button>
          </li>
        </ul>
        <button
          onClick={() => setChangeState((prev) => !prev)}
          className={`button-menu ${ChangeState ? "rotate" : ""}`}
        >
          <img src={Menu} className="button-png" alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar_Home;
