import logo from './logo.svg';
import './App.css';
import TeamPage from "./pageComponents/TeamPage";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/team/:teamName" element={<TeamPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
