import "./styles/main.css"
import "./styles/reset.css"

import Navi from "./components/navi/Navi";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">

    <Navi/>
    <Home/>
    <Projects/>
    <Footer/>

    </div>
  );
}

export default App;
