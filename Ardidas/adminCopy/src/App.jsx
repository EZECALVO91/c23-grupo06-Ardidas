import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={DashboardPage} />
        {/* Agrega más rutas según sea necesario */}
      </div>
    </Router>
  );
};
export default App
