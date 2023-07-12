import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";

import ChoixVehicule from "../pages/ChoixVehicule";
import PersonnaliserVehicule from "../pages/PersonnaliserVehicule";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/choixvéhicule/" element={<ChoixVehicule />} />
      <Route
        path="/personnaliservehicule/"
        element={<PersonnaliserVehicule />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
