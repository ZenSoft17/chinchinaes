import {} from "../../imports";
import { Provider_Context } from "./provider";

const Global_Context = ({ children }) => {

  const hola = "hola que tal";

  return <Provider_Context.Provider value={{ hola}}>
    {children}
  </Provider_Context.Provider>;
};

export default Global_Context;
