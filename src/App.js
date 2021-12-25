import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CalculatorPage from './components/Calculator/CalculatorPage/CalculatorPage';
import ChooseBuild from './components/Calculator/ChooseBuild/ChooseBuild';
import FinalResult from './components/Calculator/FinalResult/FinalResult';
import Header from './components/Calculator/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<CalculatorPage/>} />
          <Route path="/calculatorPage" element={<CalculatorPage/>} />
          <Route path="chooseBuild" element={<ChooseBuild/>} />
          <Route path="finalResult" element={<FinalResult/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
