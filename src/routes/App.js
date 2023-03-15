import { BrowserRouter,Route, Routes } from "react-router-dom";
import Carrito from "../containers/Carrito";
import Home from "../containers/Home";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";

function App() {
  return (
    <div className="App">

      {/* Agrego bootsrap por cdn */}

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />

        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/carrito" element={<Carrito/>}></Route>
              <Route exact path="/producto" element={<Producto/>}></Route>
            </Routes>
          </Layout>        
        </BrowserRouter>
    </div>
  );
}

export default App;
