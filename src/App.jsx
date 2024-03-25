import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheHeader from "./assets/components/the-header/TheHeader";
import FormF from "./assets/components/form-f/FormF";
import ListF from "./assets/components/list-f/ListF";
import NavF from "./assets/components/nav-f/NavF";
import Footer from "./assets/components/footer/Footer";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <div className="page-container">
            <div className="main-content">
              <NavF />
              <Routes>
                <Route path="/" element={<TheHeader />} />
                <Route path="/form" element={<FormF />} />
                <Route path="/list" element={<ListF />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
