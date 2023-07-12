import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import "./styles/App.module.scss";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="page">        
        <div className="content">
          <AppRoutes />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
