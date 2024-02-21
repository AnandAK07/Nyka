// import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './components/navbar/Navbar';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <AllRoutes />
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </div>
  );
}

export default App;
