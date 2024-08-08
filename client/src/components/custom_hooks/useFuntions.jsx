import { useEffect, useState } from "../../imports";

const useFuntions = () => {
  const [State_Authors_Modal, setState_Authors_Modal] = useState(false);
  const [State_Menu_Vertical, setState_Menu_Vertical] = useState(false);

  return {
    State_Authors_Modal,
    State_Menu_Vertical,
    setState_Menu_Vertical,
    setState_Authors_Modal
  };
};

export default useFuntions;
