import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms" exact element={<Terms />}></Route>
        <Route path="/privacy" exact element={<Privacy />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
