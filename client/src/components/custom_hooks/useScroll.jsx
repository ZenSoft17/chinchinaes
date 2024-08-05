import { useState, useEffect } from "../../imports";

const useScroll = () => {
  const [scroll, setscroll] = useState(false);

  const handle = () => {
    setscroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return { scroll };
};

export default useScroll;
