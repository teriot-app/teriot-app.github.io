import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <Router>
      <Route path="terms">
        <Terms />
      </Route>
      <Route path="privacy">
        <Privacy />
      </Route>
    </Router>
  );
}

export default App;
