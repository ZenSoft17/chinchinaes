import { Link, Logo, useContext, Provider_Context } from "../../../../imports";
import "../../../../assets/styles/revista/components/authors.css";

const Authors_Modal = () => {
  const { exports } = useContext(Provider_Context);

  return (
    <div
      className={`container-modal-authors-revista ${
        exports.State_Authors_Modal ? "modal-display-flex" : ""
      }`}
    >
      <div className="modal-authors-revista">
        <button
          className="button-close-authors-revista"
          onClick={() => exports.setState_Authors_Modal((prev) => !prev)}
        >
          x
        </button>
        <img src={Logo} className="image-logo-authors-revista" alt="logo" />
        <h3 className="title-authors-revista">¿Hola de nuevo author?</h3>
        <p className="text-authors-revista">
          para iniciar tu session y poder realizar tus publicationes te
          enviaremos un codigo a tu correo
        </p>
        <form action="" className="form-post-authors-revista">
          <h3 className="title-2-authors-revista">
            Escribe tu correo eletronico
          </h3>
          <div className="inputs-group-authors-revista">
            <label htmlFor="" className="label-form-post-authors-revista">
              Correo Eletronico
              <input type="email" className="input-form-post-authors-revista" />
            </label>
            <button type="submit" className="submit-form-post-authors-revista ">
              Enviar
            </button>
          </div>
        </form>
        <br />
        <hr className="hr-authors-revista" />
        <br />
        <h3 className="title-authors-revista">¿Ya tienes tu codigo?</h3>
        <form action="" className="form-post-authors-revista">
          <h3 className="title-2-authors-revista">
            Escribe el codigo que te enviamos
          </h3>
          <div className="inputs-group-authors-revista">
            <label htmlFor="" className="label-form-post-authors-revista">
              Codigo
              <input
                type="number"
                className="input-form-post-authors-revista"
              />
            </label>
            <button type="submit" className="submit-form-post-authors-revista">
              Enviar
            </button>
          </div>
        </form>
        <p className="text-authors-revista">
          Para mas informacion acerca de los autores en el sitio, como sus
          deberes revisa nuestros
          <Link className="terms-authors-revista"> Terminos y Condiciones</Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Authors_Modal;
