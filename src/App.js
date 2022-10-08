import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="terms">
          <Terms />
        </Route>
        <Route path="privacy">
          <Privacy />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
