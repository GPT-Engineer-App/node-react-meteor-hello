import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
