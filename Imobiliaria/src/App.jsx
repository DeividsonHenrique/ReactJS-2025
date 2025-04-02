import Header from "./Components/Header";
import Global from "./Components/Styles/Global";
// import Banner from "./Components/Banner";
// import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Imobi from "./Pages/Imobi";


function App() {
  return (
    <>
      <Header />
      {/* <Banner />
      <Home /> */}
      <Imobi />
      <Footer />
      <Global />
    </>
  );
}

export default App;
