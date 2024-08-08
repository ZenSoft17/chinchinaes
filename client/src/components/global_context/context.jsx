import { useFuntions } from "../../imports";
import { Provider_Context } from "./provider";

const Global_Context = ({ children }) => {
  const {
    State_Authors_Modal,
    State_Menu_Vertical,
    setState_Menu_Vertical,
    setState_Authors_Modal,
  } = useFuntions();

  const exports = {
    State_Authors_Modal,
    State_Menu_Vertical,
    setState_Authors_Modal,
    setState_Menu_Vertical
  };

  return (
    <Provider_Context.Provider value={{ exports }}>
      {children}
    </Provider_Context.Provider>
  );
};

export default Global_Context;
