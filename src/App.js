import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Terms from "./pages/Terms";
import Privacy from "./pages/privacy";

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
