import './App.css';
import TeamPage from "./pageComponents/TeamPage";
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";
import {MatchPage} from "./pageComponents/MatchPage";
import {HomePage} from "./pageComponents/HomePage";
function App() {
  return (
    <div className="App">
        <HashRouter>
        <Routes>
            <Route path="/team/:teamName" element={<TeamPage />} />
            <Route path="/team/:teamName/matches/:year" element={<MatchPage/>} />
            <Route path="/" element={<HomePage/>} />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
