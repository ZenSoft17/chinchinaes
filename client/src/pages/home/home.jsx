import { useContext, Provider_Context } from "../../imports";
import Navbar_Home from "./componets/navbar";
import Footer_Home from "./componets/footer";
import "../../assets/styles/home/home.css";

const Home = () => {

    const {hola} = useContext(Provider_Context);
  return (
    <div>Home  {hola}</div>    
  );
};

export default Home;
