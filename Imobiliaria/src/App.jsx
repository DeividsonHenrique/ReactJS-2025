import { Fragment } from "react";
import Global from "./Components/Styles/Global";
import RouterApp from "./Routes";

function App() {
  return (
    <Fragment>
      <RouterApp />
      <Global />
    </Fragment>
  );
}

export default App;
