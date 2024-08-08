import { Link } from "../../../imports";
import "../../../assets/styles/revista/components/search.css";

const Search_revista = () => {
  return (
    <section className="section-search-revista">
      <br />
      <h5 className="title-search-revista">Busqueda</h5>
      <p className="text-search-revista">
        hay <span className="count-search-revista">3</span> resultados para tu
        busqueda
      </p>
      <br />
      <Link className="container-content-search-revista">
        <img
          src="http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg"
          alt="image-search"
          className="image-search-png-revista"
        />
        <div className="row-search-revista">
          <span className="category-search-revista">categoria 1</span>
          <h6 className="title-section-search-revista">La patagonia</h6>
          <p className="text-section-search-revista">
            la patagonia en chinchina es la punto del monte
          </p>
        </div>
      </Link>
      <br />
    </section>
  );
};

export default Search_revista;
