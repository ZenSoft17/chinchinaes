import { Video_bg } from "../../../imports";
import "../../../assets/styles/revista/components/publication.css";

const Publication_revista = () => {
  return (
    <section className="container-publication-revista">
      <div className="container-title-revista">
        <img
          src="http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg"
          alt=""
          className="image-png-publication-revista"
        />
        <h2 className="title-publication-revista">La semana es redonda</h2>
        <hr className="hr-publication-revista" />
        <p className="text-publication-revista">30 de octubre, 2024</p>
      </div>
      <div className="container-content-publication-revista">
        <h3 className="sub-title-publication-revista">hola</h3>
        <h5 className="bold-text-publication-revista">hola</h5>
        <p className="sub-text-publication-revista">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          voluptate ad commodi, eius accusantium blanditiis aliquid dignissimos
          dolores odit est omnis sunt ratione mollitia architecto officia? Vel
          voluptatibus debitis sint?
        </p>
        <hr className="sub-hr-publication-revista" />
        <img
          src="http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg"
          className="sub-image-publication-revista"
          alt=""
        />
        <video className="video-publication-revista">
          <source src={Video_bg} />
        </video>
      </div>
    </section>
  );
};

export default Publication_revista;
