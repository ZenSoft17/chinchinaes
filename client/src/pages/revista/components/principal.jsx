import {} from "../../../imports";
import "../../../assets/styles/revista/components/content.css";
import Publications from "./utils/publications";
import Carousel from "./utils/carousel";

const Content = () => {
  return (
    <section className="section-content-revista">
      <Carousel />
      <br />
      <h2 className="title-revista">La semana</h2>
      <p className="text-revista">
        Revisa las publicaciones sobre nuestro tema del mes.
      </p>
      <br />
      <Publications />
      <br />
      <h2 className="title-revista">Todas las categorias</h2>
      <p className="text-revista">
        navega entre las publicaciones de alta calidad de nuestros autores y
        autoras.
      </p>
      <br />
      <Publications />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Content;
