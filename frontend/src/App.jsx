import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <>
    <div className="w-screen h-screen bg-almostWhite">
      <NavBar />
      <AppRoutes />
      <Footer />
      </div>
    </>
  );
}

export default App;
