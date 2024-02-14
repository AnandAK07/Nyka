// import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
