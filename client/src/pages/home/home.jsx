import {
  useContext,
  Provider_Context,
  Video_bg,
  Link,
  Logo,
} from "../../imports";
import Navbar_Home from "./componets/navbar";
import Footer_Home from "./componets/footer";
import "../../assets/styles/home/home.css";

const Home = () => {
  return (
    <div className="container-home">
      <Navbar_Home />
      <div className="container-video-bg-home">
        <video autoPlay muted loop className="bg-video-home" preload="auto">
          <source src={Video_bg} type="video/mp4" />
        </video>
      </div>
      <h1 className="title-home">
        Bienvenido a <span className="span-home">ChinchinaES</span>
      </h1>
      <p className="text-home">Conoce nuestras herramientas.</p>
      <section className="container-card-home">
        <Link to="/revista" className="card-home">
          <div className="container-card-1-home">
            <img
              src={Logo}
              className="card-png-home"
              alt="Revista del café"
              loading="lazy"
            />
          </div>
          <div className="container-text-home">
            <h3 className="title-card-home">Revista del café</h3>
            <p className="text-card-home">
              Entra a nuestra revista del cafe, encontras todo tipo de
              informacion interesante sobre chinchina y el eje cafetero
              colombiano.
            </p>
          </div>
        </Link>
        <Link to="/feria-de-la-cultura-digital" className="card-home">
          <div className="container-card-2-home">
            <img
              src={Logo}
              alt="Feria de la Cultura Digital"
              className="card-png-home"
              loading="lazy"
            />
          </div>
          <div className="container-text-home">
            <h3 className="title-card-home">DFC</h3>
            <p className="text-card-home">
              Conoce la feria de la cultura digital, su informacion, su sede y
              inscribete para participar en la feria digital mas grande del
              municipio de chinchina, caldas.
            </p>
          </div>
        </Link>
      </section>
      <p className="text-home">Nuestros patrocinadores</p>
      <section className="container-partner-home">
        <img
          className="partner-png-home"
          src={Logo}
          alt="Patrocinador"
          loading="lazy"
        />
        <img
          className="partner-png-home"
          src={Logo}
          alt="Patrocinador"
          loading="lazy"
        />
        <img
          className="partner-png-home"
          src={Logo}
          alt="Patrocinador"
          loading="lazy"
        />
        <img
          className="partner-png-home"
          src={Logo}
          alt="Patrocinador"
          loading="lazy"
        />
      </section>
      <Footer_Home />
    </div>
  );
};

export default Home;
