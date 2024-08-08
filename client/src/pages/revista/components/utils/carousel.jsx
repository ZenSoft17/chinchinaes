import { useCarousel, Link } from "../../../../imports";
import "../../../../assets/styles/revista/components/carousel.css";

const Carousel = () => {
  const obj = {
    array: [
      {
        src: "http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg",
        title: "Paisaje natural en el lago artificial",
        fecha: "27 de mayo, 2024",
      },
      {
        src: "https://imgs.search.brave.com/arkv2UI87W9GEggDTxitLnQvpBCdfW_xvfrdJuZapUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cGFpc2FqZS1mb3Jl/c3RhbF83MTc2Ny0x/MjcuanBnP3NpemU9/NjI2JmV4dD1qcGc",
        title: "Maravillas de la venezuela antioqueña",
        fecha: "20 de agosto, 2024",
      },
      {
        src: "https://imgs.search.brave.com/iED065qXfumj22FyD8cf4o3-ElPigH85gjHTA8ldM3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83MjYv/NzkwL0hELXdhbGxw/YXBlci1uYXR1cmFs/ZXphLXBhaXNhamVz/LmpwZw",
        title: "El gran rio donde se paraba tamatoba",
        fecha: "28 de diciembre, 2024",
      },
      {
        src: "http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg",
        title: "Paisaje natural en el lago artificial",
        fecha: "27 de mayo, 2024",
      },
      {
        src: "https://imgs.search.brave.com/arkv2UI87W9GEggDTxitLnQvpBCdfW_xvfrdJuZapUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cGFpc2FqZS1mb3Jl/c3RhbF83MTc2Ny0x/MjcuanBnP3NpemU9/NjI2JmV4dD1qcGc",
        title: "Maravillas de la venezuela antioqueña",
        fecha: "20 de agosto, 2024",
      },
      {
        src: "https://imgs.search.brave.com/iED065qXfumj22FyD8cf4o3-ElPigH85gjHTA8ldM3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83MjYv/NzkwL0hELXdhbGxw/YXBlci1uYXR1cmFs/ZXphLXBhaXNhamVz/LmpwZw",
        title: "El gran rio donde se paraba tamatoba",
        fecha: "28 de diciembre, 2024",
      },
      {
        src: "http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg",
        title: "Paisaje natural en el lago artificial",
        fecha: "27 de mayo, 2024",
      },
      {
        src: "https://imgs.search.brave.com/arkv2UI87W9GEggDTxitLnQvpBCdfW_xvfrdJuZapUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cGFpc2FqZS1mb3Jl/c3RhbF83MTc2Ny0x/MjcuanBnP3NpemU9/NjI2JmV4dD1qcGc",
        title: "Maravillas de la venezuela antioqueña",
        fecha: "20 de agosto, 2024",
      },
      {
        src: "https://imgs.search.brave.com/iED065qXfumj22FyD8cf4o3-ElPigH85gjHTA8ldM3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83MjYv/NzkwL0hELXdhbGxw/YXBlci1uYXR1cmFs/ZXphLXBhaXNhamVz/LmpwZw",
        title: "El gran rio donde se paraba tamatoba",
        fecha: "28 de diciembre, 2024",
      },
      {
        src: "http://localhost/chinchinaes/client/src/assets/img/paisaje.jpg",
        title: "Paisaje natural en el lago artificial",
        fecha: "27 de mayo, 2024",
      },
      {
        src: "https://imgs.search.brave.com/arkv2UI87W9GEggDTxitLnQvpBCdfW_xvfrdJuZapUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/cGFpc2FqZS1mb3Jl/c3RhbF83MTc2Ny0x/MjcuanBnP3NpemU9/NjI2JmV4dD1qcGc",
        title: "Maravillas de la venezuela antioqueña",
        fecha: "20 de agosto, 2024",
      },
      {
        src: "https://imgs.search.brave.com/iED065qXfumj22FyD8cf4o3-ElPigH85gjHTA8ldM3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83MjYv/NzkwL0hELXdhbGxw/YXBlci1uYXR1cmFs/ZXphLXBhaXNhamVz/LmpwZw",
        title: "El gran rio donde se paraba tamatoba",
        fecha: "28 de diciembre, 2024",
      },
    ],
  };

  const { Count } = useCarousel({ length: obj.array.length });

  return (
    <section className="container-carousel-revista">
      {obj.array.map((item, index) => (
        <Link
          key={index}
          className="carousel-revista"
          style={{ transform: `translateX(-${Count * 100}%)` }}
          to=""
        >
          <img
            src={item.src}
            className="carousel-png-revista"
            alt={`carousel-image-${index}`}
          />
          <h1 className="title-carousel-revista">{item.title}</h1>
          <hr className="hr-carousel-revista" />
          <p className="text-carousel-revista">{item.fecha}</p>
        </Link>
      ))}
    </section>
  );
};

export default Carousel;
