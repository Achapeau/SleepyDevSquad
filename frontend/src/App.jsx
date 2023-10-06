import NavBar from "./components/NavBar"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer"

import "./index.css"

function App() {
  return (
    <>
      <div>
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  )
}

export default App
