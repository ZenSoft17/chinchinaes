import {
  Link,
  useState,
  Logo,
  Menu,
  Facebook,
  Youtube,
  useScroll,
} from "../../../imports";
import "../../../assets/styles/home/components/navbar.css";

const Navbar_Home = () => {
  const [ChangeState, setChangeState] = useState(false);
  const { scroll } = useScroll({ num: 0 });

  return (
    <header className="header-home">
      <nav
        className={`navbar-home ${ChangeState ? "active-home" : ""} ${
          scroll ? "scroll-home" : ""
        }`}
      >
        <img
          className="logo-png-home"
          src={Logo}
          alt="Logo de ChinchinaES"
          loading="lazy"
        />
        <ul className={`list-home ${ChangeState ? "active-list-home" : ""}`}>
          <li className="item-home">
            <Link to="/" className="item-home">
              Home
            </Link>
          </li>
          <li className="item-home">
            <Link to="/revista" className="item-home">
              Revista del café
            </Link>
          </li>
          <li className="item-home">
            <Link to="/feria-de-la-cultura-digital" className="item-home">
              DFC
            </Link>
          </li>
        </ul>
        <ul
          className={`list-2-home ${ChangeState ? "active-list-2-home" : ""}`}
        >
          <li>
            <button className="button-networks-home" aria-label="YouTube">
              <img
                src={Youtube}
                className="button-png-home"
                alt="YouTube icon"
                loading="lazy"
              />
            </button>
          </li>
          <li>
            <button className="button-networks-home" aria-label="Facebook">
              <img
                src={Facebook}
                className="button-png-home"
                alt="Facebook icon"
                loading="lazy"
              />
            </button>
          </li>
        </ul>
        <button
          onClick={() => setChangeState((prev) => !prev)}
          className={`button-menu-home ${ChangeState ? "rotate-home" : ""}`}
          aria-label="Menu"
        >
          <img
            src={Menu}
            className="button-png-home"
            alt="Menu icon"
            loading="lazy"
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar_Home;
