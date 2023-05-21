import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Tables from './Tables/Tables';
import Billing from './Billing/Billing';
import Vr from './VR/Vr';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar /> */}
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/tables" element={<Tables />}/>
            <Route path="/billing" element={<Billing />}/>
            <Route path="/vr" element={<Vr />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
