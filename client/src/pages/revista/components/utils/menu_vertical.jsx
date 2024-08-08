import { Logo, Link, useContext, Provider_Context } from "../../../../imports";
import "../../../../assets/styles/revista/components/menu_vertical.css";

const Menu_vertical_Toggle = () => {
  const { exports } = useContext(Provider_Context);
  return (
    <div
      className={`container-menu-vertical ${
        exports.State_Menu_Vertical ? "menu-vertical-display-flex-revista" : ""
      }`}
    >
      <ul className="list-menu-vertical-revista">
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">La semana</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Categoria</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Categoria</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Categoria</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Categoria</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Categoria</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <img src={Logo} className="image-menu-vertical-revista" alt="" />
          <Link className="link-menu-vertical-revista">Otros</Link>
        </li>
        <li className="item-menu-vertical-revista">
          <button
            className="authors-menu-vertical-revista"
            onClick={() => exports.setState_Authors_Modal((prev) => !prev)}
          >
            Autores
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu_vertical_Toggle;
