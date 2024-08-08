import {} from "../../../imports";
import "../../../assets/styles/revista/components/category.css";
import Publications from "./utils/publications";

const Category = () => {
  return (
    <section className="section-category-revista">
      <br />
      <h2 className="title-revista">La semana</h2>
      <p className="text-revista">
        Revisa las publicaciones sobre nuestro tema del mes.
      </p>
      <br />
      <Publications />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Category;
