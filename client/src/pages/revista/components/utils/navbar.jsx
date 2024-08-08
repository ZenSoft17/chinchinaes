import {
  Logo,
  Menu,
  Menu_Vertical,
  Search,
  useScroll,
  useState,
  Link,
  useContext,
  Provider_Context,
} from "../../../../imports";
import "../../../../assets/styles/revista/components/navbar.css";
import Menu_vertical_Toggle from "./menu_vertical";

const Navbar_revista = () => {
  const [active_search, setactive_search] = useState(false);
  const { scroll } = useScroll({ num: 0 });
  const { exports } = useContext(Provider_Context);

  return (
    <header className="container-navbar-revista">
      <nav className={`navbar-revista ${scroll ? "scroll-navbar" : ""}`}>
        <img
          src={Logo}
          className={`logo-revista-png ${
            active_search ? "display-none-revista" : ""
          }`}
          alt="logo"
        />
        <ul
          className={`list-nav-revista ${
            active_search ? "display-none-revista" : ""
          }`}
        >
          <li className="item-nav-revista">
            <span className="cat-special-revista">La semana</span>
          </li>
          <li className="item-nav-revista">
            <Link to="">Categoria</Link>
          </li>
          <li className="item-nav-revista">
            <Link to="">Categoria</Link>
          </li>
          <li className="item-nav-revista">
            <Link to="">Categoria</Link>
          </li>
          <li className="item-nav-revista">
            <Link to="">Categoria</Link>
          </li>
          <li className="item-nav-revista">
            <Link to="">Categoria</Link>
          </li>
          <li className="item-nav-revista">
            <Link to="">Otros</Link>
          </li>
        </ul>
        <button
          className={`button-authors-revista ${
            active_search ? "display-none-revista" : ""
          }`}
          onClick={() => exports.setState_Authors_Modal((prev) => !prev)}
        >
          autores
        </button>
        <button
          className={`search-active-revista ${
            active_search ? "display-none-revista" : ""
          }`}
          onClick={() => setactive_search((prev) => !prev)}
        >
          <img src={Search} className="image-png-revista" alt="image" />
        </button>
        <form
          className={`container-search-revista ${
            active_search ? "display-flex-revista" : ""
          }`}
        >
          <input
            type="text"
            className="input-search-revista"
            placeholder="Buscar..."
            name="search"
          />
          <input type="submit" className="submit-revista" />
          <button
            type="reset"
            className="search-close-revista"
            onClick={() => setactive_search((prev) => !prev)}
          >
            x
          </button>
        </form>
        <button
          className={`button-menu-revista  ${
            active_search ? "display-none-revista" : ""
          }`}
          onClick={() => exports.setState_Menu_Vertical((prev) => !prev)}
        >
          <img src={Menu_Vertical} className="image-png-revista" alt="menu" />
        </button>
        <Menu_vertical_Toggle />
      </nav>
    </header>
  );
};

export default Navbar_revista;
