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
      <div className="container-video-bg">
        <video autoPlay muted loop className="bg-video">
          <source src={Video_bg} type="video/mp4" />
        </video>
      </div>
      <h1 className="title-home">
        Bienvenido a <span className="span-home">ChinchinaES</span>
      </h1>
      <p className="text-home">Conoce nuestras herramientas.</p>
      <section className="container-card">
        <Link to="/revista" className="card">
          <div className="container-card-1">
            <img src={Logo} className="card-png" alt="" />
          </div>
          <div className="container-text">
            <h3 className="title-card">Revista del café</h3>
            <p className="text-card">
              Entra a nuestra revista del cafe, encontras todo tipo de
              informacion interesante sobre chinchina y el eje cafetero
              colombiano.
            </p>
          </div>
        </Link>
        <Link to="/feria-de-la-cultura-digital" className="card">
          <div className="container-card-2">
            <img src={Logo} alt="" className="card-png" />
          </div>
          <div className="container-text">
            <h3 className="title-card">DFC</h3>
            <p className="text-card">
              conoce la feria de la cultura digital, su informacion, su sede y
              inscribete para participar en la feria digital mas grande del
              municipio de chinchina, caldas.
            </p>
          </div>
        </Link>
      </section>
      <p className="text-home">nuestros patrocinadores</p>
      <section className="container-partner">
        <img className="partner-png" src={Logo} alt="img/partner" />
        <img className="partner-png" src={Logo} alt="img/partner" />
        <img className="partner-png" src={Logo} alt="img/partner" />
        <img className="partner-png" src={Logo} alt="img/partner" />
      </section>
      <Footer_Home />
    </div>
  );
};

export default Home;
