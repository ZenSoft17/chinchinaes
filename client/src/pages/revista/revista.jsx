import { Footer_Home, Routes, Route } from "../../imports";
import "../../assets/styles/revista/revista.css";
import Category from "./components/category";
import Navbar_revista from "./components/utils/navbar";
import Content from "./components/principal";
import Search_revista from "./components/search";
import Publication_revista from "./components/publication";
import Authors_Modal from "./components/utils/authors";

const Revista = () => {
  return (
    <div className="container-revista">
      <Authors_Modal />
      <Navbar_revista />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search_revista />} />
        <Route path="/publication" element={<Publication_revista />} />
        <Route path="*" element={<Content />} />
      </Routes>
      <Footer_Home />
    </div>
  );
};

export default Revista;
